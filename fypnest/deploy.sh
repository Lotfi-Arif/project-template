kind create cluster fyp
docker build . -t fyp-backend
kind load docker-image fyp-backend --name=fyp