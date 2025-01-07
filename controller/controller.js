import user from "../models/user.js";

const main = (req, res) => {
    res.set({ "Content-Type": "text/html; charset=utf-8" });
    res.send("<h1>Welcome Express!</h1>");
}

const test = async (req, res) => {
    const users = await user.find()
    console.log(users)
    res.json(users)
}

export {test, main}
