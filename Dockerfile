FROM node:lts-alpine

RUN mkdir -p /opt/fua
WORKDIR /opt/fua

ENV NODE_ENV="production"
RUN npm install @fua/template.app

ENV PATH="$PATH:/opt/fua/node_modules/.bin"
EXPOSE 3000

HEALTHCHECK CMD fua.app.template.healthcheck
ENTRYPOINT fua.app.template