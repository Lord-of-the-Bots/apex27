"""Package both APEX 27 dashboards for SimHub."""
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile
import json
import argparse
import re
import shutil

ROOT = Path(__file__).resolve().parent
NAMES = ('APEX 27', 'APEX 27 Full')

def dashboard_version(source, name):
    dashboard = json.loads((source / (name + '.djson')).read_text(encoding='utf-8'))
    metadata = json.loads((source / (name + '.djson.metadata')).read_text(encoding='utf-8'))
    validate_border_radii(dashboard, name)
    descriptions = [metadata.get('Description', ''), dashboard.get('Metadata', {}).get('Description', '')]
    versions = [re.match(r'^v(\d+\.\d+\.\d+)\b', value) for value in descriptions]
    if not all(versions) or versions[0].group(1) != versions[1].group(1):
        raise ValueError(f'{name}: dashboard and sidecar versions must match.')
    return versions[0].group(1)

def dashboard_files(source, name):
    stem = name + '.djson'
    required = [source / (stem + suffix) for suffix in ('', '.metadata', '.carclasses', '.ressources', '.png')]
    for file in required:
        if not file.is_file():
            raise FileNotFoundError(file)
    previews = sorted(file for file in source.iterdir()
                      if file.is_file() and re.fullmatch(re.escape(stem) + r'\.\d+\.png', file.name))
    return required + previews

def validate_border_radii(value, path='dashboard'):
    """SimHub reads BorderStyle radii as Int32, not floating-point JSON tokens."""
    if isinstance(value, dict):
        border = value.get('BorderStyle', {})
        for key, radius in border.items():
            if key.startswith('Radius') and (type(radius) is not int or not 0 <= radius <= 2147483647):
                raise ValueError(f'{path}.BorderStyle.{key} must be an integer: {radius!r}')
        for key, child in value.items():
            validate_border_radii(child, f'{path}.{key}')
    elif isinstance(value, list):
        for index, child in enumerate(value):
            validate_border_radii(child, f'{path}[{index}]')

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--release', action='store_true', help='Also assemble the plugin, instructions, previews and publication ZIP.')
    args = parser.parse_args()
    versions = {dashboard_version(ROOT / 'dashboards' / name, name) for name in NAMES}
    if len(versions) != 1:
        raise ValueError('Both dashboard variants must have the same version.')
    version = versions.pop()
    files = {name: dashboard_files(ROOT / 'dashboards' / name, name) for name in NAMES}
    output = ROOT.parent / 'releases' / 'dashboards'
    output.mkdir(parents=True, exist_ok=True)
    for name in NAMES:
        destination = output / (name + '.simhubdash')
        with ZipFile(destination, 'w', ZIP_DEFLATED) as archive:
            for file in files[name]:
                archive.write(file, name + '/' + file.name)
            archive.write(ROOT / 'APEX27.js', name + '/JavascriptExtensions/APEX27.js')
        print(destination)
    if args.release:
        release = output.parent
        plugin = ROOT / 'plugin' / 'bin' / 'Apex27Plugin.dll'
        if not plugin.is_file():
            raise FileNotFoundError('Build src/plugin/build.ps1 before assembling a release.')
        (release / 'plugins').mkdir(exist_ok=True)
        (release / 'previews').mkdir(exist_ok=True)
        shutil.copy2(plugin, release / 'plugins' / plugin.name)
        shutil.copy2(ROOT.parent / 'INSTALL.md', release / 'INSTALL.md')
        members = [release / 'INSTALL.md', release / 'plugins' / plugin.name]
        members.extend(output / (name + '.simhubdash') for name in NAMES)
        for variant in ('standard', 'full'):
            for mode in ('race', 'practice', 'qualifying'):
                name = f'{variant}-{mode}.png'
                destination = release / 'previews' / name
                shutil.copy2(ROOT.parent / 'assets' / name, destination)
                members.append(destination)
        destination = release / f'APEX27-v{version}.zip'
        # Use explicit product files: unrelated files in releases are never included.
        with ZipFile(destination, 'w', ZIP_DEFLATED) as archive:
            for file in members:
                archive.write(file, 'APEX27/' + file.relative_to(release).as_posix())
        print(destination)

if __name__ == '__main__':
    main()
