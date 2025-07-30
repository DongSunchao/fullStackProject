import { SET_USER, SET_TOKEN, SET_MENU, SET_ROUTERS } from "../Type";
import type { ActionType } from "../../Type"; 
const initialState = {
    userInfor: {},
    token: "",
    menu: [
        {
            label: 'overview',
            key: '/admin/dash'
        }
    ],
    Routes: [],
}
function reducer(state = initialState, action: ActionType) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userInfor: action.payload
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case SET_MENU:
            return {
                ...state,
                menu: action.payload
            };
        case SET_ROUTERS:
            return {
                ...state,
                Routes: action.payload
            };
        default:
            return state;
    }
}
export default reducer;