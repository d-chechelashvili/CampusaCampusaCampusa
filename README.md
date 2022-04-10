# CampusaCampusaCampusa

### For building docker container:
    docker build --build-arg --rm=true -t campusa .

### For running docker container:
    docker run --name campusa --rm=true -e "PORT=8000" -p 8000:8000 campusa
