FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Открываем порт
EXPOSE 3005

# Запускаем сервер
CMD ["npm", "start"]
