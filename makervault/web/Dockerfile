FROM node:20-alpine
WORKDIR /app

RUN apk add --no-cache su-exec

# Install deps first for better layer caching
COPY package*.json ./
RUN npm ci --no-audit --no-fund

COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Copy source
COPY . .

EXPOSE 5173
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "run", "dev", "--", "--host"]
