"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "beb.png",
  "99.png",
  "brk.png",
  "johnson.png",
  "cengage.png",
  "wipro.png",
  "dsop.png",
  "paulo.png",
  "posture.png"
];

export function Clients() {
  return (
    <section className="px-8 py-20 bg-teal-400">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-gray-200 font-bold text-4xl">
          Know How
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
