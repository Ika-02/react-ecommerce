import { createContext, useReducer } from 'react';

export const Cart = createContext();

const updateCart = (state, action) => {
    switch (action.type){
        case 'add':
            let alreadyInCart = false
            state.cart.forEach(item => {
                if (item.id == action.item.id) {alreadyInCart = true;}
            });
            if (alreadyInCart){
                let index = state.cart.findIndex(item => item.id == action.item.id)
                state.cart[index].quantity += action.quantity;
            } else {
                let item = structuredClone(action.item);
                item.quantity = action.quantity;
                state.cart.push(item);
            }
            state.item_nbr += action.quantity;
            return {...state};
        
        case 'remove':
            let index = state.cart.indexOf(action.item);
            state.cart.splice(index, 1);
            state.item_nbr -= action.item.quantity;
            return {...state};

        case 'empty':
            state.cart = [];
            state.item_nbr = 0;
            return {...state};

        default:
            console.log('updateCart: Action non reconnue');
            return {...state};
    }
}

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(updateCart, {cart: [], item_nbr: 0});

    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    );
}