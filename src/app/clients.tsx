"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "beb.png",
  "99.png",
  "brk123.png",
  "johnson.png",
  "cengage.png",
  "wipro-removebg-preview.png",
  "dsop.png",
  "paulo.png",
  "posture.png"
];

export function Clients() {
  return (
    <section className="px-8 py-28 bg-pink-200">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="white" className="mb-8">
          Know How
        </Typography>
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
