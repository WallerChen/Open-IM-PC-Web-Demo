FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21.1

COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80