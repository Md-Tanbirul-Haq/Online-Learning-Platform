

import { Button, Card } from "@heroui/react";

export function Course_data({ data }) {
  return (
    <Card className="w-full overflow-hidden shadow-lg rounded-lg">

      {/* Image TOP */}
      <div className="h-[180px] w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4">

        {/* Title */}
        <h2 className="text-lg font-bold">
          {data.title}
        </h2>

        {/* Instructor */}
        <p className="text-sm text-gray-500">
          Instructor: {data.instructor}
        </p>

        {/* Rating */}
        <p className="text-sm text-yellow-500">
          ⭐ Rating: {data.rating}
        </p>

        {/* Bottom section */}
        <div className="mt-3 flex items-center justify-between">

          <span className="text-xs text-gray-400">
            {data.level}
          </span>

          <Button size="sm">
            View Details
          </Button>

        </div>

      </div>
    </Card>
  );
}