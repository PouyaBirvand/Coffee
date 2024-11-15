import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../services/cartService';

export function useCart(cartId) {
    const queryClient = useQueryClient();

    const { data: cart, isLoading } = useQuery({
        queryKey: ['cart', cartId],
        queryFn: async () => {
            if (!cartId) return { items: [] };
            const response = await cartService.viewCart(cartId);
            console.log('Cart Response:', response.data); // Add this log
            return response.data.cart; // Make sure we return the correct data structure
        },
        enabled: Boolean(cartId)
    });

    const addItemMutation = useMutation({
        mutationFn: (product) => cartService.addItem(cartId, product),
        onSuccess: () => queryClient.invalidateQueries(['cart', cartId])
    });

    const updateQuantityMutation = useMutation({
        mutationFn: ({ itemId, change }) => 
            cartService.updateQuantity(cartId, itemId, change),
        onSuccess: () => {
            queryClient.invalidateQueries(['cart', cartId]);
        },
        onError: (error) => {
            console.error('Failed to update quantity:', error);
        }
    });

    const removeItemMutation = useMutation({
        mutationFn: (itemId) => cartService.removeItem(cartId, itemId),
        onSuccess: () => {
            queryClient.invalidateQueries(['cart', cartId]);
        }
    });

    
    return {
        cart,
        isLoading,
        addItem: addItemMutation.mutate,
        updateQuantity: updateQuantityMutation.mutate,
        removeItem: removeItemMutation.mutate
    };
}













// GET|HEAD   / ...............................................................
// POST       _ignition/execute-solution ignition.executeSolution › Spatie\Lar…
// GET|HEAD   _ignition/health-check ignition.healthCheck › Spatie\LaravelIgni…
// POST       _ignition/update-config ignition.updateConfig › Spatie\LaravelIg…
// GET|HEAD   adminCafe filament.adminCafe.pages.dashboard › Filament\Pages › …
// GET|HEAD   adminCafe/categories filament.adminCafe.resources.categories.ind…
// GET|HEAD   adminCafe/categories/create filament.adminCafe.resources.categor…
// GET|HEAD   adminCafe/categories/{record}/edit filament.adminCafe.resources.…
// GET|HEAD   adminCafe/login filament.adminCafe.auth.login › Filament\Pages  …
// POST       adminCafe/logout filament.adminCafe.auth.logout › Filament\Http …
// GET|HEAD   adminCafe/products filament.adminCafe.resources.products.index  …
// GET|HEAD   adminCafe/products/create filament.adminCafe.resources.products.…
// GET|HEAD   adminCafe/products/{record}/edit filament.adminCafe.resources.pr…
// POST       api/carts .............................. CartContoller@createCart
// GET|HEAD   api/carts/{cart} ......................... CartContoller@viewCart
// POST       api/carts/{cart}/items .................... CartContoller@addItem
// POST       api/carts/{cart}/items/{item}/decrease CartContoller@decreaseIte…
// POST       api/carts/{cart}/items/{item}/increase CartContoller@increaseIte…
// GET|HEAD   api/categories ......................... CategoryConrtoller@index
// POST       api/categories ......................... CategoryConrtoller@store
// GET|HEAD   api/categories/{id} ..................... CategoryConrtoller@show
// DELETE     api/categories/{id} .................. CategoryConrtoller@destroy
// GET|HEAD   api/products ............................ ProductController@index
// POST       api/products ............................ ProductController@store
// GET|HEAD   api/products/{id} ........................ ProductController@show
// DELETE     api/products/{id} ..................... ProductController@destroy
// GET|HEAD   api/user ........................................................
// GET|HEAD   filament/exports/{export}/download filament.exports.download › F…
// GET|HEAD   filament/imports/{import}/failed-rows/download filament.imports.…
// GET|HEAD   livewire/livewire.js Livewire\Mechanisms › FrontendAssets@return…
// GET|HEAD   livewire/livewire.min.js.map Livewire\Mechanisms › FrontendAsset…
// GET|HEAD   livewire/preview-file/{filename} livewire.preview-file › Livewir…
// POST       livewire/update livewire.update › Livewire\Mechanisms › HandleRe…
// POST       livewire/upload-file livewire.upload-file › Livewire\Features › …
// GET|HEAD   sanctum/csrf-cookie sanctum.csrf-cookie › Laravel\Sanctum › Csrf… این تمام api منه 

// Cart.jsx:41 Failed to load cart items: 
// TypeError: cartService.getById is not a function
//   at loadCartItems (Cart.jsx:38:50)
//   at Cart.jsx:46:3
//   at commitHookEffectListMount (chunk-T2SWDQEL.js?v=47e2c7bb:16915:34)
//   at commitPassiveMountOnFiber (chunk-T2SWDQEL.js?v=47e2c7bb:18156:19)
//   at commitPassiveMountEffects_complete (chunk-T2SWDQEL.js?v=47e2c7bb:18129:17)
//   at commitPassiveMountEffects_begin (chunk-T2SWDQEL.js?v=47e2c7bb:18119:15)
//   at commitPassiveMountEffects (chunk-T2SWDQEL.js?v=47e2c7bb:18109:11)
//   at flushPassiveEffectsImpl (chunk-T2SWDQEL.js?v=47e2c7bb:19490:11)
//   at flushPassiveEffects (chunk-T2SWDQEL.js?v=47e2c7bb:19447:22)
//   at chunk-T2SWDQEL.js?v=47e2c7bb:19328:17

