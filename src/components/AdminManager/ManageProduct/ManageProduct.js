import React, { useEffect, useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import ManageServiceDetails from "../ManageServiceDetails/ManageServiceDetails";

const ManageProduct = () => {
  const [manage, setManage] = useState([]);
  const url = `https://sleepy-basin-61467.herokuapp.com/userServices`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setManage(data);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Ordered Service</th>
                <th scope="col">Order Time</th>
                <th scope="col">Email</th>
                <th scope="col">Current Status</th>
                <th scope="col">Change Status</th>
              </tr>
            </thead>
            {manage.map((order) => (
              <ManageServiceDetails key={order._id} order={order} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
