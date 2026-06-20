import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CreateProduct = () => {
    const {user}=useAuth()
    const axiosInstance=useAxios()
    const axiosScure=useAxiosSecure();

    const handelCreatProdut = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const category = e.target.category.value;
        const price_min = e.target.price_min.value;
        const price_max = e.target.price_max.value;
        const condition = e.target.condition.value;
        const usage = e.target.usage.value;
        const image = e.target.image.value;
        const seller_name = e.target.seller_name.value;
        const email = e.target.email.value;
        const seller_contact = e.target.seller_contact.value;
        const seller_image = e.target.seller_image.value;
        const location = e.target.location.value;
        const description = e.target.description.value;

        const newProduct = {
            title,
            category,
            price_min: Number(price_min),
            price_max: Number(price_max),
            condition,
            usage,
            image,
            seller_name,
            email,
            seller_contact,
            seller_image,
            location,
            description,
            status: "pending",
            created_at: new Date().toISOString()
        };

        console.log("Created Product:", newProduct);




        // send data to database using axiuse


        // axios.post('http://localhost:3000/products',newProduct)
        // .then(data=>{
        //     console.log("axios chicke", data.data);
        //    if (data.data.insertedId) {

        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Product created successfully.',
        //                 icon: 'success'
        //             });
        //         }
        // })



        // normal axios

        // axiosInstance.post('/products', newProduct)
        // .then(data=>{
        //     console.log(data.data);
        //     if (data.data.insertedId) {

        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Product created successfully.',
        //                 icon: 'success'
        //             });
        //         }
        // })


        axiosScure.post('/products', newProduct)
        .then(data =>{
            console.log("after secure call", data.data);
        })








        // send data to database using normaly

        // fetch('http://localhost:3000/products', {
        //     method: 'post',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newProduct)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);

        //         if (data.insertedId) {

        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Product created successfully.',
        //                 icon: 'success'
        //             });

        //             e.target.reset();
        //         }

        //     })
        //     .catch(error => {
        //         Swal.fire({
        //             title: 'Oops!',
        //             text: error.message,
        //             icon: 'error'
        //         });

        //         console.log(error);
        //     });
    };


    return (
        <div className="min-h-screen bg-base-200 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <Link to="/" className="text-sm font-medium">
                        ← Back To Products
                    </Link>

                    <h1 className="text-4xl font-bold mt-4">
                        Create <span className="text-primary">A Product</span>
                    </h1>
                </div>

                <form onSubmit={handelCreatProdut} className="bg-base-100 shadow-xl rounded-lg p-8 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="label">Title</label>
                            <input
                                type="text"
                                name="title"
                                className="input input-bordered w-full"
                                placeholder="e.g. Yamaha Fz Guitar for Sale"
                            />
                        </div>

                        <select name="category" className="select select-bordered w-full" defaultValue="">
                            <option value="" disabled>
                                Select a Category
                            </option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Sports">Sports</option>
                            <option value="Home Appliances">Home Appliances</option>
                            <option value="Books">Books</option>
                        </select>

                        <div>
                            <label className="label">Min Price You want to Sale ($)</label>
                            <input
                                type="number"
                                name="price_min"
                                className="input input-bordered w-full"
                                placeholder="e.g. 18.5"
                            />
                        </div>

                        <div>
                            <label className="label">Max Price You want to Sale ($)</label>
                            <input
                                type="number"
                                name="price_max"
                                className="input input-bordered w-full"
                                placeholder="Optional"
                            />
                        </div>

                        <div>
                            <label className="label">Product Condition</label>
                            <div className="flex gap-8 mt-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="condition" value="fresh" className="radio radio-primary" defaultChecked />
                                    Fresh
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="radio" name="condition" value="used" className="radio radio-primary" />
                                    Used
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="label">Product Usage Time</label>
                            <input
                                type="text"
                                name="usage"
                                className="input input-bordered w-full"
                                placeholder="e.g. 1 year 3 month"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="label">Your Product Image URL</label>
                        <input
                            type="text"
                            name="image"
                            className="input input-bordered w-full"
                            placeholder="https://..."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="label">Seller Name</label>
                            <input
                                type="text"
                                name="seller_name"
                                className="input input-bordered w-full"
                                placeholder="e.g. Artisan Roasters"
                            />
                        </div>

                        <div>
                            <label className="label">Seller Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                                placeholder="example@gmail.com"
                            />
                        </div>

                        <div>
                            <label className="label">Seller Contact</label>
                            <input
                                type="text"
                                name="seller_contact"
                                className="input input-bordered w-full"
                                placeholder="e.g. +1-555-1234"
                            />
                        </div>

                        <div>
                            <label className="label">Seller Image URL</label>
                            <input
                                type="text"
                                name="seller_image"
                                className="input input-bordered w-full"
                                placeholder="https://..."
                            />
                        </div>
                    </div>

                    <div>
                        <label className="label">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="input input-bordered w-full"
                            placeholder="City, Country"
                        />
                    </div>

                    <div>
                        <label className="label">Simple Description about your Product</label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered w-full h-28"
                            placeholder="e.g. I bought this product 3 months ago..."
                        ></textarea>
                    </div>

                    <button className="btn btn-gradient w-full">
                        Create A Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;