// Error Component Stack:
//   at Cart (Cart.jsx:11:20)
//   at RenderedRoute (react-router-dom.js?v=47e2c7bb:4092:5)
//   at Routes (react-router-dom.js?v=47e2c7bb:4531:5)
//   at Suspense (<anonymous>)
//   at Router (react-router-dom.js?v=47e2c7bb:4474:15)
//   at BrowserRouter (react-router-dom.js?v=47e2c7bb:5219:5)
//   at AppProvider (AppContext.jsx:9:31)
//   at QueryClientProvider (chunk-3DMX7Q7X.js?v=47e2c7bb:2802:3)
//   at App (App.jsx:40:27)
// Cart.jsx:41 Failed to load cart items: 
// TypeError: cartService.getById is not a function
//   at loadCartItems (Cart.jsx:38:50)
//   at Cart.jsx:46:3
//   at commitHookEffectListMount (chunk-T2SWDQEL.js?v=47e2c7bb:16915:34)
//   at invokePassiveEffectMountInDEV (chunk-T2SWDQEL.js?v=47e2c7bb:18324:19)
//   at invokeEffectsInDev (chunk-T2SWDQEL.js?v=47e2c7bb:19701:19)
//   at commitDoubleInvokeEffectsInDEV (chunk-T2SWDQEL.js?v=47e2c7bb:19686:15)
//   at flushPassiveEffectsImpl (chunk-T2SWDQEL.js?v=47e2c7bb:19503:13)
//   at flushPassiveEffects (chunk-T2SWDQEL.js?v=47e2c7bb:19447:22)
//   at chunk-T2SWDQEL.js?v=47e2c7bb:19328:17
//   at workLoop (chunk-T2SWDQEL.js?v=47e2c7bb:197:42) ارور هام import BottomNavigation from "../components/BottomNavigation";
// import Header from "../components/Header";
// import ProductTitle from "../components/ProductTitle";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";
// import { useEffect } from "react";
// import { cartService } from "../services/cartService";

// function Cart() {
// const navigate = useNavigate();
// const { 
//   cartItems,
//   totalAmount,
//   discountedAmount,
//   removeFromCart,
//   updateCartQuantity,
//   setCartItems,
//   cartId 
// } = useAppContext();


// useEffect(() => {
//   const fetchCartItems = async () => {
//       if (cartId) {
//           const response = await cartService.getItems(cartId);
//           setCartItems(response.data);
//       }
//   };
  
//   fetchCartItems();
// }, [cartId]);

// useEffect(() => {
// const loadCartItems = async () => {
//     if (cartId) {
//         try {
//             const response = await cartService.getById(cartId);
//             setCartItems(response.data.items);
//         } catch (error) {
//             console.error('Failed to load cart items:', error);
//         }
//     }
// };

// loadCartItems();
// }, [cartId]);


// const EmptyCartAnimation = () => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.5 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//     className="flex flex-col items-center justify-center h-[60vh]"
//   >
//     <motion.svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="150"
//       height="150"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#5D2510"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       initial={{ pathLength: 0, opacity: 0 }}
//       animate={{ pathLength: 1, opacity: 1 }}
//       transition={{ duration: 2, ease: "easeInOut" }}
//     >
//       <circle cx="9" cy="21" r="1"></circle>
//       <circle cx="20" cy="21" r="1"></circle>
//       <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//     </motion.svg>
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.5, duration: 0.5 }}
//       className="text-dark-cocoa text-2xl mt-4 text-center"
//     >
//       Your cart is empty
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.7, duration: 0.5 }}
//       className="text-dark-cocoa text-lg mt-2 text-center"
//     >
//       Add some delicious items to your cart!
//     </motion.div>
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.9, duration: 0.5 }}
//       className="mt-6 bg-deep-mahogany text-white px-6 py-2 rounded-full text-lg font-semibold"
//     >
//       <button onClick={() => navigate("/")}>Back to menu</button>
//     </motion.div>
//   </motion.div>
// );

// return (
//   <>
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="bg-body min-h-screen w-full px-10 md:px-6 pt-6"
//     >
//       <Header />
//       <ProductTitle />
//       {cartItems.length === 0 ? (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-dark-cocoa"
//         >
//           <EmptyCartAnimation />
//         </motion.div>
//       ) : (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="-mt-[2.5rem] w-[92%] mx-auto sm:mt-[1rem] h-[22rem] sm:h-[18.4rem] xs:h-[16.7rem] overflow-scroll relative z-[1]"
//           >
//             <AnimatePresence>
//               {cartItems?.map((item) => (
//   import { createContext, useState, useContext, useEffect } from 'react';
// import { cartService } from '../services/cartService';
// import { useCart } from '../hooks/useCart';
// import { useQueryClient } from '@tanstack/react-query';

