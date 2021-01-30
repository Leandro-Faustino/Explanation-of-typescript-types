import { Request, Response } from 'express';
import createUser from './services/createUser.services';



export function meuUser (request : Request , response : Response) {

//instancia do createUser
const user = createUser({
  email: 'leandrofaustino@gmail.com',
  password : '123456',
  techs: [
     'Nodejs',
     'Reactjs',
     {title: 'chico', experience: 98},
             
]
});

return response.json(user);
}