import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Nadine & Omar",
    role: "Wedding Clients",
    avatar: [
      "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 5,
    message:
      "Monsba made our wedding day absolutely magical. Every detail was flawless—from the decor to the timeline. Our guests are still talking about how beautiful everything was!",
  },
  {
    name: "Dina Mostafa",
    role: "Birthday Client",
    avatar: [
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=64&h=64",
    ],
    rating: 4.5,
    message:
      "I booked Monsba for my daughter's birthday and it was the best decision ever! They brought joy, creativity, and a magical atmosphere the kids loved.",
  },
  {
    name: "Ahmed Yassin",
    role: "Corporate Event Organizer",
    avatar: [
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 5,
    message:
      "The team at Monsba handled our company event with great professionalism. From lighting to music to coordination—it all ran smoothly and impressed our guests.",
  },
  {
    name: "Rania Khaled",
    role: "Engagement Client",
    avatar: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
    message:
      "Our engagement party was dreamy thanks to Monsba. The floral arrangements, cozy setup, and attention to every request made it unforgettable.",
  },
  {
    name: "Mohamed & Salma",
    role: "Anniversary Clients",
    avatar: [
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 5,
    message:
      "We wanted an intimate yet elegant anniversary celebration and Monsba absolutely delivered. Every guest complimented the ambiance and service!",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return stars;
};

function TestimonialsSlider() {
  return (
    <div className="w-1/2">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        draggable={true}
        className="testimonial-swiper rounded-xl shadow-lg lato-font "
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-4 px-8 h-[225px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {item.avatar.length === 1 ? (
                    <Image
                      src={item.avatar[0]}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover h-12 aspect-square object-top"
                    />
                  ) : (
                    <div className="flex items-center">
                      {item.avatar.map((avatar, i) => (
                        <Image
                          src={avatar}
                          key={i}
                          alt={item.name}
                          width={48}
                          height={48}
                          className={`rounded-full object-cover h-12 aspect-square object-top ${
                            i > 0 ? "ml-[-12px]" : ""
                          }`}
                        />
                      ))}
                    </div>
                  )}
                  <div className="flex flex-col gap-y-1">
                    <h3 className="font-semibold ">{item.name}</h3>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-500 text-lg">
                  {renderStars(item.rating)}
                </div>
              </div>
              <p className="text-gray-700 text-xl">“{item.message}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialsSlider;
