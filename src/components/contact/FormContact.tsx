import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Your name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: yup.string(),
  message: yup.string().required("Message is required"),
});

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <div>
        <label htmlFor="name" className="block font-medium text-base mb-2">
          Your name *
        </label>
        <input
          id="name"
          {...register("name")}
          className={`resize-none border ${
            errors.name ? "border-red-600" : "border-gray-400"
          } text-gray-700 max-w-full w-full h-12 rounded-lg text-base pl-4 mb-2 transition duration-300 focus:outline-none focus:shadow-outline`}
          placeholder="Abc"
        />
        {errors.name && (
          <p className="text-red-600 mb-2">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-medium text-base mb-2">
          Email address *
        </label>
        <input
          id="email"
          {...register("email")}
          className={`resize-none border ${
            errors.email ? "border-red-600" : "border-gray-400"
          } text-gray-700 max-w-full w-full h-12 rounded-lg text-base pl-4 mb-2 transition duration-300 focus:outline-none focus:shadow-outline`}
          placeholder="Abc@def.com"
        />
        {errors.email && (
          <p className="text-red-600 mb-2">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block font-medium text-base mb-2">
          Subject
        </label>
        <input
          id="subject"
          {...register("subject")}
          className="resize-none border border-gray-400 text-gray-700 max-w-full w-full h-12 rounded-lg text-base pl-4 mb-2 transition duration-300 focus:outline-none focus:shadow-outline"
          placeholder="This is optional"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium text-base mb-2">
          Message *
        </label>
        <textarea
          id="message"
          {...register("message")}
          className={`resize-none border ${
            errors.message ? "border-red-600" : "border-gray-400"
          } text-gray-700 max-w-full w-full h-32 rounded-lg text-base pl-4 pt-2 mb-2 transition duration-300 focus:outline-none focus:shadow-outline`}
          placeholder="Hi! I’d like to ask about"
        />
        {errors.message && (
          <p className="text-red-600 mb-2">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-gold-500 text-white w-full h-12 font-medium text-base rounded-lg transition duration-300 hover:bg-gold-600 focus:outline-none focus:shadow-outline flex items-center justify-center"
        >
          {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
        </button>
      </div>

      {success && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded-lg shadow-md">
          <FaCheckCircle className="inline mr-2" />
          Message sent successfully
        </div>
      )}
    </form>
  );
};

export default FormContact;
