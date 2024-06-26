import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="bg-white max-h-dvh font-sans text-gray-900">
      <div className=" ">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
            <h1 className="mb-4 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">
              Sign up
            </h1>
            <div className="text-lg sm:text-xl">
              <div className="">
                <p className="mb-4">
                  Let's do this! Start your free trial by filling in our simple
                  form below. You will be hearing from us soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 mx-auto w-full pb-3 border border-black sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
        <form className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
          <div className="mb-4">
            <label className="mb-2 block text-xl font-bold" htmlFor="email">
              E-mail
            </label>
            <input
              className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none bg-white text-black ring-blue-500 focus:ring"
              id="email"
              type="email"
              placeholder="email"
              required=""
            />
            <span className="my-2 block"></span>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-xl font-bold" htmlFor="phone">
              Phone
            </label>
            <input
              className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 bg-white text-black leading-tight outline-none ring-blue-500 focus:ring"
              id="phone"
              type="phone"
              placeholder="Phone"
              required=""
            />
            <span className="my-2 block"></span>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-xl font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 bg-white text-black leading-tight outline-none ring-blue-500 focus:ring"
              id="password"
              type="password"
              placeholder="******************"
              required=""
            />
          </div>

          <div className="flex items-center">
            <div className="flex-1"></div>
            <button
              className="btn cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white"
              type="submit"
            >
              Create account
            </button>
            <div className="para px-2">
              Have an account?{" "}
              <Link to="/" className="text-blue-500 text-xl">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
