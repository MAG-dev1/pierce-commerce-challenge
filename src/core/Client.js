import { User } from './User.js';
export class Client extends User{

    constructor(username, password){
        super(username, password);
    }

    isadmin(){
        return false;
    }
}