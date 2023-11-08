import ProductCard from "../Component/ProductCard";
import Layout from "../Layout/Layout";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useProductContext } from "../contextApi/allData";
import LoadingFarhad from "../Component/LoadingFarhad";





function Shop() {
  const { product, loadingFarhad, category, getUserSearchData } = useProductContext()

  return (
    <Layout title={"Shop"} >
      <section className="w-10/12 mx-auto" >

        <section className="flex justify-center my-5 gap-5 ">
          <input onChange={getUserSearchData} type="search" placeholder="Search Product" className="input input-bordered w-[50%] " />
          <select className="select select-bordered w-[32%]">
            <option disabled selected >Categories</option>
            {
              category.map(cat => <option key={cat._id} >{cat.CategoryNane}</option>)
            }
          </select>
        </section>

        <div className="flex flex-wrap justify-center gap-6 my-5">


          {
            loadingFarhad ? <LoadingFarhad /> : <>
              {
                product.map(product => <ProductCard key={product._id} productInfo={product} />)
              }
            </>
          }
        </div>
        <div className="my-5 mx-10 flex justify-between">
          <button className="btn btn-primary"><FaArrowLeft />Privious</button>
          <button className="btn btn-primary"> Next<FaArrowRight /></button>
        </div>
      </section>
    </Layout>
  )
}

export default Shop