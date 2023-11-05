import { createContext, useEffect, useState } from "react";
import { client } from "../lib/Sanity";
import { useContext } from "react";


export const productContext = createContext()

export function ProductData({children}) {
    const [product, allProduct] = useState([])
    const [category, allCatagory] = useState([])

    const getAllProduct= async () =>{
        const product= await client.fetch('*[_type=="shop"]{_id, ProductNane, ProductPrice,  "imageUrl": img.asset->url}')
        return allProduct(product)
    }
    const getAllCategory= async () =>{
        const category= await client.fetch('*[_type=="category"]{_id, CategoryNane, "imageUrl": img.asset->url }')
        return allCatagory(category)
    }

    useEffect(() => {

        getAllProduct()
        getAllCategory()

    }, [])
    



return <productContext.Provider value={{product, category}}>
    {children}
</productContext.Provider>

}

export function useProductContext (){

    return useContext(productContext)
}