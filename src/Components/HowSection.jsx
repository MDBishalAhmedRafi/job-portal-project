import React from "react";
import { Briefcase, UserPlus, Send } from "lucide-react";
import {motion} from "framer-motion"
const steps = [
  {
    icon: <UserPlus className="w-10 h-10 text-white" />,
    title:"Create Your Profile",
    description: "Sign up and complete your profile to get personalized job matches.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-white" />,
    title: "Search Jobs",
    description: "Browse thousands of listings from top companies across industries.",
  },
  {
    icon: <Send className="w-10 h-10 text-white" />,
    title: "Apply Easily",
    description: "Submit applications with one click and track your status in real-time.",
  },
];

const HowSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-100 via-blue to-green-100 py-16 px-6 md:px-20 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-green-400 to-red-500 bg-clip-text text-transparent">How It Works ?</h2>
        <p className="text-gray-600  font-bold mb-7">Getting your dream job is just a few steps away.</p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{step.title}</h3>
              <p className="text-gray-600 font-bold">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSection;