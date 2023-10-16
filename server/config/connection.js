const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://aydenthos:t1gxIyz6e11tqwj9@mern-book-repo.7zgxq3d.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
