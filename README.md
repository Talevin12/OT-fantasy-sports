Build docker container:
docker build -t ot-fantasy-sports .

Run docker container
docker run -d -p 8080:8080 --name ot-fantasy-sports ot-fantasy-sports