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
      );

      if (response.status === 200) {
        // toast.success("Email sent successfully");
        console.log("successfully sent");
        navigate("/");
      } else {
        console.error("Email sending failed");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };
  return (
    <div
      className="w-3/4 m-auto md:w-full md:m-0   md:h-[80vh] bg-center bg-cover bg-pattern-2 flex  flex-row justify-center items-center gap-0 mt-5 md:mt-0"
      style={{ overflow: "hidden" }}
    >
      <div className="h-full w-full bg-transparent flex items-center md:justify-end justify-center ">
        <div className="w-full md:w-3/4 h-full md:h-4/5 bg-transparent md: bg-black flex  flex-col justify-center items-center rounded-tl-lg  rounded-bl-lg p-10  border-2 border-orange-700 gap-12 md:gap-0">
          <h1 className="w-full md:w-3/4 h-full md:h-3/4  mr-auto m-auto font-extrabold text-5xl ">
            Contact <span className="text-[#FF3503] ">us</span>
          </h1>
          <form
            className="w-3/4  flex flex-col justify-center items-center m-auto gap-3 "
            onSubmit={handleSubmit}
          >
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
              className="bg-orange-700 rounded-lg mr-auto mt-10 px-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* w-full md:w-3/4 h-full md:h-3/4 */}
      <div className="h-full w-full bg-transparent md:flex items-center justify-start hidden  ">
        <div className="w-3/4 h-4/5 flex flex-col bg-white justify-center items-center rounded-tr-lg  rounded-br-lg border-2 border-orange-700">
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
