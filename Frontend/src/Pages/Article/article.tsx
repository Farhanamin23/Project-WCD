import React, { useState } from "react";
import CardProgram from "./components/CardProgram/CardProgram";
import { programShowcase } from "./dummy";


export interface iProgramShowcase {
  title: string;
  description: string;
  src: string;
}

const Donate: React.FC = () => {
  const [programs, setPrograms] = useState<iProgramShowcase[]>(programShowcase);
  return (
    <main className='flex-grow px-3 pb-10 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")] bg-cover'>
      <div className="pt-14  max-w-5xl lg:pt-[75px] mx-auto ">
        {programs?.map((it) => {
          return (
            <CardProgram
              title={it.title}
              description={it.description}
              imageSrc={it.src}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Donate;
