import { Product } from './Product';

export class ProductService {

    static instance;
    constructor() {
        if (ProductService.instance) {
            return ProductService.instance;
        }
        ProductService.instance = this;
    }

    post(product) {


        fetch('https://69a9b3b132e2d46caf471891.mockapi.io/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.error(err);
            });
    }
    delete(id) {
        fetch(`hhttps://69a9b3b132e2d46caf471891.mockapi.io/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.json();
            });
    }

    put(id, product) {

        fetch(`https://69a9b3b132e2d46caf471891.mockapi.io/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: product
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.error(err);
            });
    }

}