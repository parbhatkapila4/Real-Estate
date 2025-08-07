import React from "react";

// whole statement is imported from web3 forms
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba3286ff-e212-4ef1-91cf-67388d6f8c75");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult();
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult("");
    }
  };
  return (
    <div
      className="text-center px-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-6 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Let’s start the journey to your perfect home. Contact us for a tailored
        experience.
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto text-gray-800 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name :)
            <input
              className="w-full border border-gray-400 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Please Enter Your Name"
              required
            ></input>
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email :)
            <input
              className="w-full border border-gray-400 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Please Enter Your Email"
              required
            ></input>
          </div>
        </div>
        <div className="mt-4 text-left">
          Correspondence :
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Correspondence"
            placeholder="Any Suggestions or query. Feel free to drop!"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-8 mb-10 mt-4 rounded-2xl hover:bg-black">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
