import React, { use } from 'react';
import Product from '../product/Product';

const LatestProducts = ({ latestProductPromis }) => {
    const products = use(latestProductPromis)
    // console.log("latesProducts", latestProductPromis);
    return (
        <div>
            <h2 className='text-5xl text-center'> Recent <span className='text-primary'>Products</span></h2>
            <div className=' gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Product
                        key={product._id} product={product}>
                    </Product>)
                }
            </div>

        </div>
    );
};

export default LatestProducts;