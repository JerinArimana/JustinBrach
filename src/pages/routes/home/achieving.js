import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import AchievingData from "./achievingData";
const Achieving = () => {
  const achiving = [
    {
      id: "b1",
      image: "/images/home/blog.png",
      title: "Blog",
    },
    {
      id: "b2",
      image: "/images/home/video.png",
      title: "Video",
    },
    {
      id: "b3",
      image: "/images/home/app.png",
      title: "App",
    },
    {
      id: "b4",
      image: "/images/home/book.png",
      title: "Book",
    },
  ];
  return (
    <>
      <section className="justin-achiving">
        <Container>
          <div className="justin-achiving--section-wrapper">
            <div className="justin-achiving--title-wrapper">
              <h5>{`Six Powerful 'Ps' for Achieving Success`}</h5>
              <p>
                {`Join me in learning how to push forward to success, embrace
                fear, stay humble and drive huge personal growth. Your journey
                to greatness begins here.`}
              </p>
            </div>
            <div className="justin-achiving--powerful-Achiev-list">
              <Swiper
                slidesPerView={4}
                spaceBetween={44}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 44,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 44,
                  },
                }}
                className="orderBook-Swiper"
              >
                {achiving.map((data) => (
                  <SwiperSlide key={data.id}>
                    <AchievingData
                      id={data.id}
                      image={data.image}
                      title={data.title}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Achieving;
