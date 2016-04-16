FROM centos:7

RUN yum update -y && yum clean all
RUN yum groupinstall -y "Development Tools"

ENV NODE_VERSION v5.5.0
RUN git clone https://github.com/creationix/nvm.git ~/.nvm
RUN source ~/.nvm/nvm.sh && nvm install ${NODE_VERSION} && nvm alias default ${NODE_VERSION}
RUN echo ". ~/.nvm/nvm.sh" >> ~/.bashrc
