kind create cluster fyp
docker build . -t fyp-backend
kind load docker-image fyp-backend --name=fyp
kubectl apply -f k8s/postgres.yaml
kubectl apply -f k8s/app.yaml