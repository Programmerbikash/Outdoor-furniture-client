import React from "react";

const BookingModel = ({ service }) => {
  //   console.log(service)
  const { title, resale_price, location, sellar_name } = service;

  const handleBuying = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellingPrice = form.sellingPrice.value;
    const sellerName = form.sellerName.value;
    const location = form.location.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const phone = form.phone.value;

    console.log(
      sellingPrice,
      sellerName,
      sellerName,
      location,
      userName,
      email,
      phone
    );
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
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
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
