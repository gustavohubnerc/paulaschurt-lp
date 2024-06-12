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
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contato
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-pink-200">
              <Typography variant="h4" color="white" className="mb-2">
                Entre em contato pelas redes sociais
              </Typography>
              <div className="flex gap-5">
                <InstagramIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  @paulaschurt
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <LinkedInIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  @paulaschurt
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <WhatsAppIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +55 11 98551-1358
                </Typography>
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
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
