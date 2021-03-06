FROM node:argon

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install nodemon -g
RUN npm install

# Bundle app source
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]
