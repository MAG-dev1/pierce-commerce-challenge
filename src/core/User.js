export class User {
    username;
    password;

    constructor(username, password){
        if(username === "")throw new Error("Nombre vacio");
        if(password === "")throw new Error("Password vacia");
        this.username = username;
        this.password = password;
    }

    isadmin() {
        throw new Error('debe ser un admin o cliente');
    }
}