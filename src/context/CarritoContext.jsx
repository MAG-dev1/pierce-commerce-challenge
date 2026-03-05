import { createContext, useContext, useEffect, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState(() => {
        const guardado = localStorage.getItem("carrito");
        return guardado ? JSON.parse(guardado) : [];
    });

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const agregarProducto = (producto) => {
        if (carrito.some(p => p.id === producto.id)) {
            const actualizado = carrito.map(p =>
                p.id === producto.id ? { ...p, count: p.count + 1 } : p
            );
            setCarrito(actualizado);
        } else {
            setCarrito(prev => [...prev, { ...producto, count: 1 }]);
        }


    };

    const vaciarCarrito = () => {
        setCarrito([])
        localStorage.setItem("carrito", []);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}

export const useCarrito = () => useContext(CarritoContext);
