function Cart({ items }) {
  return (
    <div>
      <h2>Carrito</h2>
      {items.map((item, i) => (
        <p key={i}>{item.title}</p>
      ))}
    </div>
  );
}

export default Cart;
