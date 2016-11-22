FROM nginx:alpine
ADD _site /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf
