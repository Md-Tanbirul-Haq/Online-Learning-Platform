import React from "react";
import { Card } from "@heroui/react";
import { FaBook, FaMapMarkerAlt } from "react-icons/fa";

export function Instructor({ data }) {
  return (
    <Card className="p-5 text-center hover:shadow-lg transition">

      {/* Image */}
      <img
        src={data.image}
        alt={data.name}
        className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
      />

      {/* Name */}
      <h3 className="text-lg font-semibold">
        {data.name}
      </h3>

      {/* Course */}
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-1">
        <FaBook className="text-blue-500" />
        <span>{data.course}</span>
      </div>

      {/* Address */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-1">
        <FaMapMarkerAlt className="text-red-500" />
        <span>{data.address}</span>
      </div>

    </Card>
  );
}