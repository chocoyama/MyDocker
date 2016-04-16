FROM centos:centos7.1.1503
MAINTAINER Takuya Yokoyama
ENV container docker
RUN yum update -y && yum clean all
RUN yum swap -y fakesystemd systemd && yum clean all
RUN yum install -y epel-release && yum clean all
RUN yum install -y nginx && yum clean all
ADD nginx.conf /etc/nginx
RUN echo "Hello Nginx." > /usr/share/nginx/html/index.html
RUN systemctl enable nginx
EXPOSE 80

# docker build -f ./Dockerfile -t centos:c71nginx01 --no-cache=true .
# docker run -d --privileged --name web0002 -h web0002 centos:c71nginx01 /sbin/init
# docker exec -it web0002 /bin/bash
