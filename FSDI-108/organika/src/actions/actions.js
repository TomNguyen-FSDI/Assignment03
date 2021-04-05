//actions: an arrow fn that returns an object
//that contain a type (desc) of action, and payload (data)

export const addProductToCart = (product) => {
    return { 
        type: 'ADD_PRODUCT', 
        payload: product,
    };
};

export const removeProductFromCart = (title) =>{
    return { type: 'REMOVE_PRODUCT', payload: title};
};