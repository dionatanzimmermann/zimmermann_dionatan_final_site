# Start your image with a node base image
FROM node:20-alpine AS builder

# The /zimmermann_dionatan_final_site directory should act as the main application directory
WORKDIR /zimmermann_dionatan_final_site

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY . .

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules \
    && npm install react-router-dom

# Start the stage 2 with another node base image
FROM node:20-alpine

# The /zimmermann_dionatan_ui_garden_build_checks directory should act as the main application directory
WORKDIR /zimmermann_dionatan_final_site

# Copy build output to working dir
COPY --from=builder /zimmermann_dionatan_final_site/build ./build

# Install serve, build the app
RUN npm install -g serve

# Expose port
EXPOSE 5575

# Start the app using serve command
CMD [ "serve", "-s", "build", "-l", "5575"]