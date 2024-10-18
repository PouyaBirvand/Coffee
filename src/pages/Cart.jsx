import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className='bg-body min-h-screen w-full px-10 md:px-6 pt-6'>
      <button onClick={() => navigate(-1)} className="mb-4 text-dark-cocoa">
        &larr; Back
      </button>
      <h1 className="text-2xl font-bold mb-4 text-dark-cocoa">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart?.map((item) => (
            <div key={item.id} className="bg-[#835a36] bg-opacity-50 rounded-2xl p-4 mb-4 flex items-center">
              <img src={item?.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="text-white">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
