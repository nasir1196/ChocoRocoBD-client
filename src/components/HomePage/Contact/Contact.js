import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const serviceData = {
      email: data.email,
      msg: data.message,
      localTime: new Date(),
    };
    fetch("https://sleepy-basin-61467.herokuapp.com/addUserContact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Your Application Has been Submitted!");
        }
      });
  };
  return (
    <section className="contact my-5 py-5">
      <div className="container">
        <div className="section-header text-center text-white mb-5">
          <h5 className="text-primary">Contact</h5>
          <h1>Always connect with us</h1>
        </div>
        <div className="col-md-9 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                type="text"
                className="form-control"
                placeholder="Email Address *"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-group m-3">
              {errors.subject && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                type="text"
                className="form-control"
                placeholder="Subject *"
                {...register("subject", { required: true })}
              />
            </div>
            <div className="form-group m-5">
              {errors.message && (
                <span className="text-danger">This field is required</span>
              )}
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="6"
                placeholder="Message *"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div className="form-group text-center m-3">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
