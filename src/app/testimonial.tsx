"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(2);

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
              {/* <h3
                className="mb-4 font-bold lg:max-w-xs text-blue-gray text-2xl"
              >
                Palestras, cursos e muito mais
              </h3> */}
              <div className="flex items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  src="/image/avatar1.png"
                  alt="palestras"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  } rounded-lg`}
                  onClick={() => setActive(1)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Image
                  width={48}
                  height={48}
                  src="/image/avatar2.png"
                  alt="palestra"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  } rounded-lg`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active}.png`}
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
