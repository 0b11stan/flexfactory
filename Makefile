VENV=source venv/bin/activate &&

venv:
	python -m venv venv
	${VENV} pip install -r requirements.txt

clean:
	rm -rf venv
	rm -rf www/*

build:
	cp -r src/css src/img src/webfonts www/
	cd src && python main.py

serve:
	python -m http.server --directory www
