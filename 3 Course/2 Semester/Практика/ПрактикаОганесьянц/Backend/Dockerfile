# Dummy Dockerfile. Replace it with yours
FROM node:15.11.0-buster

COPY . /opt/app

WORKDIR /opt/app

RUN npm install --legacy-peer-deps && npm run build

EXPOSE 3000

CMD [ "npm", "run", "start"]