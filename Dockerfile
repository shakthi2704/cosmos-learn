FROM node:24-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN apk add --no-cache git libc6-compat

WORKDIR /app

COPY .npmrc* ./
COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
