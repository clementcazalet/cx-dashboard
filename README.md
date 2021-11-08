# Compile
run `mvn clean install`

# Start
Go to docker/target/cx-compose and run `docker-compose up -d`

# Connect
## App
Access to http://localhost

## Database
`postgres://localhost:5432/cx_dashboard` \
user : `postgres` \
password : `itesoft`

# Add vote
URL : http://localhost/back/create \
Method : POST \
Headers : application/json \
Body :
```
{
    "tenant": "ACME",
    "star": 4,
    "comment": "my comment",
    "user": "benoit",
    "date": "2021-11-10T00:00:00Z"
}
```