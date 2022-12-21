import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModel = ({ service, setService }) => {
  //   console.log(service)
    const { img, title, resale_price, location, sellar_name } = service;
    const { user } = useContext(AuthContext);

  const handleBuying = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const sellingPrice = form.sellingPrice.value;
    const sellerName = form.sellerName.value;
    const location = form.location.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const phone = form.phone.value;

      const buying = {
          service_name: name,
          service_img: img,
          selling_price: sellingPrice,
          seller_name: sellerName,
          location,
          user_name: userName,
          email,
          phone
      };

      fetch('https://outdoor-furniture-server.vercel.app/buying', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buying)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setService(null);
                    toast.success('Buying confirmed');
                }
                else{
                    toast.error(data.message);
                }
            })

    //   console.log(buying);
  };

  return (
    <div>
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-3xl text-center">{title}</h3>
            <form
              onSubmit={handleBuying}
              className="grid grid-cols-1 gap-2"
              action=""
            >
              <label className="label">
                <span className="label-text">Service Name:</span>
              </label>
              <input
                name="name"
                type="text"
                value={title}
                disabled
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Furniture Price:</span>
              </label>
              <input
                name="sellingPrice"
                type="text"
                value={resale_price}
                disabled
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Seller Name:</span>
              </label>
              <input
                name="sellerName"
                type="text"
                value={sellar_name}
                disabled
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Seller's Location:</span>
              </label>
              <input
                type="text"
                name="location"
                value={location}
                disabled
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.displayName}
                readOnly
                disabled
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                readOnly
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Phone Number:</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
              />
              <input
                className="btn btn-success w-full"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
