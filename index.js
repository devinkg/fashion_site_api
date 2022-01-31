const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://DeeKay:<password>@cluster0.7hrlb.mongodb.net/shop?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB connection Successful!"))
    .catch((err) => {
        console.log(err)
    });

app.listen(5000, () => {
    console.log(`Backend server is running!`);
})