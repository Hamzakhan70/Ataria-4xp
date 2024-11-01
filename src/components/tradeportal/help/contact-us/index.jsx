import { useForm } from "react-hook-form";
import React from "react";

const onSubmit = (data) => {
  console.log(data);
};
const TradeContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <div className="font-bold">
      TradeContactUs
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className=" px-4 py-2 border-2 border-gray-400 rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className=" px-4 py-2 border-2 border-gray-400 rounded-md inline"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* File Upload Field */}
        <div>
          <label htmlFor="file" className="block text-gray-700">
            Choose File
          </label>
          <input
            id="file"
            type="file"
            {...register("file", { required: "File is required" })}
            className="w-full border-2 border-gray-400 p-2"
          />
          {errors.file && <p className="text-red-500">{errors.file.message}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="10"
            {...register("message", { required: "Message is required" })}
            className="w-full px-4 py-2 border-2 border-gray-400 rounded-md"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TradeContactUs;
