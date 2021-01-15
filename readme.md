# Quote Keeper 

should allow users to enter the following information about each quote they would like to save to the app:

- The quote itself
- Who the quote is attributed to
- The source of the quote:
    - Book
    - Article
    - Speech
    - IRL

For permission errors use `chmod a+x bin/wdio-test`

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