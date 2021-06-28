#!/bin/python

import json
from jinja2 import Template

with open('templates/index.html.j2', 'r') as index:
    template = index.read()

with open('data/background.json', 'r') as data:
    background = json.loads(data.read())

with open('www/index.html', 'w') as output:
    output.write(Template(template).render(background=background))
