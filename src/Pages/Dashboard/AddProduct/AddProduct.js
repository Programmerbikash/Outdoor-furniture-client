import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey)

  const navigate = useNavigate();

  const handleBuying = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const seller = {
            name: data.name,
            description: data.description,
            image: imgData.data.url,
            email: data.email,
            sellingPrice: data.sellingPrice,
            quality: data.quality,
            location: data.location,
            phone: data.phone
          };

          // save doctor information to the database
          fetch("https://outdoor-furniture-server-programmerbikash.vercel.app/seller/addProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(seller),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/myProduct");
            });
        }
      });
  };

  return (
    <div className="my-20">
      <div className="w-5/6 mx-auto">
              <form
                  onSubmit={handleSubmit(handleBuying)}
              className="grid grid-cols-1 gap-2"
              action=""
            >
              <label className="label">
                <span className="label-text">Service Name:</span>
              </label>
              <input
                      {...register("name", {
                        required: "Name is Required",
                      })}
                type="text"
                placeholder='Enter Your Service Name'
                className="input input-bordered w-full"
                  />
                  {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
              <label className="label">
                <span className="label-text">Service Description:</span>
              </label>
                <div className="form-control"> 
                    <textarea {...register("description", {
                    required: "Description is Required",
                  })} className="textarea textarea-bordered h-24" placeholder="Enter Your Service Details"></textarea>
                  </div>
                  {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
              <label className="label">
                <span className="label-text">Enter Your Email:</span>
          </label>
              <input
                type="email"
                {...register("email")}
                  defaultValue={user?.email}
                  disabled
                  readOnly
                className="input input-bordered w-full"
                  />
                  {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
              <label className="label">
                <span className="label-text">Furniture Price:</span>
              </label>
              <input
                type="text"
                {...register("sellingPrice", {
                    required: "Price is Required",
                  })}
                placeholder='Enter Your Selling Price'
                className="input input-bordered w-full"
                  />
                  {errors.sellingPrice && (
              <p className="text-red-500">{errors.sellingPrice.message}</p>
            )}
              <label className="label">
                <span className="label-text">Service Quality:</span>
              </label>
                  <select {...register("quality", {
                    required: "Quality is Required",
                  })} className="select select-bordered w-full">
                <option disabled selected>excellent</option>
                <option>good</option>
                <option>fair</option>
                  </select>
                  {errors.quality && (
              <p className="text-red-500">{errors.quality.message}</p>
            )}
              <label className="label">
                <span className="label-text">Seller's Location:</span>
              </label>
              <input
                type="text"
                      {...register("location", {
                        required: "Location is Required",
                      })}
                placeholder='Enter Your Location'
                className="input input-bordered w-full"
                  />
                  {errors.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}
              <label className="label">
                <span className="label-text">Phone Number:</span>
              </label>
              <input
                type="text"
                      {...register("phone", {
                        required: "Phone is Required",
                      })}
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                  />
                  {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
                  )}
                  <label className="label">
              {" "}
              <span className="label-text">Service Image</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className="input input-bordered w-full"
          />
          {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
                  )}
              <input
                className="btn btn-success w-full"
                type="submit"
                value="Submit"
              />
              </form>
      </div>
    </div>
  );
};

export default AddProduct;
