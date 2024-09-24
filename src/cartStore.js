












// import { create } from 'zustand';

// const useCartStore = create((set) => ({
//   cartItems: [],  // قائمة المنتجات في السلة
//   cartCount: 0,   // عداد المنتجات الإجمالي
//   addToCart: (product) => set((state) => {
//     const existingItem = state.cartItems.find(item => item.id === product.id);
//     if (existingItem) {
//       return {
//         cartItems: state.cartItems.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
//         ),
//         cartCount: state.cartCount + product.quantity, // زيادة العدد بناءً على الكمية المضافة
//       };
//     } else {
//       return {
//         cartItems: [...state.cartItems, { ...product, quantity: product.quantity }],
//         cartCount: state.cartCount + product.quantity, // زيادة العدد بناءً على الكمية المضافة
//       };
//     }
//   }),
//   removeFromCart: (index) => set((state) => {
//     const removedItem = state.cartItems[index];
//     const newItems = state.cartItems.filter((_, i) => i !== index);
//     return {
//       cartItems: newItems,
//       cartCount: state.cartCount - removedItem.quantity, // تقليل العدد بناءً على الكمية المحذوفة
//     };
//   }),
//   setCartItems: (items) => set({ cartItems: items }), // تحديث السلة يدويًا
//   toggleSidebar: () => set((state) => ({
//     isSidebarOpen: !state.isSidebarOpen,
//   })),
//   isSidebarOpen: false,  // الحالة الافتراضية للشريط الجانبي
// }));

// export default useCartStore;















// import { create } from 'zustand';

// const useCartStore = create((set) => ({
//   cartItems: [],  // قائمة المنتجات في السلة
//   cartCount: 0,   // عداد المنتجات الإجمالي

//   // إضافة منتج إلى السلة
//   addToCart: (product) => set((state) => {
//     const existingItem = state.cartItems.find(item => item.id === product.id);
//     const count = state.count; // استخدم العدد الحالي من الحالة

//     if (existingItem) {
//       return {
//         cartItems: state.cartItems.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + count } : item
//         ),
//         cartCount: state.cartCount + count, // زيادة العدد بناءً على الكمية المضافة
//       };
//     } else {
//       return {
//         cartItems: [...state.cartItems, { ...product, quantity: count }],
//         cartCount: state.cartCount + count, // زيادة العدد بناءً على الكمية المضافة
//       };
//     }
//   }),

//   // إزالة منتج من السلة بناءً على الفهرس
//   removeFromCart: (index) => set((state) => {
//     const removedItem = state.cartItems[index];
//     const newItems = state.cartItems.filter((_, i) => i !== index);
//     return {
//       cartItems: newItems,
//       cartCount: state.cartCount - removedItem.quantity, // تقليل العدد بناءً على الكمية المحذوفة
//     };
//   }),

//   // تحديث قائمة السلة يدويًا
//   setCartItems: (items) => set({ cartItems: items }),

//   // التحكم في ظهور الشريط الجانبي للسلة
//   toggleSidebar: () => set((state) => ({
//     isSidebarOpen: !state.isSidebarOpen,
//   })),

//   isSidebarOpen: false,

//   count: 1,

//   decrementCount: (product) =>
//     set((state) => {
//       if (product && state.count > 1) {
//         return {
//           count: state.count - 1,
//         };
//       } else {
//         return { count: state.count };
//       }
//     }),

//   incrementCount: () =>
//     set((state) => ({
//       count: state.count + 1,
//     })),
// }));

// // الحالة الافتراضية للشريط الجانبي

// export default useCartStore;









import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],  // قائمة المنتجات في السلة
  cartCount: 0,   // عداد المنتجات الإجمالي

  // إضافة منتج إلى السلة
  addToCart: (product) => set((state) => {
    const existingItem = state.cartItems.find(item => item.id === product.id);
    const count = state.count; // استخدم العدد الحالي من الحالة

    if (existingItem) {
      return {
        cartItems: state.cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + count } : item
        ),
        cartCount: state.cartCount + count, // زيادة العدد بناءً على الكمية المضافة
      };
    } else {
      return {
        cartItems: [...state.cartItems, { ...product, quantity: count }],
        cartCount: state.cartCount + count, // زيادة العدد بناءً على الكمية المضافة
      };
    }
  }),

  // إزالة 1 من كمية المنتج في السلة
  decrementQuantity: (productId) => set((state) => {
    const existingItem = state.cartItems.find(item => item.id === productId);
    if (existingItem && existingItem.quantity > 1) {
      return {
        cartItems: state.cartItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ),
        cartCount: state.cartCount - 1, // تقليل العدد الإجمالي
      };
    }
    return state; // إذا كانت الكمية 1 أو لا يوجد العنصر، لا تفعل شيئًا
  }),

  // إزالة منتج بالكامل من السلة
  removeFromCart: (productId) => set((state) => {
    const removedItem = state.cartItems.find(item => item.id === productId);
    if (removedItem) {
      const newItems = state.cartItems.filter(item => item.id !== productId);
      return {
        cartItems: newItems,
        cartCount: state.cartCount - removedItem.quantity, // تقليل العدد بناءً على الكمية المحذوفة
      };
    }
    return state;
  }),

  // تحديث قائمة السلة يدويًا
  setCartItems: (items) => set({ cartItems: items }),

  // التحكم في ظهور الشريط الجانبي للسلة
  toggleSidebar: () => set((state) => ({
    isSidebarOpen: !state.isSidebarOpen,
  })),

  isSidebarOpen: false,

  count: 1,

  decrementCount: (product) =>
    set((state) => {
      if (product && state.count > 1) {
        return {
          count: state.count - 1,
        };
      } else {
        return { count: state.count };
      }
    }),

  incrementCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));

export default useCartStore;








