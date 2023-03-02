
export const addToFavorites = 'addToFavorites'
export const removeToFavorites = "removeToFavorites";


export const _addToFavorites = (id) => async dispatch => {
    const resolve = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await resolve.json().catch(err=>console.error(err))
    return dispatch({type: addToFavorites, payload: data})
};

export const _removeToFavorites = (id) => async dispatch => {
    return dispatch({type: removeToFavorites, payload: id})
};


