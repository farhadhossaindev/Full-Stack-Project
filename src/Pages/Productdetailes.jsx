import { useParams } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import { PortableText } from '@portabletext/react'


function Productdetailes() {
    const [product, setProduct] = useState({})
    const [loding, setLoding] = useState()
    const { ProductNane, ProductPrice,Category, desc, imageUrl } = product
    const { id } = useParams()

    console.log(product)

    const query = `*[_type=="shop" && _id=="${id}"]{_id, ProductNane, ProductPrice, desc, "imageUrl": img.asset->url, Category->{CategoryNane}}
    `

    const getProduct = async () => {
        setLoding(true)
        const product = await client.fetch(query)
        setLoding(false)
        return setProduct(product[0])
    }


    useEffect(() => {

        getProduct()

    }, [])

    return (
        <Layout title={"Product Info"} >
            <div className='lg:my-20 lg:mx-28 sm:my-5'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='w-6/12'><img src={imageUrl} alt="Album" /></figure>
                    <div className="card-body">
                        <div className='justify-center align-middle flex text-center'>
                            <div>
                                <h2 className='font-bold text-2xl py-3'>{ProductNane}</h2>
                                <h3 className='font-bold text-2xl py-3'>$ {ProductPrice}</h3>
                                <p className='py-2'>
                                    <PortableText
                                        value={desc}
                                    />
                                </p>

                            </div>
                        </div>
                        <div className="card-actions justify-center py-5">
                            <button className="btn btn-primary">Buy Now</button>
                            <button className="btn btn-primary">Add To Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Productdetailes