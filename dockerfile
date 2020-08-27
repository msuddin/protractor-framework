FROM node
FROM jenkins

USER root
COPY --from=0 /usr/local  /usr/local

RUN npm --version
RUN npm install -g protractor
RUN protractor --version

ENV JAVA_OPTS="-Djenkins.install.runSetupWizard=false"

USER jenkins

ADD . .

USER root
RUN webdriver-manager update