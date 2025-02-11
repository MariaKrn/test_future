# Use an official Node.js image as the base
FROM node:20.17.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the built app
FROM nginx:stable-alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port on which the app runs
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
