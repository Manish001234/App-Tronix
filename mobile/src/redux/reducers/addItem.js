const addItem=[];
export const addItems = (state=addItem,action)=>{
    switch(action.type){
        case "ADDITEM":
            return [
            ...state,
            action.payload
        ]
        case "UPDATEADD":
                return [...state];
        case "DELETECART":
                return [];
        case 'DELITEM':
            return state=state.filter((x)=>{
                return x.id !== action.payload.id
            })

            default:
                return state;
    }
}
