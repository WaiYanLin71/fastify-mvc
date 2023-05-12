import User from "../models/User.js";

export const index = async (req, res) => {
    try {
        const user = await User.find();
        return res.sendFile('/user/index.ejs');
    } catch (error) {
        console.log(error.message)
    }
}

export const store = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save();
        res.json({ redirect: '', user })
    } catch (error) {

    }
}

export const create = (req, res) => {
    return res.sendFile('/user/create.ejs');
}

export const show = (req, res) => {
    const user = User.findById(req.params.id);
}


export const edit = (req, res) => {
    res.send('hello');
}


export const update = (req, res) => {
    res.send('hello');
}


export const destroy = (req, res) => {
    res.send('hello');
}