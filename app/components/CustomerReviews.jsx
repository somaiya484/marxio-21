import { Rating } from "@mui/material"; // Make sure to import the Rating component
import './instructor.css';

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Homeowner",
    feedback: "The fridge I bought from Marxio is energy-efficient and keeps everything fresh. The cooling performance is outstanding!",
    rating: 5,
  },
  {
    name: "Ayesha Akter",
    role: "Restaurant Owner",
    feedback: "I purchased a commercial stove for my restaurant, and it's been a game-changer. Heats up quickly and provides even cooking.",
    rating: 5,
  },
  {
    name: "Hasan Mahmud",
    role: "Tech Enthusiast",
    feedback: "The smart TV from Marxio is amazing! Crystal-clear display, smooth performance, and great sound quality.",
    rating: 5,
  },
  {
    name: "Ismi Jahan",
    role: "Working Mom",
    feedback: "The washing machine is perfect for my busy schedule. It's super quiet, washes clothes efficiently, and saves time!",
    rating: 5,
  },
  {
    name: "Jamil Hossain",
    role: "Bachelor",
    feedback: "The microwave is a lifesaver! Heats food evenly and quickly. It’s compact yet powerful, perfect for my small apartment.",
    rating: 5,
  },
  {
    name: "Mizanur Rahman",
    role: "Shop Owner",
    feedback: "Bought a blender for my juice shop, and it's amazing! Powerful motor and sharp blades make perfect smoothies every time.",
    rating: 5,
  },
  {
    name: "Shamima Sultana",
    role: "Housewife",
    feedback: "I love my new rice cooker from Marxio! Cooking is now hassle-free, and it keeps rice warm for hours. Highly recommended!",
    rating: 5,
  },
  {
    name: "Kamal Hossain",
    role: "Businessman",
    feedback: "I recently upgraded my home with a Marxio AC, and it’s been fantastic. Energy-efficient and cools the room super fast!",
    rating: 5,
  },
  {
    name: "Fatema Begum",
    role: "Grandmother",
    feedback: "Bought an induction cooker, and it’s so easy to use. Safe, fast, and perfect for making traditional Bangladeshi dishes!",
    rating: 5,
  },
  {
    name: "Abir Chowdhury",
    role: "Freelancer",
    feedback: "The electric kettle I bought is top-notch! Heats water instantly and is very durable. Great for my daily tea and coffee needs.",
    rating: 5,
  },
  {
    name: "Tahmina Islam",
    role: "Interior Designer",
    feedback: "I ordered a stylish ceiling fan, and it fits perfectly with my home decor. The air circulation is excellent, and it's very quiet!",
    rating: 5,
  },
  {
    name: "Salman Kabir",
    role: "University Student",
    feedback: "Got a mini fridge for my dorm room, and it's amazing! Keeps my drinks and snacks cool without taking up too much space.",
    rating: 5,
  },
  {
    name: "Shafiq Ahmed",
    role: "Hotel Manager",
    feedback: "The commercial washing machine I purchased is excellent for our hotel laundry. It handles large loads efficiently and saves water.",
    rating: 5,
  },
  {
    name: "Farzana Yasmin",
    role: "Beauty Salon Owner",
    feedback: "Ordered a hairdryer and straightener, and both are of high quality. They work perfectly for my salon. Very satisfied with Marxio!",
    rating: 5,
  },
  {
    name: "Imran Hossain",
    role: "Photographer",
    feedback: "Bought a high-resolution smart TV, and the picture quality is breathtaking. Perfect for watching my edited photos and videos.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="flex justify-center mt-20">
      <div className="w-full p-5 md:max-w-[900px] flex flex-col gap-3">
        <h1 className="text-center font-semibold text-xl">Our Customers Love</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-2 p-4 rounded-lg justify-center items-center border">

              <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-4xl text-white">{testimonial.name.charAt(0)}</span>
              </div>
              <h1 className="text-sm font-semibold">{testimonial.name}</h1>
              <Rating
                size="small"
                name="customer-rating"
                value={testimonial.rating}
                precision={0.5}
                readOnly
              />
              <p className="text-sm text-gray-500 text-center">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
