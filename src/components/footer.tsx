import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-10 bg-gray-200">
      <div className="container mx-auto flex justify-center">
        <Image 
          alt="background"
          width={150}
          height={50}
          src="/backgrounds/bg3.png"
        />
        <div className="flex flex-wrap items-center justify-center gap-y-4 border-t border-black py-6 md:justify-between">
          <h6 className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Todos os direitos reservados.
          </h6>
          {/* <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
            <Button color="gray">subscribe</Button>
          </ul> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
