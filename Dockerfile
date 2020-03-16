FROM node:12.14.1 as build-stage
WORKDIR /workspace
COPY . .
RUN npm install
RUN npm install node-sass
RUN npm run build

FROM node:12.14.1-alpine
WORKDIR /service
COPY --from=build-stage /workspace .
EXPOSE 3000
CMD [ "npm", "start" ]