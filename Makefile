VENV=source venv/bin/activate &&

venv:
	python -m venv venv
	${VENV} pip install -r requirements.txt

clean:
	rm -rf venv

build:
	python main.py

serve:
	python -m http.server --directory www
