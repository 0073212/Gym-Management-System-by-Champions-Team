const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const { name, age, gender, email, password, role } = req.body;

  try {
    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name,
      age,
      gender,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    // Respond with success and redirect path
    return res.status(201).json({
      message: "Registration successful",
      redirect: "/home.html",
    });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ message: "Error in registration" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Find user by email and role
    const user = await User.findOne({ email, role });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    // Respond with success, token, and redirect path
    return res.status(200).json({
      message: "Login successful",
      token,
      redirect: "/home.html",
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Login failed" });
  }
};


