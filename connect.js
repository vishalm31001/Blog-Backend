const mongoose = require('mongoose')
async function db(){
    try {
        await mongoose.connect(process.env.DATABASE_URL).then(() => {
          console.log("database connected");
        });
    }
    catch (e) {
        console.log(e);
    }
}
module.exports = db