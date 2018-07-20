FROM node
RUN apt-get  update
RUN apt-get install -y clamav
COPY server.js /app/server.js
CMD ["node","/app/server.js"]