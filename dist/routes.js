"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meuUser = void 0;
var createUser_services_1 = __importDefault(require("./services/createUser.services"));
function meuUser(request, response) {
    //instancia do createUser
    var user = createUser_services_1.default({
        email: 'leandrofaustino@gmail.com',
        password: '123456',
        techs: [
            'Nodejs',
            'Reactjs',
            { title: 'chico', experience: 98 },
        ]
    });
    return response.json(user);
}
exports.meuUser = meuUser;
