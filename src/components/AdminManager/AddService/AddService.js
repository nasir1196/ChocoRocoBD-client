import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const AddService = () => {
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      description: data.description,
      img: image,
      localTime: new Date(),
    };

    fetch("https://sleepy-basin-61467.herokuapp.com/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Service Added Successfully!");
        }
      });
  };

  const handleChangeUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "8f45ff4017cba0728e09cfaf7741823e");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="container col-md-10">
        <div className="container">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-group">
                <label for="name">Chocolate Name</label>
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}{" "}
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter Product Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                {errors.description && (
                  <span className="text-danger">This field is required*</span>
                )}{" "}
                <br />
                <textarea
                  class="form-control"
                  id="description"
                  {...register("description", { required: true })}
                  cols="30"
                  rows="5"
                  placeholder="Description"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="chocolate">Picture Upload</label>
                <input
                  type="file"
                  class="form-control"
                  id="chocolate"
                  placeholder="Upload Chocolate"
                  onChange={handleChangeUpload}
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
