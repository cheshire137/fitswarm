# Fitswarm

## How to Develop

You will need Ruby, Rubygems, PostgreSQL, and npm installed.

```bash
bundle install
npm install
bin/rake db:setup
bundle exec rails s
```

Visit [localhost:3000](http://localhost:3000).

To add a new JavaScript package: `npm install WHATEVER_PACKAGE --save`

## How to Test

```bash
npm test # to run the JavaScript style checker and JavaScript tests
bundle exec rspec # to run Rails tests
```
