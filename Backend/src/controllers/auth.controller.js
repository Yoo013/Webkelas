const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        // Validate the request body using Joi schema
        const { error } = validateSchema(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        // Find the user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({ message: "Invalid Email or Password" });
        }

        // Compare the provided password with the hashed password in the database
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: "Invalid Email or Password!" });
        }

        // Generate authentication token if email and password are valid
        const token = user.generateAuthToken();
        return res.status(200).send({ data: token, message: "Logged in Successfully" });

    } catch (err) {
        // Log the error for debugging and send a generic error message to the client
        console.error(err);  // Add logging mechanism
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

// Validate function to validate request body using Joi
const validateSchema = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
}

module.exports = router;
