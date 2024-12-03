import * as ActionTypes from './ActionTypes';

export const addComment = (equipoId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    equipoId: equipoId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
