FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /CampusaCampusaCampusa

COPY backend /CampusaCampusaCampusa/backend
COPY frontend/*.py /CampusaCampusaCampusa/frontend/
COPY frontend/migrations /CampusaCampusaCampusa/frontend/migrations
COPY frontend/reactjs/public /CampusaCampusaCampusa/frontend/reactjs/public
COPY frontend/reactjs/src /CampusaCampusaCampusa/frontend/reactjs/src
COPY frontend/reactjs/*.json /CampusaCampusaCampusa/frontend/reactjs/
COPY frontend/reactjs/.env /CampusaCampusaCampusa/frontend/reactjs/
COPY project /CampusaCampusaCampusa/project
COPY manage.py /CampusaCampusaCampusa/
COPY requirements.txt /CampusaCampusaCampusa/

RUN pip install -r requirements.txt
RUN apt-get update && apt-get install npm -y
RUN cd frontend/reactjs && npm ci
RUN cd frontend/reactjs && chmod +x node_modules/.bin/react-scripts && npm run build
CMD python manage.py runserver 0.0.0.0:$PORT
