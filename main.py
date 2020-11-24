from jinja2 import Template
from config import *

TEMPLATE_PATH = "index.html.j2"
OUTPUT_PATH = "www/index.html"

def main():
    with open(TEMPLATE_PATH, 'r') as tfile:
        with open(OUTPUT_PATH, 'w') as ofile:
            ofile.write(
                Template(tfile.read()).render(
                    subjects=subjects,
                    background=background,
                    links=links
                )
            )


if __name__ == "__main__":
    main()
