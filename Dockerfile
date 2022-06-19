# Trae la imagen de node
FROM node:latest

# crea un directorio de trabajo
WORKDIR usr/src/app

# copia el archivo package.json
COPY package.json ./

# instala dependencias
RUN npm install

# copia todo al directorio de trabajo
COPY . .

# ejecuta
CMD ["npm", "start"]