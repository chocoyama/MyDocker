FROM centos:centos7.1.1503
MAINTAINER Takuya Yokoyama
ENV container docker
RUN yum update -y && yum clean all
RUN yum swap -y fakesystemd systemd && yum clean all
RUN yum install -y httpd && yum clean all
RUN echo "Hello Apache." > /var/www/html/index.html
RUN systemctl enable httpd
EXPOSE 80

# docker build -f ./Dockerfile -t centos:c71apache01 --no-cache=true .
# docker run -d --privileged --name web0001 -it -p 80:80 centos:c71apache01 /sbin/init
# docker exec -it web0001 /bin/bash
