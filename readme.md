# Quote Keeper Feature Level

should allow users to enter the following information about each quote they would like to save to the app:

- The quote itself
- Who the quote is attributed to
- The source of the quote:
    - Book
    - Article
    - Speech
    - IRL

For permission errors use `chmod a+x bin/wdio-test`

## Server Level Tests

write server tests for the application that allows users to save and display a collection of their favorite quotes.

The scope of our test is that a user should be able to submit a quote and have it displayed back to the user upon submission. 

## Model Layer Tests

test to drive the development of the Quote model with the red, green, refactor cycle, 
set up a database and define a model using MongoDB, Node’s Mongoose package, and the Chai assertion module.

## SETUP

```bash
> npm install
> npm start
> npm test
```

### [setup phantom.js](https://stackoverflow.com/questions/36993962/installing-phantomjs-on-mac)

- Download phantomjs latest version (ex: phantomjs-2.1.1-macosx.zip) from http://phantomjs.org/download.html
- Extract it to some path(ex: `~/Desktop/phantomjs-2.1.1-macosx`)
- Run this command on terminal - `sudo ln -n ~/Desktop/phantomjs-2.1.1-macosx/bin/phantomjs /usr/local/bin/`
- Launch phantomjs from the terminal by command: phantomjs
- Check phantomjs version by command: phantomjs -v
- Check the phantomjs path by command: which phantomjs