# HeadlessForm

This App runs Wordpress as a headless CMS via docker.

Front end created in React.js

Form submissions submitted via lambda API gateway.

# Steps to start app

1. Navigate to the folder `wordpress-backend`
2. Run `docker-compose up`
3. Wordpress should start running now
4. Once set up please import the sql file.
5. Username: `admin` Password: `12hillstreet`
6. Navigate to the folder `wordpress-frontend`
7. run `npm install` and `npm start` this will start the react app.
8. Create pages to create routes + add additional form fields to the master form.
9. Forms are being submitted to an AWS lambda function via API gateway.
