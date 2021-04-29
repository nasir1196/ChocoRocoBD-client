import React from "react";

// this props are dealing from manageProduct
const ManageServiceDetails = ({ order }) => {
  const { name, email, orderTime, _id, status } = order;

  const handleStatus = (value, id) => {
    fetch(`https://sleepy-basin-61467.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ value }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Status updated Check Service List");
        }
        console.log("update value", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{orderTime}</td>
        <td>{email}</td>
        <td>{status}</td>
        <td>
          {status !== "Pending" && (
            <button
              onClick={() => handleStatus("Pending", _id)}
              className="btn-danger border-0 rounded"
            >
              Pending
            </button>
          )}
          {status !== "On Going" && (
            <button
              onClick={() => handleStatus("OnGoing", _id)}
              className="btn-warning border-0 rounded m-1"
            >
              On Going
            </button>
          )}
          {status !== "Done" && (
            <button
              onClick={() => handleStatus("Done", _id)}
              className="btn-success border-0 rounded m-1"
            >
              Done
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default ManageServiceDetails;
