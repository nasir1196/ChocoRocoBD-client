import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../../../../App";
import Sidebar from "../../../../Shared/Sidebar/Sidebar";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import "./PlaceService.css";

const PlaceService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null);
  const [services, setServices] = useState({});

  const onSubmit = (data) => {
    setShippingData(data);
  };

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://sleepy-basin-61467.herokuapp.com/placeService/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setServices(result);
      });
  }, [id]);

  const handleProcessPayment = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      ...services,
      status: "Pending",
      shipment: shippingData,
      _id: id,
      paymentId,
      orderTime: new Date(),
    };

    delete orderDetails._id;
    fetch("https://sleepy-basin-61467.herokuapp.com/addUserOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Service Ordered Successfully Done");
        }
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="row">
            <div
              style={{ display: shippingData ? "none" : "block" }}
              className="col-md-6"
            >
              <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  name="name"
                  defaultValue={loggedInUser.name}
                  {...register("name", { required: true })}
                  placeholder="Your name"
                />
                {errors.name && <span className="error">Name is required</span>}
                <input
                  name="email"
                  defaultValue={loggedInUser.email}
                  {...register("email", { required: true })}
                  placeholder="Your email"
                />
                {errors.email && (
                  <span className="error">Email is required</span>
                )}
                <input
                  name="address"
                  {...register("address", { required: true })}
                  placeholder="Your Address"
                />
                {errors.address && (
                  <span className="error">Address is required</span>
                )}
                <input
                  name="phone"
                  {...register("phone", { required: true })}
                  placeholder="Your phone"
                />
                {errors.phone && (
                  <span className="error">Phone is required</span>
                )}

                <input type="submit" />
              </form>
            </div>
            <div
              style={{ display: shippingData ? "block" : "none" }}
              className="col-md-6"
            >
              <h1>Please Pay for This Service</h1>
              <ProcessPayment
                paymentSuccess={handleProcessPayment}
              ></ProcessPayment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceService;
