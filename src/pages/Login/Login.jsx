import { useFormik } from "formik";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      const { email, password } = values;
      console.log(values);
    },
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(https://wallpapercave.com/wp/wp9764093.jpg)",
        }}
        className="hero min-h-screen  "
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="px-0 text-center text-white lg:px-8 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6  text-2xl font-semibold ">
              Online Learning Now In Your Fingertips
            </p>
            <p className="  text-xl  ">
              FliqaIndia is a well-known creative company in the field of
              photography, videography, and graphic design.
            </p>
          </div>
          <div className=" w-full max-w-md flex-shrink-0 xl:max-w-lg">
            <div className="rounded-lg  border  border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8">
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-6"
                action="#"
              >
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our FliqaIndia
                </h5>
                <div>
                  <label
                    for="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    {...formik.getFieldProps("password")}
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        type="checkbox"
                        name="remember"
                        {...formik.getFieldProps("remember")}
                        className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-lg font-medium uppercase text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in{" "}
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <Link
                    to="/register"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </Link>
                </div>
              </form>
              <div className="divider">OR</div>
              <button className="btn-outline btn mb-4 w-full">
                <span className="pr-4">
                  <FcGoogle size={30} />
                </span>
                <span> continue with google</span>
              </button>
              <button className="btn-outline btn w-full">
                <span className="pr-4">
                  <BsFacebook size={30} />
                </span>
                <span> continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
