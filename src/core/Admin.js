import { User } from './User.js';
export class Admin extends User{

    admin;
    constructor(username, password){
        super(username, password);
        this.admin = true;
    }

      isadmin(){
        return true;
    }
}