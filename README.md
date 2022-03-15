# HeadlessForm

This App runs Wordpress as a headless CMS

Front end created in React.js

Form submissions submitted via lambda API gateway.

# Steps to start app

1. Execute `run.sh`
2. this will start your project (wordpress docker + react app)
6. Log into wordpress via credentals: Username: `admin` Password: `29hillstreet`  at port 8000/wp-admin
7. Navigate to `plugins` active `advanced custom fields plugin`
7. Make sure to resave your permalinks via `Settings > Permalinks` for the API endpoints to become live.
7. Create / Edit pages via the Wordpress dashboard this will create forms for the front end app with additional form fields to the master form.
8. Some examples have been included.
