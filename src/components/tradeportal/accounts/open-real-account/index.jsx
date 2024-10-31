import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const OpenRealAccount = () => {
  // Define formik with initial values and validation schema
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      //   email: "",
      //   city: "",
      //   state: "",
      //   country: "",
      //   zipCode: "",
      //   address: "",
      //   phone: "",
      //   comment: "",
      deposit: "",
      group: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      //   email: Yup.string()
      //     .email("Invalid email address")
      //     .required("Email is required"),
      //   city: Yup.string().required("City is required"),
      //   state: Yup.string().required("State is required"),
      //   country: Yup.string().required("Country is required"),
      //   zipCode: Yup.string().required("Zip Code is required"),
      //   address: Yup.string().required("Address is required"),
      //   phone: Yup.string().required("Phone is required"),
      //   comment: Yup.string().required("Comment is required"),
      deposit: Yup.string().required("Deposit is required"),
      group: Yup.string().required("Select Group is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      console.log("hello submission");
      alert("Form submitted successfully!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4 p-4">
      <div>
        <label>Type*</label>
        <select
          name="deposit"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.deposit}
          className="border p-2 w-full"
        >
          <option value="" disabled>
            options
          </option>
          <option value="MT4">MT4</option>
          <option value="MT5">MT5</option>
          <option value="Vertex">Vertex</option>
        </select>
        {formik.touched.deposit && formik.errors.deposit && (
          <p className="text-red-500">{formik.errors.deposit}</p>
        )}
      </div>
      <div>
        <label>Name*</label>
        <input
          name="group"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.group}
          className="border p-2 w-full"
        />
        {formik.touched.group && formik.errors.group && (
          <p className="text-red-500">{formik.errors.group}</p>
        )}
      </div>

      <div>
        <label>Amount*</label>
        <input
          name="group"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.group}
          className="border p-2 w-full"
        />
        {formik.touched.group && formik.errors.group && (
          <p className="text-red-500">{formik.errors.group}</p>
        )}
      </div>

      <button
        type="submit"
        className=" bg-blue-500 text-white font-bold py-1 px-2 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default OpenRealAccount;
