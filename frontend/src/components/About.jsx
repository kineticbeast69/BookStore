import LoginModal from "./Loginmodal";
function About() {
  return (
    <>
      <div className="bg-white">
        <header className="bg-neutral text-white text-center py-4">
          <h1 className="text-4xl font-bold p-2 text-blue-500">About Us</h1>
        </header>

        <section className="text-center p-10">
          <h2 className="text-2xl font-bold">Mission And Values</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Our mission is to provide wide range of books to everyone.
          </p>
          <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">85+</h3>
              <p className="text-gray-700">Books Collections</p>
            </div>
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">25+</h3>
              <p className="text-gray-700">Series</p>
            </div>
          </div>
        </section>
      </div>
      <LoginModal />
    </>
  );
}

export default About;
