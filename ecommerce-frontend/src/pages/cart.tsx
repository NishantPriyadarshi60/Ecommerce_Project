const CartItem = [];
const subtotal = 4000;
const tax =   subtotal * 0.18;

const Cart = () => {
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal:₹{subtotal}</p>
      </aside>
    </div>
  )
}

export default Cart