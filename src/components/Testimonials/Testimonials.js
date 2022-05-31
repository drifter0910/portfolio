import React, { useContext } from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { themeContext } from "../../Context";

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, repellendus molestias delectus ducimus, placeat ad fuga adipisci voluptate omnis voluptas asperiores a consequuntur quaerat pariatur est aliquid fugiat, sed perspiciatis",
    },
    {
      img: profilePic2,
      review: "Lorem ipsum dolor sit",
    },
    {
      img: profilePic3,
      review: "Lorem ipsum dolor sit",
    },
    {
      img: profilePic4,
      review: "Lorem ipsum dolor sit",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional work </span>
        <span>from me ...</span>
        <div
          className="blur t-blur1"
          style={{ background: "mediumslateblue" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* SLider */}
      <Swiper
        modules={[Pagination]}
        slidedsPerview={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
