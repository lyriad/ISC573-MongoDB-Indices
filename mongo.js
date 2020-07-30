const mongoose = require('mongoose');

module.exports = function () {
    mongoose
        .connect('mongodb://localhost:27017/isc417', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Se conecto a mongo'))
        .catch(err => {
            console.log('Error: \n', err);
            process.exit(1);
        });
};
