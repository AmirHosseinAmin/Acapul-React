import React from "react";


export const ProductContext = React.createContext ({

  items:[],
  totalAmount:0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
