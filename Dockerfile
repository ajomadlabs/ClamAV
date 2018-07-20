FROM ubuntu:16.04
WORKDIR /node

RUN apt-get update
RUN apt-get install -y  curl
RUN curl -LO https://nodejs.org/dist/v8.11.3/node-v8.11.3-linux-x64.tar.xz

RUN apt-get install xz-utils
RUN tar xvf node-v8.11.3-linux-x64.tar.xz
ENV PATH="/node/node-v8.11.3-linux-x64/bin:${PATH}"

RUN apt-get install -y clamav

WORKDIR /app
COPY server.js server.js
COPY package.json package.json
COPY uploads uploads
COPY routes routes
RUN npm install
CMD ["node","server.js"]