#Grab the latest alpine image
FROM node:7.7-alpine

#Maintainer.
MAINTAINER RT Bathula <battu.network@gmail.com>

# create app directory in container
RUN mkdir -p /usr/src/app

# set app directory as default working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose is NOT supported by Heroku
EXPOSE 8080	

#Run the app
CMD ["npm", "start"]


