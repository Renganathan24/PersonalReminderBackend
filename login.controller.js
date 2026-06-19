const User = require('./login.model')

exports.login = async (req, res) => {
    const { email, password, role: admin } = req.body;


    try {
        const newUser = new User({
            email,
            password
        })
        await newUser.save()
    } catch (error) {

    }
    const menu = [
        { id: 1, name: "Dashboard" },
        { id: 2, name: "Profile" },
        { id: 3, name: "Settings" }
    ];

    return res.status(200).json({
        message: "Login Succesful",
        user: {
            email
        },
        menu
    })
}

