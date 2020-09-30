FROM node:10 AS builder
COPY package.json package-lock.json ./
RUN npm install 
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD false
RUN npm i && mkdir /ng-app && mv ./node_modules ./ng-app
WORKDIR /ng-app
COPY ./ ./
# building with the --prod flag doesn't produce a binary.
RUN cd src/app && $(npm bin)/ng build --output-path=dist

FROM nginx

COPY --from=builder /ng-app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
