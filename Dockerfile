FROM ubuntu:16.04
WORKDIR /node

RUN apt-get update
RUN apt-get install -y  curl
RUN curl -LO https://nodejs.org/dist/v8.11.3/node-v8.11.3-linux-x64.tar.xz

RUN tar -xvf node-v8.11.3-linux-x64.tar.xz
RUN mv node-v8.11.3-linux-x64.tar.xz/bin/* /usr/local/bin

WORKDIR /app
COPY server.js .
CMD ["node","server.js"]