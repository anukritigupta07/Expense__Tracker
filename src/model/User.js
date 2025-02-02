const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema({
    firstname: {
        required: [true, "First Name is required"],
        type: String,

    },
    lastname: {
        required: [true, "Last Name is required"],

        type: String,
    }
    ,
    email: {
        required: [true, "Email is required"],
        type: String,
        unique: true,
    },
    password: {
        required: [true, "Password is required"],
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,


    }
);
//Hash password

userSchema.pre("save", async function (next) {
if(!this.isModified()) {
next();
}
 const salt = await bcrypt.genSalt(10);
 this.password = await bcrypt.hash(this.password, salt);
 next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;