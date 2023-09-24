import React, { useState } from "react";
import blazpayImg from "../../assets/blazpay.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import axios from "axios";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
    subject: "",
    // newsletter: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/email/send-email",
        formData
      ); // Use Axios for the POST request

      if (response.status === 200) {
        // toast.success("Email sent successfully");
        console.log("successfully sent");
        navigate("/");
        // Reset the form or show a success message
      } else {
        console.error("Email sending failed");
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };
  return (
    <div className="w-full h-full md:h-screen bg-cover flex flex-row justify-center items-center gap-0">
      <div className="h-full w-full bg-white flex items-center justify-end">
        <div className="w-3/4 h-3/4 bg-black flex  flex-col justify-center items-center rounded-tr rounded-br">
          <h1 className="w-3/4 mr-auto m-auto font-extrabold text-5xl">
            Contact <span className="text-[#FF3503] ">us</span>
          </h1>
          <form
            className="w-3/4  flex flex-col justify-center items-center m-auto gap-3 "
            onSubmit={handleSubmit}
          >
            {/* <input
              className="w-full bg-transparent border-b placeholder-white border-white outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full bg-transparent border-b border-white focus:border-[gray-500] outline-none placeholder-white "
              type="email"
              placeholder="Email"
            />
            <textarea
              className="w-full bg-transparent border-b border-white outline-none h-full placeholder-white "
              placeholder="Message"
              rows={6}
            />
            <div className="  flex flex-row  mr-auto gap-3 ">
              <input type="checkbox" className="placeholder-white " />
              <p className="w-full">I would like to receive the newsletter.</p>
            </div>
            <button className="bg-orange-700 rounded-lg mr-auto mt-20 px-2">
              Submit
            </button> */}
            <input
              className="w-full bg-transparent border-b placeholder-white border-white outline-none"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-transparent border-b border-white focus:border-[gray-500] outline-none placeholder-white "
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-transparent border-b border-white focus:border-[gray-500] outline-none placeholder-white "
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full bg-transparent border-b border-white outline-none h-full placeholder-white "
              placeholder="Content"
              rows={6}
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
            <div className="  flex flex-row  mr-auto gap-3 ">
              <input
                type="checkbox"
                className="placeholder-white "
                // name="newsletter"
                // checked={formData.newsletter}
                // onChange={handleChange}
              />
              <p className="w-full">I would like to receive the newsletter.</p>
            </div>
            <button
              className="bg-orange-700 rounded-lg mr-auto mt-20 px-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="h-full w-full bg-black flex items-center justify-start ">
        <div className="w-3/4 h-3/4 flex flex-col bg-white justify-center items-center rounded-lg rounded-lg">
          <div className="w-3/4 h-3/4 flex flex-col justify-center items-center ">
            <h1 className="w-full text-black font-bold">
              Have questions or feedback? Feel free to reach out to us using the
              form below. We value your input and will get back to you as soon
              as possible. Your thoughts are important to us!
            </h1>
            <div className="w-full m-auto">
              <img className="invert m-auto" src={blazpayImg} alt="" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-row gap-2 items-center">
                <BiSolidPhoneCall style={{ color: "black" }} />
                <p className="text-black">+91 999999999</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <GrMail style={{ color: "black" }} />
                <p className="text-black">blazpay@gmai.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
