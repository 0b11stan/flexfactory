#!/bin/python

import json
from jinja2 import FileSystemLoader, Environment

loader = FileSystemLoader("templates")


def build_page(template, **data):
    return Environment(loader=loader).from_string(template).render(data)


def read_file(basedir, name):
    with open(f'{basedir}/{name}', 'r') as file:
        if '.json' in name:
            return json.loads(file.read())
        return file.read()


def read_data(name):
    return read_file('data', f'{name}.json')


def read_template(name):
    return read_file('templates', f'{name}.html.j2')


background = read_data('background')
readings = read_data('readings')
articles = read_data('articles')

with open('www/readings.html', 'w') as output:
    output.write(build_page(read_template('readings'),
                            background=background,
                            readings=readings))

with open('www/articles.html', 'w') as output:
    output.write(build_page(read_template('articles'), background=background,
                            articles=articles))

# TODO : just use a redirect on proxy
with open('www/index.html', 'w') as output:
    output.write(build_page(read_template('articles'), background=background,
                            articles=articles))
