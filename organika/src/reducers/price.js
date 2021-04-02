const priceReducer = (state=0,action) => {
    switch(action.type){
        case 'price':
            // console.log("inside the reducer");
            return state+1;
        default:
            // console.log("inside the reducer");
            return 0;
    }
}
export default priceReducer;