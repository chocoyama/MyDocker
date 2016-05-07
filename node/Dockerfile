FROM centos:7

RUN yum update -y && yum clean all
RUN yum groupinstall -y "Development Tools"

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.1.0

RUN git clone https://github.com/creationix/nvm.git ${NVM_DIR}
RUN chmod +x ${NVM_DIR}/nvm.sh && \
    source ${NVM_DIR}/nvm.sh && \
    nvm install ${NODE_VERSION} && \
    nvm alias default ${NODE_VERSION} && \
    nvm use default && \
    echo "source ${NVM_DIR}/nvm.sh" >> ~/.bashrc

ENV NODE_PATH ${NVM_DIR}/v${NODE_VERSION}/lib/node_modules
ENV PATH ${NVM_DIR}/versions/node/v${NODE_VERSION}/bin:${PATH}
