import { motion } from "framer-motion";
import {
  MdDeliveryDining,
  MdOutlineRestaurantMenu,
  MdOutlineSupportAgent,
  MdOutlineSecurity,
} from "react-icons/md";
import { Title } from "../../components/Sections";

const Services = () => {
  const services = [
    {
      icon: <MdDeliveryDining className="text-4xl text-orange-600" />,
      title: "Express Delivery",
      description:
        "Lightning-fast delivery to your doorstep. Track your order in real-time and get updates on your delivery status.",
    },
    {
      icon: <MdOutlineRestaurantMenu className="text-4xl text-orange-600" />,
      title: "Curated Menu",
      description:
        "Explore our carefully crafted menu featuring the finest dishes prepared by expert chefs using premium ingredients.",
    },
    {
      icon: <MdOutlineSupportAgent className="text-4xl text-orange-600" />,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available round the clock to assist you with any queries or concerns.",
    },
    {
      icon: <MdOutlineSecurity className="text-4xl text-orange-600" />,
      title: "Secure Payments",
      description:
        "Enjoy worry-free transactions with our secure payment system and multiple payment options.",
    },
  ];

  return (
    <div className="w-full min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Title title="Our Experience" center />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover what makes FoodHub the perfect choice for your dining
            needs. We combine exceptional service with innovative features to
            create an unforgettable food delivery experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-headingColor">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience FoodHub?
            </h2>
            <p className="mb-6">
              Join thousands of satisfied customers who trust FoodHub for their
              daily meals and special occasions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Order Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
