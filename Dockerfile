

FROM node:12 AS front-end-build
WORKDIR /react-app
COPY client/ .
# RUN INLINE_RUNTIME_CHUNK=false

ENV REACT_APP_BASE_URL=https://storymaker-app.herokuapp.com/api

RUN npm install
RUN npm run build

FROM node:12
WORKDIR /public
COPY . .
COPY --from=front-end-build /react-app/build/ ./client/build/
RUN ["chmod", "+x", "./bin/www"]
RUN npm install
RUN npm install -g sequelize-cli
EXPOSE 5000
CMD ["npm", "start"]