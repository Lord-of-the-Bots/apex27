"""Package both APEX 27 dashboards for SimHub."""
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile
import json

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

if __name__ == '__main__':
    main()
