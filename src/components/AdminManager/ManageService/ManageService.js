import React, { useEffect, useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const ManageService = () => {
  const [manage, setManage] = useState([]);
  const url = `https://sleepy-basin-61467.herokuapp.com/services`;
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
                <th scope="col">Service</th>
                <th scope="col">Service Id</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {manage.map((order) => (
              <ServiceDetails key={order._id} order={order} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
