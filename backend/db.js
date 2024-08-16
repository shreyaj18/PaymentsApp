const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shreyajkanade007:Bijapur%40586101@cluster0.1qy9ml6.mongodb.net/paytm");

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