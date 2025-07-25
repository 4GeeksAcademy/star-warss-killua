import React, { createContext, useState } from "react";


export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}




export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (item) => {
        if (!favorites.includes(item)) {
            setFavorites([...favorites, item]);
        }
    };

    const removeFavorite = (item) => {
        setFavorites(favorites.filter(fav => fav !== item));
    };

    return (
        <Context.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </Context.Provider>
    );
};