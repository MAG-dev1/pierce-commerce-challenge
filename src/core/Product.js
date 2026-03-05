export class Product {

    #seller;
    #price;
    #title;
    #image;
    #description;

    constructor(seller, price, titulo, image, description) {

        this.validate(seller, price, titulo, image, description); //validar IREP

        this.#seller = seller;
        this.#price = price;
        this.#title = titulo;
        this.#image = image;
        this.#description = description;
    }

    validate(seller, price, titulo, image, description) {

        if (!seller) {
            throw new Error('El vendedor es obligatorio');
        }

        this.validatePrice(price);

        if (!titulo || titulo.trim() === '') {
            throw new Error('El título es obligatorio');
        }

        if (!image || image.trim() === '') {
            throw new Error('La imagen es obligatoria');
        }

        if (!description || description.trim() === '') {
            throw new Error('La descripción es obligatoria');
        }
    }

    validatePrice(price) {
        
        let priceType = parseFloat(price);

        if (isNaN(priceType)) {
            throw new Error('El precio debe ser un número válido');
        }
        if (!isFinite(priceType)) {
            throw new Error('El precio debe ser un número finito');
        }
        if (priceType <= 0) {
            throw new Error('El precio debe ser un número mayor a 0');
        }
    }

    title() {
        return this.#title;
    }


}