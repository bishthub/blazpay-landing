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
        "https://api.shubhambisht.com/api/email/send-email",
        formData
      );

      if (response.status === 200) {
        // toast.success("Email sent successfully");
        console.log("successfully sent");
        setFormData({
          name: "",
          email: "",
          content: "",
          subject: "",
        });
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
      className="w-full m-auto md:w-full md:m-0   md:h-[80vh] min-h-full flex  flex-row justify-center  md:items-center gap-0  md:mt-0 "
      style={{ overflow: "hidden" }}
    >
      {/* <Navbar /> */}
      <div className="flex items-center justify-center w-full h-full bg-transparent md:justify-end ">
        <div className="flex flex-col items-center justify-center w-full h-full gap-12 p-10 bg-transparent bg-black border-0 border-orange-700 rounded-tl-lg rounded-bl-lg md:border-2 md:w-3/4 md:h-full md: md:gap-0">
          <h1 className="w-full h-full m-auto mr-auto text-xl font-extrabold md:text-3xl md:w-3/4 md:h-3/4 ">
            Contact <span className="text-[#FF3503] ">us</span>
          </h1>
          <form
            className="flex flex-col items-center justify-center w-full gap-5 m-auto md:w-3/4 "
            onSubmit={handleSubmit}
          >
            <input
              className="w-full placeholder-white bg-transparent border-b border-white outline-none "
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
              className="w-full h-full placeholder-white bg-transparent border-b border-white outline-none "
              placeholder="Content"
              rows={4}
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
            <div className="flex flex-row gap-3 mr-auto ">
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
              className="px-2 mt-10 mr-auto bg-orange-700 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* w-full md:w-3/4 h-full md:h-3/4 */}
      <div className="items-center justify-start hidden w-full h-full bg-transparent md:flex ">
        <div className="flex flex-col items-center justify-center w-3/4 h-full bg-white border-2 border-orange-700 rounded-tr-lg rounded-br-lg">
          <div className="flex flex-col items-center justify-center w-3/4 h-3/4 ">
            <h1 className="w-full font-bold text-black">
              Have questions or feedback? Feel free to reach out to us using the
              form below. We value your input and will get back to you as soon
              as possible. Your thoughts are important to us!
            </h1>
            <div className="w-full m-auto">
              <img className="m-auto invert" src={blazpayImg} alt="" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-row items-center gap-2">
                <BiSolidPhoneCall style={{ color: "black" }} />
                <p className="text-black">+91 999999999</p>
              </div>
              <div className="flex flex-row items-center gap-2">
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
