"""Package both APEX 27 dashboards for SimHub."""
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile
import json
import argparse
import re
import shutil

ROOT = Path(__file__).resolve().parent

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
    for name in ('APEX 27', 'APEX 27 Full'):
        dashboard = ROOT / 'dashboards' / name / (name + '.djson')
        validate_border_radii(json.loads(dashboard.read_text(encoding='utf-8')), name)
    output = ROOT.parent / 'releases' / 'dashboards'
    output.mkdir(parents=True, exist_ok=True)
    for name in ('APEX 27', 'APEX 27 Full'):
        source = ROOT / 'dashboards' / name
        destination = output / (name + '.simhubdash')
        with ZipFile(destination, 'w', ZIP_DEFLATED) as archive:
            for file in sorted(source.iterdir()):
                if file.is_file():
                    archive.write(file, name + '/' + file.name)
            archive.write(ROOT / 'APEX27.js', name + '/JavascriptExtensions/APEX27.js')
        print(destination)
    if args.release:
        release = output.parent
        plugin = ROOT / 'plugin' / 'bin' / 'Apex27Plugin.dll'
        if not plugin.is_file():
            raise FileNotFoundError('Build src/plugin/build.ps1 before assembling a release.')
        version_source = (ROOT / 'plugin' / 'Apex27Plugin.cs').read_text(encoding='utf-8')
        version = re.search(r'AssemblyFileVersion\("(\d+\.\d+\.\d+)\.0"\)', version_source).group(1)
        (release / 'plugins').mkdir(exist_ok=True)
        (release / 'previews').mkdir(exist_ok=True)
        shutil.copy2(plugin, release / 'plugins' / plugin.name)
        shutil.copy2(ROOT.parent / 'INSTALL.md', release / 'INSTALL.md')
        members = [release / 'INSTALL.md', release / 'plugins' / plugin.name]
        members.extend(output / (name + '.simhubdash') for name in ('APEX 27', 'APEX 27 Full'))
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
