var ghpages = require('gh-pages');

ghpages.publish('src', (err) => {
    console.log(err);
});