import { motion } from "framer-motion";
import {
  MdOutlineRestaurantMenu,
  MdOutlineDeliveryDining,
  MdOutlineGroups,
} from "react-icons/md";
import { Title } from "../../components/Sections";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "FoodHub was born from a simple idea: to make great food accessible to everyone, everywhere.",
    },
    {
      year: "2021",
      title: "Expanding Horizons",
      description:
        "We expanded our reach to multiple cities, bringing our unique dining experience to more customers.",
    },
    {
      year: "2022",
      title: "Innovation & Growth",
      description:
        "Launched our mobile app and introduced real-time order tracking for an enhanced customer experience.",
    },
    {
      year: "2023",
      title: "Community Impact",
      description:
        "Started our community initiatives, supporting local farmers and sustainable food practices.",
    },
  ];

  const values = [
    {
      icon: <MdOutlineRestaurantMenu className="text-4xl text-orange-600" />,
      title: "Quality First",
      description:
        "We never compromise on the quality of our ingredients or the taste of our food.",
    },
    {
      icon: <MdOutlineDeliveryDining className="text-4xl text-orange-600" />,
      title: "Reliable Service",
      description:
        "Our commitment to timely delivery and excellent service sets us apart.",
    },
    {
      icon: <MdOutlineGroups className="text-4xl text-orange-600" />,
      title: "Community Focus",
      description:
        "We believe in building strong relationships with our customers and community.",
    },
  ];

  return (
    <div className="w-full min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Title title="Our Story" center />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to becoming a beloved food delivery platform,
            our journey has been driven by passion, innovation, and a commitment
            to excellence.
          </p>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              To revolutionize food delivery by combining exceptional cuisine
              with innovative technology, creating memorable dining experiences
              for our customers.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-8 flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <span className="text-orange-600 font-bold">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-600"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-600 mb-6">
            Be part of our story and experience the future of food delivery.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300"
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
