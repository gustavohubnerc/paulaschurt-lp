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
    title: "Finanças comportamentais e bem-estar financeiro",
    children:
      "As finanças comportamentais revelam um aspecto crucial da nossa vida financeira: nossas decisões nem sempre são racionais. Somos influenciados por emoções, crenças e padrões de comportamento que podem comprometer nosso bem-estar financeiro. Entender como esses fatores psicológicos afetam nossas escolhas pode ser a chave para uma vida financeira mais saudável. Imagine saber como as emoções influenciam suas decisões financeiras. Isso pode ajudá-lo a manter a calma em momentos de crise e a não tomar decisões precipitadas. O autocontrole emocional é fundamental para evitar prejuízos e prosperar. Com o conhecimento das finanças comportamentais, você pode desenvolver estratégias para contornar as armadilhas mentais.",
  },
  {
    icon: FingerPrintIcon,
    title: "Os desafios da nova liderança: Inspirar e Conectar",
    children:
      "Liderança não é apenas sobre gerenciar uma equipe, mas sim inspirar, motivar e guiar as pessoas rumo a objetivos comuns. Um líder eficaz sabe como se conectar com sua equipe, sabe comunicar sua visão, resolver conflitos e tomar decisões estratégicas que beneficiam toda a organização. Como seria possuir as habilidades para influenciar positivamente sua equipe, aumentar a produtividade e fomentar um ambiente de trabalho colaborativo e inovador. O treinamento de liderança oferece ferramentas práticas para desenvolver essas competências, ajudando os líderes a se destacarem em qualquer cenário profissional.",
  },
  {
    icon: SwatchIcon,
    title: "Comunicação Assertiva Verbal e Não Verbal: O Poder de uma Mensagem Clara",
    children:
      "A comunicação assertiva, verbal e não verbal, além da escuta ativa, são essenciais para construir relacionamentos sólidos e eficazes. Ser assertivo verbalmente significa expressar suas ideias e sentimentos de maneira clara, direta e respeitosa. No entanto, a comunicação não verbal - através de gestos, expressões faciais e postura - reforça e complementa suas palavras, transmitindo sinceridade e confiança. Imagine estar em uma reunião onde suas palavras são ouvidas e compreendidas perfeitamente, e sua linguagem corporal transmite segurança e abertura. Essa combinação poderosa evita mal-entendidos e conflitos, facilitando a cooperação e o entendimento mútuo. A assertividade verbal permite que você articule seus pontos de vista claramente, enquanto a assertividade não verbal demonstra congruência e autenticidade, solidificando a confiança dos outros em você.",	
  },
  {
    icon: HashtagIcon,
    title: "Inteligência Emocional e Relacional: O Pilar do Sucesso Corporativo",
    children:
      "No ambiente corporativo competitivo de hoje, a inteligência emocional e relacional não é apenas desejável, é essencial. A habilidade de reconhecer, entender e gerenciar suas próprias emoções, bem como as emoções dos outros, cria um ambiente de trabalho harmonioso e altamente produtivo. Funcionários com alta inteligência emocional são mais resilientes, adaptáveis e hábeis na resolução de conflitos, resultando em equipes mais coesas e motivadas. A inteligência emocional não só melhora as relações interpessoais, mas também aumenta a satisfação e o engajamento no trabalho, reduzindo o turnover, criando um ambiente de trabalho mais positivo. A inteligência relacional, por outro lado, é a capacidade de construir e manter relacionamentos saudáveis e produtivos. Em um mundo onde o trabalho em equipe é fundamental, essa habilidade permite a criação de redes de apoio robustas dentro da empresa, facilita a colaboração e promove a comunicação eficaz. ",
  },
  {
    icon: EyeIcon,
    title: "Priorizando e gerenciando a saúde mental",
    children: 
      "Investir na nossa saúde mental não é apenas uma questão de bem-estar pessoal, mas também de produtividade e sucesso no trabalho. Empresas que promovem um ambiente de trabalho que valoriza o equilíbrio entre vida pessoal e profissional, oferecendo recursos para gerenciar o estresse e apoiar a saúde mental de seus funcionários, colhem os benefícios de equipes mais engajadas, criativas e resilientes. Principalmente nesse momento do mundo, onde a ansiedade, a depressão e o burnout estão em níveis altíssimos, sendo uma das maiores razões para o afastamento do trabalho. Investir em saúde mental é investir no principal ativo da sua empresa: as pessoas."
  }
];

export function Skills() {
  return (
    <section 
      className="px-8 py-6"
      style={{
        backgroundImage: "url('/backgrounds/bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto mb-20 text-center">
        <h2 color="blue-gray" className="m-8 font-bold text-5xl">
          Sobre mim
        </h2>
        <h3
          className="mx-auto w-full !text-gray-500 lg:w-10/12 text-xl"
        >
          É psicóloga, especializada em psicologia econômica e prosperidade, com duas certificações em Personal & Professional Coaching, Business Coaching e Empresária. Atuou por anos com Educação Financeira e Terapia Financeira, no estudo de como as emoções e o nosso modelo mental interferem em nossa tomada de decisão em relação ao dinheiro e prosperidade.

          Especializada também em Hipnose Clínica, Reprogramação Mental e Emocional, Regressão de Memória, Ressignificação de traumas, medos e fobias,
          Meditação Mindfulness, Programação Neurolinguística (PNL), Psicologia Positiva e Neurociência, tudo isso propiciou ter uma visão ampla em 
          relação às pessoas e suas dificuldades, trazendo soluções práticas e inovadoras a antigas questões.<br/>
          Já atendeu e treinou mais de 5 mil pessoas e hoje seu trabalho é voltado as empresas, na capacitação de líderes, finanças comportamentais, comunicação, inteligência emocional e saúde mental.

          
        </h3>
      </div>
      <div className="container mx-auto grid">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
        <h4 className="text-center text-xl font-bold mt-20 mb-10 text-teal-500">
          Conteúdo personalizado para sua empresa, sempre de acordo com a cultura, necessidade e momento de cada equipe!
        </h4>
      </div>
      <div className="container mx-auto mt-20">
        <Image
          alt="skills"
          width={1068}
          height={868}
          src="/image/grafico1.png"
          className="flex justify-center"
        />
        <Image
          alt='graphics'
          width={1068}
          height={868}
          src='/image/grafico2.png'
          className="flex justify-center mt-8"
        />
      </div>
    </section>
  );
}

export default Skills;
