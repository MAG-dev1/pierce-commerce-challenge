import { Client } from './Client.js';
import { Admin } from './Admin.js';
import { User } from './User.js';

export class UserService {
    
    userRepository;
    static #instance;
    constructor(){
        if(UserService.#instance)
            throw new Error("Ya existe el servicio");
        UserService.#instance = this;    
        this.userRepository = [];
    }

    static getInstance(){
       if (!UserService.#instance) {
            new UserService();
        }
        return UserService.#instance;
    }

    createClient(username, password) {

        if (this.validateUser(username)) {
             throw new Error("Ya existe el usuario");
        }
        let user = new Client(username, password);
        this.userRepository.push(user);
    }

    createAdmin(username, password){
         if (this.validateUser(username, password)) {
             throw new Error("Ya existe el usuario");
        }
        let user = new Admin(username, password)
        this.userRepository.push(user);
    }

    autenticar(username, password){
        
        let user = this.userRepository.find(u => u.username === username);
        for (let index = 0; index < this.userRepository.length; index++) {
            const element = this.userRepository[index];
        }
        if(!user){
            throw new Error("No existe el usuario");
        } 
        if (user.password != password) {
            throw new Error("La contraseña es incorrecta");
        }
        return user;
    }

    find(username){
        return this.userRepository.find(u => u.username === username);
    }

    validateUser(username, password){
        if(username === "")throw new Error("Nombre vacio");
        if(password === "")throw new Error("Password vacia");
        return this.userRepository.some(u => u.username === username);
    }
}