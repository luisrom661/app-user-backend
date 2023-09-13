# Install dependencies only when needed  
FROM node:18-alpine3.15

# Instala PNPM de forma global
# RUN npm install -g pnpm

# Establece el directorio de trabajo en /app
WORKDIR /app

RUN npm install

# Copia los archivos de configuración de dependencias (package.json y pnpm-lock.yaml)
# COPY package.json pnpm-lock.yaml ./
COPY package*.json ./

# New line added
COPY prisma ./prisma/

# New line added
RUN npx prisma generate

# Copia todo el contenido de tu aplicación al directorio de trabajo en el contenedor
COPY . .

# Expone el puerto en el que se ejecutará tu aplicación (ajusta esto según tus necesidades)
EXPOSE 3000

# Comando para ejecutar la aplicación en modo producción (ajusta esto según tu script de inicio)
CMD ["node", "app.js"]
