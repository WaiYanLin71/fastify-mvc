import User from "../models/User.js";

export const index = async (req, res) => {
    try {
        const users = await User.find();
        return res.view('/user/index', { users });
    } catch (error) {
        console.log(error.message)
    }
}

export const store = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save();
        return res.send({ user: req.body })
    } catch (error) {
        // console.log(error.message)
    }
}

export const create = (req, res) => {
    return res.view('/user/create');
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