const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

mongoose.connect(process.env.URI);

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String
    

})

const accountSchema =mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})
const User = mongoose.model("User", userSchema);
const Account= mongoose.model("Account", accountSchema);

module.exports={
    User,
    Account
}