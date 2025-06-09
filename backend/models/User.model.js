import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // username must be unique
    },
    email: {
        type: String,
        required: true,
        unique: true, // email must be unique
        
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user', // if not given, use 'user'
    },
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event', // reference to the Event model
        },
    ],
},{
    timestamps: true, // adds createdAt and updatedAt fields
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const user = mongoose.model("User", userSchema);
export default user;

