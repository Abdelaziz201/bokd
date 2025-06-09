import mongoose from "mongoose";
import User from "../models/User.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { sendResetEmail } from "../utils/mailer.js";


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.log("Error in fetching users", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const createUser = async (req, res) => {
    try {
        const user = req.body;
        if (!user.username || !user.email || !user.password) {
            return res.status(400).json({ success: false, message: "Please fill all the fields" });
        }

        const newUser = new User(user);

        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.log("Error in creating user", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}



export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET || "your-secret-key",
            { expiresIn: "1d" }
        );

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone, 
                 firstName: user.firstName, 
                lastName: user.lastName,   
                role: user.role
            },
            token
        });
    } catch (error) {
        console.error("Error logging in:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;  

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid User ID"});
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json({ success: true, data: updatedUser });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid User ID"});
    }
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User deleted successfully" });
    }
    catch (error) {
        console.log("Error in deleting user", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


// FORGOT PASSWORD
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const resetLink = `${process.env.BASE_URL}/reset-password/${token}`;

    await sendResetEmail(email, resetLink);

    res.json({ success: true, message: 'Reset email sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
};

// RESET PASSWORD
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.password = newPassword;
    await user.save();

    res.json({ success: true, message: 'Password updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, message: 'Invalid or expired token' });
  }
};


export const changePassword = async (req, res) => {
    const { userId, currentPassword, newPassword } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ success: false, message: "Invalid User ID" });
    }

    try {
        const user = await User.findById(userId).select('+password');
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Current password is incorrect" });

        user.password = newPassword;
        await user.save();
        
        res.status(200).json({ success: true, message: "Password changed successfully" });
    } catch (error) {
        console.log("Error changing password:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};