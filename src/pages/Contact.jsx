import React from "react";

function Contact() {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    
  }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            autoComplete="false"
            placeholder="Enter Your FullName"
            required
            name="username"
          />
          <input
            type="email"
            className="form-control"
            name="email"
            required
            placeholder="Enter Your Email"
            autoComplete="false"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter Your Message"
            name="message"
            required
            autoComplete="false"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
