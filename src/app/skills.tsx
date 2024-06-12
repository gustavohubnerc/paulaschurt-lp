"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import Image from "next/image";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Palestras",
    children:
      "Uma abordagem eficaz para fornecer informções e abordar necessidades específicas dos colaboradores das empresas. Têm o objetivo preventivoe abordam questões tais como Comunicação e relacionamento, inteligência emocional, empoderamento feminino, gestão de conflitos e stress, finanças comportamentais, ansiedade, depressão, etc.",
  },
  {
    icon: FingerPrintIcon,
    title: "Cursos à partir de 4 horas de duração",
    children:
      "Atentos as transformações do mundo e a necessidade de cuidados com os colaboradores, criamos soluções para atender áreas fundamentais da vida das pessoas e corporações: saúde mental, emocional, financeira, além de comunicação e relacionamento.",
  },
  {
    icon: SwatchIcon,
    title: "Mentorias",
    children:
      "A mentoria é um processo estratégico que visa potencializar a produtividade e os resultados positivos da empresa, por meio do desenvolvimento das competências individuais de cada colaborador. Ao proporcionar um ambiente propício para o crescimento pessoal e profisional, a mentoria estabelece novas metas e objetivos que impulsionam o progresso da organização. No contexto organizacional, o mentor desempenha um papel fundamental ao influenciar positivamente o crescimento e desenvolvimento do mentorado, oferecendo suporte contínuo para o aprimoramento de suas habilidades profissionais. A aplicação da mentoria é flexível e adaptável às necessidades específicas de cada empresa, abrangendo uma variedade de temas discutidos durante as palestras. Todo o planejamento da mentoria é elaborado de forma personalizada, garantindo uma abordagem individualizada e eficaz para cada colaborador.",	
  },
  {
    icon: HashtagIcon,
    title: "Temáticas",
    children:
      "Saúde mental: ansiedade, depressão, burnout e prevenção ao suicídio. Finanças comportamentais - o impacto das emoções na tomada de decisão econômica e educação financeira. Comunicação e relacionamento. Inteligência emocional. Empoderamento feminino. Gestão de conflitos e stress. Algumas das competências desenvolvidas no processo de mentoria: Escuta ativa, Desenvolvimento Pessoal, Liderança, Capacidade de solução de problemas, Autoconfiança, Pensamento Analítico, Geração de Feedback, Comunicação Assertiva, Colaboração, Ética, Bons relacionamentos interpessoais.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <h1 color="blue-gray" className="m-8 font-bold text-6xl">
          Sobre mim
        </h1>
        <h3
          className="mx-auto w-full !text-gray-500 lg:w-10/12 text-xl"
        >
          Por 5 anos foi professora na Pós-Graduação em Educação Financeira pelo Instituto DSOP, na disciplina de psicologia econômica;
          além de ter atendido e ministrado diversos cursos com o mesmo tema para centenas de pessoas.<br/>
          Especializada também em Hipnose Clínica, Reprogramação Mental e Emocional, Regressão de Memória, Ressignificação de traumas, medos e fobias,
          Meditação Mindfulness, Programação Neurolinguística (PNL), Psicologia Positiva e Neurociência, tudo isso propiciou ter uma visão ampla em 
          relação às pessoas e suas dificuldades, trazendo soluções práticas e inovadoras a antigas questões.    
          
        </h3>
      </div>
      <div className="container mx-auto grid">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
      <div className="container mx-auto mt-20 flex justify-center">
        {/* <Image
          alt="skills"
          width={768}
          height={768}
          src="/image/palestras.png"
          className="flex justify-center"
        /> */}
        <Image
          alt='graphics'
          width={1068}
          height={868}
          src='/image/graficos.png'
          className="flex justify-center"
        />
      </div>
    </section>
  );
}

export default Skills;
