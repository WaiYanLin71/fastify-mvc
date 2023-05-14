import mongoose from "mongoose";
import User from "../models/User.js";

export const index = async (req, res, done) => {
    try {
        const searchQuery = {}
        if (req.query.search) {
            searchQuery['$or'] = [
                { email: { $regex: req.query.search, $options: 'i' } },
                { name: { $regex: req.query.search, $options: 'i' } },
            ]
        }
        const limit = 10;
        const total = await User.find(searchQuery).count();
        const totalPage = Math.ceil(total / limit);

        const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
        const queryString = Object.entries(req.query)
            .filter(([key, value]) => key !== 'page')
            .map(([key, value]) => {
                return `${key}=${value}`
            }).join('&')

        const skip = (page - 1) * limit
        const users = await User.find(searchQuery)
            .select('-password')
            .skip(skip)
            .limit(limit)
            .sort({ _id: req.query.sort ? req.query.sort : -1 });
            
        const links = {
            previous: page === 1 || page > totalPage ? false : `/v1/users?page=${page - 1}&${queryString}`,
            next: totalPage > page ? `/v1/users?page=${page + 1}&${queryString}` : false,
        }
        
        await res.view('/user/index', { users, links });
    } catch (error) {
        throw Error(error)
    }
}

export const store = async (req, res) => {
    try {
        const total = await User.count();
        const pages = Math.ceil(total / 10);
        const user = new User(req.body)
        await user.save();
        const { password, ...others } = user._doc
        await res.status(200).send({ user: others, pages })
    } catch (error) {
        if (error.code === 11000) {
            await res.status(422).send({
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