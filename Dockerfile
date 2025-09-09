# Use the official Node.js 20 Alpine image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files first to leverage Docker's cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port on which the Vite development server will run
EXPOSE 5173

# Command to run the Vite dev server, explicitly telling it to run on all network interfaces
# This is the most likely fix for the ERR_EMPTY_RESPONSE error
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
