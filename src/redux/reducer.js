import { aparato } from '../shared/aparatos';
import { COMENTARIOS } from '../shared/comentarios';
import { PROMOCIONES } from '../shared/promociones';
import { INGS } from '../shared/ings';

export const initialState={
    aparatos: aparato,
    comments: COMENTARIOS,
    promotions: PROMOCIONES,
    ings: INGS
}

export const Reducer = (state = initialState, action) => {
    return state;
}
