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
import { useState } from "react";

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Email: ${email}, Telefone: ${phone}, Empresa: ${company}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/+5511985511358?text=${encodedMessage}`;
  };

  return (
    <section
     className="px-6 py-16 bg-gray-500 border-none"
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
        <div className="container mx-auto">
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
                  contatopaulaschurt@gmail.com
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
      <div className="container mx-auto mt-10">
        <form className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow" onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin=""
            />
          </div>
          {/* Phone input */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Digite seu telefone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setPhone(e.target.value)}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin=""
            />
          </div>
          {/* Company input */}
          <div className="mb-6">
            <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Empresa</label>
            <Input
              type="text"
              id="company"
              name="company" 
              placeholder="Nome da sua empresa" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setCompany(e.target.value)}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin=""
            />
          </div>
          {/* Submit button */}
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              className="bg-teal-400 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
