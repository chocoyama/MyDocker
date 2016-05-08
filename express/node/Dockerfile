# docker build -t node ../../node/
# docker build -t node_express .
FROM node

ENV APP_DIR /var/www
ENV APP_NAME app

WORKDIR ${APP_DIR}
ADD ./${APP_NAME} ${APP_DIR}/${APP_NAME}
VOLUME ./${APP_NAME}:${APP_DIR}/${APP_NAME}
RUN npm install -g forever && \
    npm install -g nodemon && \
    cd ${APP_NAME} && \
    npm install

EXPOSE 8080

CMD node ${APP_DIR}/${APP_NAME}/app.js
#CMD forever start -c nodemon ${APP_DIR}/${APP_NAME}/app.js && tail -f /dev/null
