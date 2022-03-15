# HeadlessForm

This App runs Wordpress as a headless CMS

Front end created in React.js

Form submissions submitted via lambda API gateway.

# Steps to start app

**Start Wordpress via Docker**

1. Navigate to the folder `wordpress-backend`
2. Run `docker-compose up`
3. Wordpress should start running now on port 8000
4. Create your site.
5. Replace the current wordpress database with the sql file `theme-sql.sql` this can be done via command line or phpmyadmin(port:8080)
6. Log back into Wordpress with the following credentals: Username: `admin` Password: `29hillstreet`
7. Create / Edit pages via the Wordpress dashboard  to create forms for the front end app + add additional form fields to the master form.
8. Some examples have been included.

**Start React front end**

1. Navigate to the folder `wordpress-frontend`
2. run `npm install` and `npm start` this will start the react app.
3. Forms are being submitted to an AWS lambda function via API gateway.
