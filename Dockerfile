FROM python:3.10
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /CampusaCampusaCampusa
COPY . /CampusaCampusaCampusa/
RUN pip install -r requirements.txt
CMD python project/manage.py runserver 0.0.0.0:$PORT