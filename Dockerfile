FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /CampusaCampusaCampusa

COPY backend /CampusaCampusaCampusa/backend
COPY frontend /CampusaCampusaCampusa/frontend
COPY project /CampusaCampusaCampusa/project
COPY manage.py /CampusaCampusaCampusa/
COPY requirements.txt /CampusaCampusaCampusa/

RUN pip install -r requirements.txt

CMD python manage.py runserver 0.0.0.0:$PORT
