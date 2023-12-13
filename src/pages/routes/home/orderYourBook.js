import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import OrderYourBookData from "./orderYourBookData";
const OrderYourBook = () => {
  const orderBook = [
    {
      id: "b1",
      image: "/images/home/image 16691.png",
    },
    {
      id: "b2",
      image: "/images/home/image 16687.png",
    },
    {
      id: "b3",
      image: "/images/home/image 16688.png",
    },
    {
      id: "b4",
      image: "/images/home/image 16689.png",
    },
    {
      id: "b5",
      image: "/images/home/image 16690.png",
    },
    {
      id: "b6",
      image: "/images/home/image 16692.png",
    },
  ];
  return (
    <>
      <section className="justin-order-your-book">
        <Container>
          <div className="justin-order-your-book--section-wrapper">
            <div className="justin-order-your-book--header-title">
              <h2>
                <span>Order Your Book </span>
                {`'You Are Not Your Past'`}
              </h2>
            </div>
            <div className="justin-order-your-book--book-wrapper">
              <Swiper
                slidesPerView={6}
                spaceBetween={18}
                freeMode={true}
                pagination={false}
                modules={[FreeMode, Pagination, Navigation]}
                navigation={false}
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
                    spaceBetween: 18,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 18,
                  },
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 18,
                  },
                }}
                className="orderBook-Swiper"
              >
                {orderBook.map((data) => (
                  <SwiperSlide key={data.id}>
                    <OrderYourBookData id={data.id} image={data.image} />
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

export default OrderYourBook;
