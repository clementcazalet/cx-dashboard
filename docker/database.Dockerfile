FROM postgres:14

COPY init_database.sh /docker-entrypoint-initdb.d/

RUN sed -i 's/\x0D$//' /docker-entrypoint-initdb.d/*.sh
RUN chmod +x /docker-entrypoint-initdb.d/*.sh