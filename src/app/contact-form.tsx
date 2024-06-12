"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "next/image";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="mb-4 text-blue-gray font-bold text-6xl">
          Contato
        </h1>
      </div>
      <div>
        <div className="container mx-auto border border-gray/50">
          <div className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-pink-200">
              <h1 className="mb-4 font-bold text-3xl text-white">
                Entre em contato pelas redes sociais
              </h1>
              <div className="flex gap-5">
                <InstagramIcon className="h-6 w-6 text-white" />
                <h6 className="mb-4 text-white font=bold text-xl">
                  @paulaschurt
                </h6>
              </div>
              <div className="flex my-2 gap-5">
                <LinkedInIcon className="h-6 w-6 text-white" />
                <h6 className="mb-4 text-white font=bold text-xl">
                  @paulaschurt
                </h6>
              </div>
              <div className="flex mb-10 gap-5">
                <WhatsAppIcon className="h-6 w-6 text-white" />
                <h6 className="mb-4 text-white font=bold text-xl">
                  +55 11 98551-1358
                </h6>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <Image
                alt='contact'
                width={568}
                height={568}
                className="w-full"
                src='/image/contato.png'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
