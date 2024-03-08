
import contactImage from "./../../assets/aboutImage.avif";

const Contact = () => {
  return (
    <div id="contact" className="relative">
      <img src={contactImage} alt="" className="w-full h-auto" />
      <div id="overlay" className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div id="contact-content" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-800">
        <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
        <p className="mb-6">
          Need assistance or have a question? Contact our friendly team for
          quick and helpful support.
        </p>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Eg: Talleen Kaur"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="xyz@gmail.com"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Tell Us More
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write Here..."
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
