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
import YoutubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import Image from "next/image";

export function ContactForm() {
  return (
    <section
     className="px-6 py-16"
     style={{
       backgroundImage: "url('/backgrounds/bg2.png')",
       backgroundSize: "cover",
       backgroundPosition: "center",
     }}
    >
      <div className="container mx-auto mb-10 text-center">
        <h1 className="mb-4 text-blue-gray font-bold text-6xl">
          Contato
        </h1>
      </div>
      <div>
        <div className="container mx-auto border border-gray/50">
          <div className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-teal-400">
              <h1 className="mb-4 font-bold text-3xl text-gray-200">
                Entre em contato pelas redes sociais
              </h1>
              <div className="flex gap-5">
                <InstagramIcon className="h-6 w-6 text-gray-200" />
                <h6 className="mb-4 text-gray-200 font=bold text-xl">
                  @paulaschurt
                </h6>
              </div>
              <div className="flex my-2 gap-5">
                <LinkedInIcon className="h-6 w-6 text-gray-200" />
                <h6 className="mb-4 text-gray-200 font=bold text-xl">
                  @paulaschurt
                </h6>
              </div>
              <div className="flex my-2 gap-5">
                <WhatsAppIcon className="h-6 w-6 text-gray-200" />
                <h6 className="mb-4 text-gray-200 font=bold text-xl">
                  +55 11 98551-1358
                </h6>
              </div>
              <div className="flex my-2 gap-5">
                <YoutubeIcon className="h-6 w-6 text-gray-200" />
                <h6 className="mb-4 text-gray-200 font=bold text-xl">
                  youtube.com/@paulaschurt
                </h6>
              </div>
              <div className="flex mb-10 gap-5">
                <EmailIcon className="h-6 w-6 text-gray-200" />
                <h6 className="mb-4 text-gray-200 font=bold text-xl">
                  paulaschurt@gmail.com
                </h6>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <Image
                alt='contact'
                width={568}
                height={568}
                className="w-full"
                src='/image/paula-contact.png'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
