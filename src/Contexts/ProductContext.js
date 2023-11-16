import { useContext, createContext } from "react";


const ProductContext = createContext ()
//Custom hook
export const useProducts = () => useContext(ProductContext)
//Functionality
export const ProductProvider = ({children}) => {

}
