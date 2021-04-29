import React, { useEffect, useState } from "react";
import Sidebar from "../../../../Shared/Sidebar/Sidebar";
import UserServiceDetails from "../UserServiceDetails/UserServiceDetails";

const UserService = () => {
  const [orderService, setOrderService] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-basin-61467.herokuapp.com/userOrder")
      .then((res) => res.json())
      .then((data) => {
        setOrderService(data);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="row">
            {orderService.length ? (
              orderService.map((order) => (
                <UserServiceDetails key={order._id} order={order} />
              ))
            ) : (
              <h1 className="text-center text-warning">
                At This Moments There Is No Services Added!!!
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserService;
