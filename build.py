#!/bin/python

import json
from jinja2 import Template

with open('templates/index.html.j2', 'r') as file:
    template = file.read()

with open('data/background.json', 'r') as file:
    background = json.loads(file.read())

with open('data/readings.json', 'r') as file:
    readings = json.loads(file.read())

with open('www/index.html', 'w') as output:
    output.write(Template(template).render(
        background=background,
        readings=readings
    ))

