# base image 
FROM node:14.15.5

# set working dir
WORKDIR /app
# COPY package*.json ./
# install app dependencies
COPY . /app

#RUN npm install -g npm@lastest
RUN npm update & npm cache clean --force
RUN npm install --silent
RUN npm run build 

CMD  npm start