import { Link } from "react-router-dom"

function ProductCard({productInfo}) {
    const {_id, imageUrl, ProductNane, ProductPrice, Category}=productInfo


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">$ {ProductPrice}</h2>
                    <p>{ProductNane}</p>
                    
                    <div className="card-actions justify-end">
                        <Link to={`/productinfo/${_id}`}  >
                        <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard