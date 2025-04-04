import jwt from 'jsonwebtoken';
import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";


export const registerUser = async (req, res) => {
    const { fullName, email, password, phone } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ fullName, email, password: hashPassword, phone });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign(
            { userId: user._id, fullName: user.fullName, email: user.email, phone: user.phone, role: user.role }, // Corrected role reference
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



export const getProfile=async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
}


export const updateProfile = async (req, res) => {
    const { userId } = req.params;
    const { fullName, email, role, password, phone } = req.body;
    
    try {
        // Create update object with provided fields
        const updateData = { fullName, email, phone, role };
        
        // Only update password if it's provided
        if (password) {
            const hashPassword = await bcrypt.hash(password, 10);
            updateData.password = hashPassword;
        }

        // console.log(id);

        const user = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true } // Return the updated document
        );

        const token = jwt.sign(
            { userId: user._id, fullName: user.fullName, email: user.email, phone: user.phone, role: user.role }, // Corrected role reference
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