// const AppContext = createContext();

// // eslint-disable-next-line react/prop-types
// export function AppProvider({ children }) {
//   const [selectedCategory, setSelectedCategory] = useState(4);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [currentItem, setCurrentItem] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartId, setCartId] = useState(() => localStorage.getItem('cartId'));
//   const [tableNumber, setTableNumber] = useState(() => localStorage.getItem('tableNumber'));
  
  
//   const { cart, isLoading, addItem, updateQuantity, removeItem } = useCart(cartId);

  


//   const initCart = async () => {
//     if (!cartId) {
//         try {
//             const response = await cartService.create({ 
//                 table_number: "1",
//                 status: "active"
//             });
            
//             if (response?.data?.id) {
//                 setCartId(response.data.id);
//                 localStorage.setItem('cartId', response.data.id);
//                 return response.data.id;
//             }
//         } catch (error) {
//             console.error('Failed to create cart:', error);
//         }
//     }
//     return cartId;
// };



// const addToCart = async (product) => {
//     try {
//         let currentCartId = cartId;
        
//         if (!currentCartId) {
//             const storedTableNumber = localStorage.getItem('tableNumber');
//             const cart = await cartService.create({
//                 table_number: storedTableNumber,
//                 status: 'active'
//             });
//             currentCartId = cart.data.id;
//             setCartId(currentCartId);
//         }

//         const response = await cartService.addItem(currentCartId, product);
//         return response;
//     } catch (error) {
//         console.error('Add to cart error:', error);
//         throw error;
//     }
// };



//   const toggleExpanded = () => {
//       setIsExpanded(prev => !prev);
//   };
  
//   useEffect(() => {
//     if (!cartId) {
//         initCart();
//     }
// }, []);
// // 1. تغییر در value
// console.log('Cart in Context:', cart); // اینجا چک کنیم
// const value = {
// cartItems: cart?.items || [],
// isLoading,
// addToCart: addItem,
// updateCartQuantity: updateQuantity,
// removeFromCart: removeItem,
// cartId,
// totalItems: cart?.items?.length || 0,
// selectedCategory,
// setSelectedCategory,
// isExpanded,
// tableNumber,
// setIsExpanded,
// toggleExpanded,
// currentItem,
// setCurrentItem,
// setCartItems,
// totalAmount: cart?.total || 0,
// discountedAmount: cart?.discounted_total || 0
// };






//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }

// import api from './axios';

// export const cartService = {
//   create: (data) => api.post('/carts', {
//       table_number: data.table_number,
//       status: data.status
//   }),
  
//   addItem: async (cartId, product) => {
//       const payload = {
//           product_id: parseInt(product.id),
//           quantity: 1
//       };
//       return await api.post(`/carts/${cartId}/items`, payload);
//   },

//   viewCart: (cartId) => api.get(`/carts/${cartId}`),
//   getById: (cartId) => api.get(`/carts/${cartId}`),
  
//   updateQuantity: (cartId, itemId, change) => {
//       const endpoint = change > 0 
//           ? `/carts/${cartId}/items/${itemId}/increase`
//           : `/carts/${cartId}/items/${itemId}/decrease`;
//       return api.post(endpoint);
//   },
  
//   removeItem: (cartId, itemId) => api.delete(`/carts/${cartId}/items/${itemId}`),
// };


// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { cartService } from '../services/cartService';

// export function useCart(cartId) {
//   const queryClient = useQueryClient();

//   const { data: cart, isLoading } = useQuery({
//       queryKey: ['cart', cartId],
//       queryFn: async () => {
//           if (!cartId) return null;
//           const response = await cartService.viewCart(cartId);
//           return response.data;
//       },
//       enabled: !!cartId
//   });

//   const addItemMutation = useMutation({
//       mutationFn: (product) => cartService.addItem(cartId, product),
//       onSuccess: () => queryClient.invalidateQueries(['cart', cartId])
//   });

//   const updateQuantityMutation = useMutation({
//       mutationFn: ({ itemId, change }) => 
//           cartService.updateQuantity(cartId, itemId, change),
//       onSuccess: () => queryClient.invalidateQueries(['cart', cartId])
//   });
  
//   const removeItemMutation = useMutation({
//       mutationFn: (itemId) => cartService.removeItem(cartId, itemId),
//       onSuccess: () => queryClient.invalidateQueries(['cart', cartId])
//   });
  
//   return {
//       cart,
//       isLoading,
//       addItem: addItemMutation.mutate,
//       updateQuantity: updateQuantityMutation.mutate,
//       removeItem: removeItemMutation.mutate
//   };
// }

// هر تغییراتی لازمه اعمال کنی که کد درست کار کنه انجام بده