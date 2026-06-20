import React, { use, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Mybids = () => {
    const { user } = use(AuthContext);
    const [bids, setBids] = useState([])
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/bids?email=${user.email}`)
            .then(data => {
                setBids(data.data)
            })
    }, [user, axiosSecure])


    const handleDeleteBid = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/bids/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bids has been deleted.",
                                icon: "success"
                            });

                            //
                            const remainingBids = bids.filter(bid => bid._id !== _id);
                            setBids(remainingBids)
                        }
                    })
            }
        });

    }
    return (
        <div>
            <h3>My Bids {bids.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                SL No.
                            </th>
                            <th>Product</th>
                            <th>Seller</th>
                            <th>Bid Price</th>
                            <th>Status</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>



                        {/* row 4 */}

                        {
                            bids.map((bid, index) => <tr key={bid._id}>
                                <th> {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Yancy Tear</div>
                                            <div className="text-sm opacity-50">Brazil</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Wyman-Ledner
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                </td>
                                <td>{bid.bid_price}</td>
                                <th>{bid.status === 'pending' ? <div className="badge badge-warning">{bid.status}</div> : <div className="badge badge-success">{bid.status}</div>}</th>
                                <th>
                                    <button className="btn btn-outline btn-xs" onClick={() => handleDeleteBid(bid._id)}>Remove Bid </button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Mybids;