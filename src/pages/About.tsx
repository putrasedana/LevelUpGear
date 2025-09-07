import React from "react";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Honest Reviews",
      description:
        "We provide unbiased, detailed reviews based on extensive testing and real-world usage.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Everything we do is for the gaming and streaming community. Your success is our mission.",
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description:
        "Our team consists of experienced gamers, streamers, and audio/video professionals.",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description:
        "We genuinely love gaming and streaming, and it shows in the quality of our content.",
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            About LevelUpGear
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're passionate gamers and content creators on a mission to help
            you find the perfect gear for your gaming and streaming setup. Every
            review, guide, and recommendation comes from real-world experience
            and thorough testing.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              To empower gamers and streamers with honest, detailed reviews and
              expert guidance, helping them make informed decisions about their
              gear investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full">
                      <Icon className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                LevelUpGear started in 2022 when our founder Alex was frustrated
                by the lack of honest, detailed reviews for gaming and streaming
                equipment. Too many sites were either too technical or clearly
                biased by affiliate relationships.
              </p>
              <p>
                We decided to create something different - a platform where real
                gamers and streamers could get honest opinions from people who
                actually use this gear daily. Every product we review goes
                through weeks of real-world testing in actual gaming and
                streaming scenarios.
              </p>
              <p>
                Today, we've helped over 50,000 gamers and streamers find their
                perfect setup, and we're just getting started. Our community
                continues to grow as we expand our coverage and improve our
                content.
              </p>
            </div>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gaming setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">120+</h3>
              <p className="text-gray-400">Products Reviewed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">50K+</h3>
              <p className="text-gray-400">Happy Readers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">3</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">4.9</h3>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
