# Etapa de construcción (builder)
FROM node:18-alpine3.15 AS builder

# Instala PNPM de forma global
RUN npm i -g pnpm

# Asegúrate de tener las dependencias necesarias, incluyendo libc6-compat si es necesario
RUN apk add --no-cache libc6-compat

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de dependencias (package.json y pnpm-lock.yaml)
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias utilizando PNPM
RUN pnpm install --no-frozen-lockfile

# Copia el código fuente de la aplicación
COPY . .

# Etapa de producción
FROM node:18-alpine3.15 AS production

# Instala PNPM de forma global en la imagen de producción
RUN npm i -g pnpm

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de configuración de dependencias (package.json y pnpm-lock.yaml)
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias utilizando PNPM
RUN pnpm install --no-frozen-lockfile

# Copia los archivos de la aplicación desde la etapa de construcción (builder)
COPY --from=builder /app ./app

# Expone el puerto en el que se ejecutará tu aplicación (ajusta esto según tus necesidades)
EXPOSE 3000

# Comando para ejecutar la aplicación en modo producción (ajusta esto según tu script de inicio)
CMD ["node", "app/app.js"]
