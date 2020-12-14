from jinja2 import Template
from config import *

TEMPLATE_INDEX = "index.html.j2"
TEMPLATE_STYLE = "css/background.css.j2"


def build_index():
    with open(TEMPLATE_INDEX, 'r') as tfile:
        template = Template(tfile.read())
    with open("../www/index.html", 'w') as ofile:
        ofile.write(template.render(
            subjects=subjects,
            background=background,
            links=links
        ))


def main():
    build_index()


if __name__ == "__main__":
    main()
