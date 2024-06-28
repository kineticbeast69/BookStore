import { useForm } from "react-hook-form";
import LoginModal from "./Loginmodal";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => console.log(data);
  return (
    <>
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="text-center py-2 text-5xl font-bold text-blue-500 ">
          Contact Us
        </div>
        <div className="p-6 sm:rounded-md">
          <form
            className="border border-slate-500 rounded-md p-6"
            onSubmit={handleSubmit(submit)}
          >
            <label className="block mb-6">
              <span className="text-white text-2xl py-3">Your name</span>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                className="
            block
            w-full
                        bg-white
            text-black
            p-1
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Joe Bloggs"
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field required.
                </span>
              )}
            </label>
            <label className="block mb-6">
              <span className="text-white text-2xl py-3">Email address</span>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                className="
            block
            w-full
            mt-1
            bg-white
            text-black
            p-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field required.
                </span>
              )}
            </label>
            <label className="block mb-6">
              <span className="text-white text-2xl py-3">Message</span>
              <textarea
                {...register("message", { required: true })}
                name="message"
                className="
            block
                        bg-white
            text-black
            p-1
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="Tell us what you're thinking about..."
              ></textarea>
              {errors.message && (
                <span className="text-sm text-red-500">
                  Please write the message.
                </span>
              )}
            </label>
            <div className="mb-6">
              <button
                type="submit"
                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
            w-full
          "
              >
                Contact Us
              </button>
            </div>
            <div>
              <div className="mt-2 text-gray-700 text-right text-xs"></div>
            </div>
          </form>
        </div>
      </div>
      <LoginModal />
    </>
  );
}

export default Contact;
