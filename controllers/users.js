import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    console.log(user);
    users.push({...user, id: uuid()});

    console.log(`User [${user.firstName}] added to the database.`);
    res.status(201).json({
        msg: `User [ ${user.firstName} ] added to the database.`,
        user
    });
};

export const getUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    console.log(`Get [${user.id}].`);
    res.status(200).json({
        user
    });
};

export const deleteUser = (req, res) => {
    const user = req.body;
    console.log(`user with id ${req.params.id} has been deleted`);

    users = users.filter((user) => user.id !== req.params.id);
    res.status(200).json({
        msg: `User ${user.firstName} was deleted`,
    });
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);

    user.firstName = req.body.firstName;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.firstName}.age has been updated to ${req.body.age}`)
    res.status(200).json({
        msg: `username has been updated to ${req.body.firstName}.age has been updated to ${req.body.age}`,
        user
    });
};