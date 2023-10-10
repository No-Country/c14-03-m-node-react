import React, { createContext, useMemo } from 'react'

export const GenericContext = createContext({})

// eslint-disable-next-line react/prop-types
export function GenericProvider ({ children }) {
//   const [cartProducts, setCartProducts] = useState([] as Product[]);
//   const [myOrders, setMyOrders] = useState([] as Order[]);
//   const [isDetailOpen, setIsDetailOpen] = useState(false);
//   const [isMyOrderOpen, setIsMyOrderOpen] = useState(false);
//   const [productSelected, setProductSelected] = useState({} as Product);
//   const [products, setProducts] = useState([] as Product[]);
//   const [productsToRender, setProductsToRender] = useState([] as Product[]);
//   const [searchedValue, setSearchedValue] = useState(' ');

    const values = useMemo(() => ({
        // cartProducts,
        // setCartProducts,
        // isDetailOpen,
        // setIsDetailOpen,
        // productSelected,
        // setProductSelected,
        // isMyOrderOpen,
        // setIsMyOrderOpen,
        // myOrders,
        // setMyOrders,
        // products,
        // setProducts,
        // searchedValue,
        // setSearchedValue,
        // productsToRender,
        // setProductsToRender
    }), [
        // cartProducts,
        // isDetailOpen,
        // productSelected,
        // isMyOrderOpen,
        // products,
        // productsToRender,
        // searchedValue
    ])
    return (
        <GenericContext.Provider value={values}>
            {children}
        </GenericContext.Provider>
    )
}
