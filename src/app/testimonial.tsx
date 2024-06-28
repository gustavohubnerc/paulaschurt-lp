"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(1);
  const images = [
    { id: 1, src: "/image/palestra1.png", alt: "palestras" },
    { id: 2, src: "/image/palestra2.png", alt: "palestras" },
    { id: 3, src: "/image/palestra3.png", alt: "palestras" },
    { id: 4, src: "/image/palestra4.png", alt: "palestras" },
    { id: 5, src: "/image/palestra5.png", alt: "palestras" },
  ];

  return (
    <section
      className="py-12 px-8 lg:py-24 bg-gray-500"
      style={{
        backgroundImage: "url('/backgrounds/bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-screen-lg mx-auto">
        <div className="py-8 lg:flex-row">
          <div className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <div className="flex items-center gap-4">
                {images.map((image) => (
                  <React.Fragment key={image.id}>
                    <Image
                      width={48}
                      height={48}
                      src={image.src}
                      alt={image.alt}
                      className={`cursor-pointer ${
                        active !== image.id ? "opacity-50" : "opacity-100"
                      } rounded-lg`}
                      onClick={() => setActive(image.id)}
                    />
                    {image.id < images.length && (
                      <div className="w-[1px] h-[36px] bg-blue-gray-100"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/palestra${active}.png`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;