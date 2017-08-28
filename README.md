# Fitswarm

Correlate Fitbit activity with Swarm gym visits. Uses Fitbit and Foursquare APIs.

## How to Develop

You will need Ruby, Rubygems, PostgreSQL, and npm installed.

```bash
bundle install
npm install
bin/rake db:setup
cp dotenv.sample .env
```

Create a [Fitbit app](https://dev.fitbit.com/apps) with
`http://localhost:3000/users/auth/fitbit/callback` as a callback
URL. Create a [Foursquare app](https://foursquare.com/developers/apps)
with `http://localhost:3000/users/auth/foursquare/callback` as a
redirect URI.
Modify .env with your values.

```bash
bundle exec rails s
```

Visit [localhost:3000](http://localhost:3000).

To add a new JavaScript package: `npm install WHATEVER_PACKAGE --save`

## How to Test

```bash
npm test # to run the JavaScript style checker and JavaScript tests
bundle exec rspec # to run Rails tests
```
