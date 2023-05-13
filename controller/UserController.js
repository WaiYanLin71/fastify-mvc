import User from "../models/User.js";

export const index = async (req, res, done) => {
    try {
        const limit = 10;
        const total = await User.count();
        const totalPage = Math.ceil(total / limit);
        const page =  parseInt(req.query.page) ? parseInt(req.query.page) : 1;
        const skip = (page - 1) * limit
        const users = await User.find().select('-password').skip(skip).limit(limit);
        const links = {
            previous: page < totalPage || page > totalPage ?  false  : `/v1/users?page=${page - 1}`,
            next: totalPage > page ? `/v1/users?page=${page + 1}` : false,
        }
        await res.view('/user/index', { users, links });
    } catch (error) {
        console.log(error.message)
    }
}

export const store = async (req, res, done) => {
    try {
        const user = new User(req.body)
        await user.save();
        const { password, ...others } = user._doc
        res.send({ user: others })
    } catch (error) {
        if (error.code === 11000) {
            res.status(422).send({
                messages: [{
                    email: `The email ${req.body.email} is already registered`
                }],
                code: 'MONGOOSE_KEY'
            })
        }
    }
}

export const create = (req, res) => {
    res.view('/user/create');
}

export const show = (req, res) => {
    const user = User.findById(req.params.id);
}


export const edit = (req, res) => {
    res.send('hello');
}


export const update = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body).select('-password');
    } catch (error) {

    }
}


export const destroy = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: 'The user is deleted' })
    } catch (error) {

    }
}