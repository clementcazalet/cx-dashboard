FROM nginx:1.21.3

RUN rm /etc/nginx/conf.d/default.conf

COPY dist/frontend/ /usr/share/nginx/html/
COPY frontend.conf /etc/nginx/conf.d/frontend.conf