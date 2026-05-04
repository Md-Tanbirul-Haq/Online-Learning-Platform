import React from "react";
import { Card } from "@heroui/react";
import { FaBookOpen } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const About_Learning = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-center text-4xl font-bold">Learning Techniques</h1>
      

    
      <div className="grid md:grid-cols-2 gap-6">

       
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <FaBookOpen className="text-blue-500 text-xl" />
            <h3 className="text-xl font-semibold">
              Study Techniques
            </h3>
          </div>

          <p className="text-gray-500 text-sm">
            Use active recall, spaced repetition, and practice projects regularly
            to improve your learning efficiency.
          </p>
        </Card>

     
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <MdAccessTime className="text-green-500 text-xl" />
            <h3 className="text-xl font-semibold">
              Time Management Tips
            </h3>
          </div>

          <p className="text-gray-500 text-sm">
            Break your study sessions into focused intervals, set daily goals,
            and stay consistent to improve productivity.
          </p>
        </Card>

      </div>
    </div>
  );
};

export default About_Learning;