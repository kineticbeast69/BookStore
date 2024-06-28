import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function LoginModal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const show = (data) => console.log(data);

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-2xl text-center p-2">Login</h3>
        <form method="dialog" onSubmit={handleSubmit(show)}>
          {/* if there is a button in form, it will close the modal */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-red-600 text-sm">This field required</span>
            )}
          </label>
          {/* password section is over herer */}
          <label className="input input-bordered flex items-center gap-2 my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-red-600 text-sm">This field required</span>
            )}
          </label>
          <button
            type="submit"
            className="py-2 px-4 my-1 text-xl border border-blue-500 hover:bg-blue-500 text-white rounded-md"
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <p className="text-white">
          Don't have an account?{" "}
          <span className="font-semibold text-blue-600">
            <Link to="/signup">Sign-Up</Link>
          </span>
        </p>
      </div>
    </dialog>
  );
}

export default LoginModal;
