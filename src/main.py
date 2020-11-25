from jinja2 import Template
from config import *

TEMPLATE_PATH = "index.html.j2"

def build_background(template, year):
    with open(f"../www/background_{year}.html", 'w') as ofile:
        ofile.write(template.render(
            subjects=subjects,
            background=background,
            links=links,
            selectedyear=year
        ))

def build_index(template):
    with open("../www/index.html", 'w') as ofile:
        ofile.write(template.render(
            subjects=subjects,
            background=background,
            links=links,
        ))

def main():
    with open(TEMPLATE_PATH, 'r') as tfile:
        template = Template(tfile.read())
    build_index(template)
    for year in background:
        build_background(template, year)



if __name__ == "__main__":
    main()
