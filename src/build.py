"""Package both APEX 27 dashboards for SimHub."""
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parent

def main():
    output = ROOT / 'dist'
    output.mkdir(exist_ok=True)
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
