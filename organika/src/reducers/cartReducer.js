// reducer: an arrow fn that receives the current state and action
// should return a NEW state

const cartReducer = (state = [],action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            var copy = [...state];

            /**
             *  if this product id (action.payload.product.id) does nto exist inside the cart
             *      then add id
             *  but if it exist (there is a product on th cart with the same product id),
             *  then, just increase the quantity of the product in the cart 
             * 
             *  FOR each item inside copy
             *      if(action.payload.product.id === item.product.id)
             *          increase item.quantity
             *      else
             *          push the product to copy
             **/

            if(copy.length===0){
                copy.push(action.payload);
                return copy;
            }

            for (var i=0; i<copy.length; i++){
                // console.log("copy: "+copy[i].product.title);
                // console.log("payload: "+action.payload.product.title);
                if(copy[i].product.title === action.payload.product.title){
                    // console.log("action: "+ action.payload.quantity);
                    // console.log("copy: "+copy[i].quantity);
                    var update = copy[i].quantity + action.payload.quantity;
                    copy[i].quantity=update;
                    return copy;
                }
            }
            copy.push(action.payload);
            return copy;
        case 'REMOVE_PRODUCT':
            copy = [...state];
            console.log("action payload: "+action.payload);
            for(i=0; i<copy.length;i++){
                console.log("copy: "+copy[i].product.title);
                if(copy[i].product.title === action.payload){
                    copy.splice(i,1);

                    return copy;
                }
            }
            break;
        default:
            return state;
    }
};

export default cartReducer;