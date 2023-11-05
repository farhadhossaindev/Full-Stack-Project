import Layout from '../Layout/Layout'


function Productdetailes() {
    return (
        <Layout title={"Product Info"} >
            <div className='lg:my-20 lg:mx-28 sm:my-5'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='w-6/12'><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" alt="Album" /></figure>
                    <div className="card-body">
                        <div className='justify-center align-middle flex text-center'>
                           <div>
                           <h2 className='font-bold text-2xl py-3'>New album is released!</h2>
                            <p className='py-2'>Destription</p>
                            <p className='py-2'>Categories</p>
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