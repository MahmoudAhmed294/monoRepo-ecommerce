# ======== Stage 1 The "Build" Image Stage ==============

# Node.js latest alpine
FROM node:lts-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package.json, yarn.lock & tsconfig.json
COPY package*.json yarn.lock tsconfig.json ./

# Install app dependencies by yarn  
RUN yarn

# Copy Files 
COPY . .

# Create .env file 'if not existed' from .example.env and Build the App
RUN cp -n .example.env .env \
    && npx prisma generate \
    && yarn build:docker 


# ======== Stage 2 The "Production" Image ==============

# Node.js latest alpine
FROM node:lts-alpine AS production

# Create app directory
WORKDIR /usr/src/app

# Copy the built app from the previous stage
COPY --from=builder  /app/dist ./dist
COPY --from=builder  /app/.env ./.env
COPY --from=builder  /app/prisma ./prisma
COPY --from=builder  /app/node_modules ./node_modules 
COPY --from=builder  /app/package.json ./package.json 

# Keep It Running For Debugging
# ENTRYPOINT ["tail", "-f", "/dev/null"]
EXPOSE 5000

# Deloy App: Migrate -> Serve
ENTRYPOINT ["yarn", "deploy:docker"]
