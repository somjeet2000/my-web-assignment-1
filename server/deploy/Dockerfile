FROM node:20-alpine

# We use nodemon to restart the server every time there's a change
RUN npm install -g nodemon

WORKDIR /app/server

COPY server/package.json .
COPY server/package-lock.json .

RUN npm install

COPY server/ .

EXPOSE 5000

# Use script specified in package.json
CMD [ "npm", "run", "server" ]