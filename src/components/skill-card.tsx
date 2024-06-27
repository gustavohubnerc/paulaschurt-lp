import { Card, CardBody, Typography } from "@material-tailwind/react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div className="mb-8 bg-gray-50 p-4 rounded-xl">
      <div className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h5 className="mb-2 text-xl font-bold">
          {title}
        </h5>
        <h6 className="px-8 font-normal !text-gray-500">
          {children}
        </h6>
        <div className="flex justify-center mt-6 mb-4">
          <a href="https://wa.me/+5511985511358" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-14 w-14 bg-green-500 p-2 rounded-full" style={{ color: 'white', filter: 'drop-shadow(0 0 2px green)' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;