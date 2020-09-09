FROM ubuntu
LABEL maintainer="Wei CHEN <wei.chen@u-bordeaux.fr>"

# Install node
RUN apt-get update -y \
	&& apt-get install curl -y
RUN curl -o /usr/local/bin/n https://raw.githubusercontent.com/visionmedia/n/master/bin/n
RUN chmod +x /usr/local/bin/n
RUN n latest

RUN mkdir /tmp/api
WORKDIR /tmp/api
RUN mkdir routes
COPY routes/*.js routes/
COPY server.js .
COPY package.json .

RUN npm install

EXPOSE 8086

CMD ["node","server.js","--mongo=mongo"]


