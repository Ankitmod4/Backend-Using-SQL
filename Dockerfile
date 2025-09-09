FROM node:20-alpine

WORKDIR /app

# Copy package.json files first for better caching
COPY package*.json ./

RUN npm install

# Copy rest of the source code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev", "--host", "0.0.0.0"]
