www:
	-mkdir www
	cp -r files/* www/
	python build.py

clean:
	rm -r www
