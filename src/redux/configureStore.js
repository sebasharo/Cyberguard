
import { legacy_createStore as createStore, combineReducers } from "redux";
import { Aparato, Equipo } from "./equipoReducer";
import { Comentarios } from "./commentsReducer";
import { Promotions } from "./promoReducer";  
import { Ings } from "./ingsReducer";
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            equipo: Aparato,
            comments: Comentarios,
            promotions: Promotions,
            ings: Ings
        }),
    );
    return store;
}
