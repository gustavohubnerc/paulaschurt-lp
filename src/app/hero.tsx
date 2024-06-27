"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header
      className="bg-white p-12"
      style={{
        backgroundImage: "url('/backgrounds/bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid h-full min-h-[50vh] w-full grid-cols-1 items-center lg:grid-cols-2 mt-4">
        <div className="row-start-2 lg:row-auto mt-6">
          <h1
            color="blue-gray"
            className="mb-2 text-5xl text-teal-500 font-extrabold"
          >
            Paula Schurt
          </h1>
          <h3
            className="!text-gray-500 text-lg"
          >
            {/* Palestrante Internacional <br/>
            Mentora, Escritora, Treinadora <br/>
            Psicóloga especialista em finanças comportamentais <br/>
            Especialista em Prosperidade e Mentalidade <br/> */}
            Há mais de 20 anos prosperando pessoas
          </h3>
          {/* <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button>
            </div>
          </div> */}
          {/* <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> */}
        </div>
        <Image
          width={1024}
          height={824}
          alt="team work"
          src="/image/foto-home.jpg"
          className="rounded-xl"
          style={{ objectPosition: 'top' }}
        />
      </div>
    </header>
  );
}

export default Hero;
