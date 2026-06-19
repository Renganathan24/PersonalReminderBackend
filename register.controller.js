const UserRegister = require('./register.model');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newRegister = new UserRegister({
            name,
            email,
            password
        });

        await newRegister.save();
        console.log("vv");
        

        return res.status(201).json({
            message: "Registration Successful",
            user: newRegister
        });

    } catch (error) {
        return res.status(500).json({
            message: "Registration failed",
            error: error.message
        });
    }
};