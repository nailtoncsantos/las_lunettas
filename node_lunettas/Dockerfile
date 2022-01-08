FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","start" ]

#sudo docker build -t lunetas  .

#sudo docker run -p 8080:8080 -d lunetas:latest
