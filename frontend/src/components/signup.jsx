import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submit = (data) => console.log(data);
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-semibold">Sign up</h1>
          <form onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              className="block border border-x-gray-300 w-full p-3 rounded mb-4  text-white"
              name="fullname"
              placeholder="Full Name"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-600">This field required</span>
            )}

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 text-white"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-600">This field required.</span>
            )}

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4 text-white"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">This field required.</span>
            )}

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-500 font-bold text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
        </div>

        <div className="text-white mt-6">
          Already have an account?
          <Link
            to="/"
            className=" border-b border-blue text-blue-500"
            href="../login/"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
export default Signup;
