# Install dependencies only when needed
FROM node:18-alpine3.15 AS deps

RUN npm i -g pnpm

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile


# Production image, copy all the files and run next
FROM node:18-alpine3.15 AS runner
RUN npm i -g pnpm
# Set working directory
WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --no-frozen-lockfile

# Copia los archivos de la aplicación desde la etapa de construcción (builder)
COPY --from=builder /app ./app

# Expone el puerto en el que se ejecutará tu aplicación (ajusta esto según tus necesidades)
EXPOSE 3000

# Comando para ejecutar la aplicación en modo producción (ajusta esto según tu script de inicio)
CMD ["node", "app/app.js"]