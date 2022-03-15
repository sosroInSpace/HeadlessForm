# HeadlessForm

This App runs Wordpress as a headless CMS

Front end created in React.js

Form submissions submitted via lambda API gateway.

# Steps to start app

**Start Wordpress via Docker**

1. Navigate to the folder `wordpress-backend`
2. Run `docker-compose up`
3. Wordpress should start running now on port 8000
4. Login via port 8000/wp-admin: Username: `admin` Password: `12hillstreet`
5. Upload the ACF plugin from `wordpress-backend/plugins/advanced.zip` via the Wordpress plugin uploader.
6. Upload the Blankslate theme from `wordpress-backend/themes/blankslate.zip` via the Wordpress theme uploader and activate.
7. Create / Edit pages via the Wordpress dashboard  to create forms for the front end app + add additional form fields to the master form.
8. Some examples have been included.

**Start React front end**

1. Navigate to the folder `wordpress-frontend`
2. run `npm install` and `npm start` this will start the react app.
3. Forms are being submitted to an AWS lambda function via API gateway.
