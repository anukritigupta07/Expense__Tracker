const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;