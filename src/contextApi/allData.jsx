import { createContext, useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { useContext } from "react";


export const productContext = createContext()

export function ProductData({children}) {
    const [product, allProduct] = useState([])
    const [category, allCatagory] = useState([])
    //loding state
    const [loadingFarhad, setLoadingFarhad] = useState([])

    const getAllProduct= async () =>{
        setLoadingFarhad(true)
        const product= await client.fetch('*[_type=="shop"]{_id, ProductNane, ProductPrice, Category->{CategoryNane},  "imageUrl": img.asset->url,}')
        setLoadingFarhad(false)
        return allProduct(product)
    }

    const getAllCategory= async () =>{
        const category= await client.fetch('*[_type=="category"]{_id, CategoryNane, "imageUrl": img.asset->url }')
        return allCatagory(category)
    }

    //user Search 
    const getUserSearchData=(e)=>{
        const userSearchValue = e.target.value
        getUserProduct(userSearchValue)
    }

    const getUserProduct = async (userData) =>{

        const query = `*[_type=="shop" && (ProductNane match "${userData}*")]{_id, ProductNane, ProductPrice, desc, "imageUrl": img.asset->url, Category->{CategoryNane}}`

        const serarchproduct = await client.fetch(query)
        allProduct(serarchproduct)
    }

    useEffect(() => {

        getAllProduct()
        getAllCategory()

    }, [])
    



return <productContext.Provider value={{product, category, loadingFarhad, getUserSearchData}}>
    {children}
</productContext.Provider>

}

export function useProductContext (){

    return useContext(productContext)
}