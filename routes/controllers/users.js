
import { v4 as uuidv4 } from 'uuid';
let users = []

export const getUsers = (req,res) => {

res.send(users)

}

export const createUsers = (req,res) => {
   const user = req.body;



   users.push({id:uuidv4(),...user});
   res.send(users);
};

export const getUser = (req,res) => {
    const {id} = req.params;

    const findUser= users.find(user => user.id === id);

res.send(findUser);
};
export const deleteUser = (req,res) => {
     
    const {id} = req.params;
    users = users.filter(user => user.id !== id);
    res.send(users);

};
export const updateUser = (req,res) =>{
    const id = req.params.id;
    const user = users.find(user => user.id === id);

let {name, lastName,age} = req.body;
if(name){
    user.name = name
}
if(lastName){
    user.lastName = lastName
}
if(age){
    user.age = age
}
res.send(`user with the ${id} has been removed`);

};