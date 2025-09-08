FROM node:21

WORKDIR  /app


COPY  .    .


RUN  npm install .

CMD ["node", "Index.js"]