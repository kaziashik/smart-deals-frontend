import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const ProductsDetails = () => {
    const {user}= useAuth()
    // const { user } = use(AuthContext)
    const [bids, setBids] = useState([])
    const { _id: productId } = useLoaderData();
    const bidModalRef = useRef(null)


    //   using axios

    useEffect(() => {
        axios.get(`http://localhost:3000/products/bids/${productId}`)
        .then(data=>{
            console.log("after Axios get", data);
            setBids(data.data)
        })

    }, [productId])



    // normal fatch

    // useEffect(() => {
    //     fetch(`http://localhost:3000/products/bids/${productId}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setBids(data);
    //             console.log('bids for this products_form bids', data);
    //         })
    // }, [productId])





    const handleBidModalOpen = () => {
        bidModalRef.current.showModal();

    }

    const handleBidSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const bid = e.target.bid.value;
        console.log("check bids", productId, name, email, bid);
        const newBid = {
            product: productId,
            buyer_name: name,
            buyer_email: email,
            buyer_image: user?.photoURL,
            bid_price: bid,
            status: 'pending'
        }

        fetch('http://localhost:3000/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                bidModalRef.current.close()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your bid has been placed",
                    showConfirmButton: false,
                    timer: 1500
                });

                //add the new bid to thestate
                newBid._id = data.insertedId;
                const newBids = [...bids, newBid];
                newBids.sort((a, b) => b.bid_price - a.bid_price)
                setBids(newBids)

            }
        })

    }
    return (
        <div>
            {/* product info */}
            <div>
                <div>
                    <div>
                        <button onClick={handleBidModalOpen} className="btn btn-primary"> I want to By This prodict</button>


                        <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Give the best offer!</h3>
                                <p className="py-4">Offer something seller can not resist</p>
                                <form onSubmit={handleBidSubmit}>
                                    {/* if there is a button in form, it will close the modal */}
                                    <fieldset className="fieldset">

                                        <label className="label">Name</label>
                                        <input type="text" readOnly className="input" name="name" defaultValue={user?.displayName} />

                                        {/* Email */}
                                        <label className="label">Email</label>
                                        <input readOnly type="email" name="email" className="input" defaultValue={user?.email} placeholder="your Bid" />
                                        {/* bid amount */}
                                        <label className="label">Bid</label>
                                        <input type="text" name="bid" className="input" />

                                        <button className="btn btn-neutral mt-4">please Your Bid</button>
                                    </fieldset>
                                    <button type='button' className="btn" onClick={() => { bidModalRef.current.close() }}>Cancel</button>
                                </form>
                                <div className="modal-action">

                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            {/* bids for this product */}

            <div>
                <h3 className="text-3xl"> Bids for this Products: <span className='text-primary'>{bids.length}</span></h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    SL No.
                                </th>
                                <th>Buyer Name</th>
                                <th>Buyer Email</th>
                                <th>Bid Price</th>
                                <th>Actions</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {bids.map((bid, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{bid.buyer_name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {bid.buyer_email}
                                </td>
                                <td>{bid.bid_price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)}
                            {/* row 2 */}


                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>

        </div>
    );
};

export default ProductsDetails;