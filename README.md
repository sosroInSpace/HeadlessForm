# HeadlessForm

This App runs Wordpress as a headless CMS

Front end created in React.js

Form submissions submitted via AWS Lambda API gateway.

# Assumptions

1. You have docker installed (https://docs.docker.com/get-docker/)
2. You have mysql installed (https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

# Steps to start app

1. Execute `run.sh`
2. this will start your project (wordpress docker + react app)
6. Log into wordpress via credentals: Username: `admin` Password: `29hillstreet`
7. Make sure to resave your permalinks via `Settings > Permalinks` for the API endpoints to become live.
7. Create / Edit pages via the Wordpress dashboard this will create forms for the front end app with additional form fields to the master form.
8. Some examples have been included.

# Note

If the above Wordpress logins do not work the sql dump script may have failed - in this case run exit the app and execute `run.sh` a second time.
