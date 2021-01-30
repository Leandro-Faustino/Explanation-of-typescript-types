
 //tipagem do meu array dentro createUSerdate
interface TechObject {
    title : string;
    experience : number;
  }
  
  //tipagem da função 
  interface CreateUserDate {
    name?: string;
    email : string;
    password : string;
    techs : Array<string | TechObject> 
    //techs : string[];   caso fosse um array primitivo seria assim :tech: string[]
  }
  
  //função de criação de usuario recebendo tipagem da interface
  export default function createUser ( { name, email, password ,techs } : CreateUserDate) {
   const user = {
    name,
    email,
    password,
    techs
  }
  
  return user
}