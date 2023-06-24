import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import StudentSlide from "./StudentSlide";
import { story } from "../data";
// import  { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchStoryData } from "../../slices/storySlice";

const StudentStories = () => {
  // const { data } = useSelector((state) => state.story);
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(fetchStoryData());
  // }, [dispatch]);
  return (
    <div className="px-4 bg-white sm:px-2 py-12 lg:px-12 xl:px-48">
      <p className="capitalize text-center text-[#2c4fa5] font-semibold text-sm sm:text-base">
        STUDENT STORIES
      </p>
      <h1 className="text-center text-2xl sm:text-4xl font-bold py-4">
        What our Student stories
      </h1>
      <p className="text-center text-base sm:text-lg text-slate-500 mb-12 mx-12">
        A student story is an engaging article integrating testimonial quotes
        from a happy client or customer praising the work completed together.
      </p>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Keyboard]}
      >
        {story?.story?.map((comment) => (
          <SwiperSlide key={comment._id}>
            <StudentSlide comment={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentStories;
