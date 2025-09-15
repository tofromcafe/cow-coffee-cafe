# Use Node.js 18 as our base image
# This gives us Node.js, npm, and a Linux environment to run our app
FROM node:18-alpine

# Set the working directory inside the container
# This is like doing 'cd /app' inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
# We do this separately to take advantage of Docker's layer caching
# If dependencies don't change, Docker can reuse this layer
COPY package*.json ./

# Install ALL dependencies (including dev dependencies needed for building)
# We need Vite and other build tools to create the production build
RUN npm ci

# Copy the rest of our application code
# We do this after installing dependencies so changes to our code
# don't force Docker to reinstall dependencies
COPY . .

# Build the React application for production
# This creates optimized, minified files in the 'dist' directory
RUN npm run build

# Expose port 4173 (Vite's preview port)
# This tells Docker that our app will listen on this port
EXPOSE 4173

# Define the command to run when the container starts
# This starts Vite's preview server which serves our built app
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]