# CampusaCampusaCampusa

#### For building docker container:
    docker build --build-arg --rm=true -t campusa .

#### For running docker container:
    docker run --name campusa --rm=true -e "PORT=8000" -p 8000:8000 campusa

#### For formatting code:
    isort backend frontend project manage.py
	black backend frontend project manage.py

#### For linting code:
    flake8 backend frontend project manage.py
	mypy backend frontend project manage.py
