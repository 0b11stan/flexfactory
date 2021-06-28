up:
	docker run --volume $$PWD/www/:/usr/share/nginx/html/ --rm --name flexfactory flexfactory

build:
	cp -r files www/
	python build.py
