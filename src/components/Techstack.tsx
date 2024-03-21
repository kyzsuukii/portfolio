import { DiCss3, DiGit, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiDocker, SiNextdotjs, SiPhp, SiTailwindcss } from "react-icons/si";

export default function Techstack() {
  const techStack = [
    {
      icon: DiHtml5,
    },
    {
      icon: DiCss3,
    },
    {
      icon: DiJavascript1,
    },
    {
      icon: DiReact,
    },
    {
      icon: SiNextdotjs,
    },
    {
      icon: DiGit,
    },
    {
      icon: FaNodeJs,
    },
    {
      icon: SiTailwindcss,
    },
    {
      icon: SiPhp,
    },
    {
      icon: SiDocker,
    },
  ];

  return (
    <section className="border-t border-t-zinc-700 mb-12 mx-6">
      <h3 className="mt-8 scroll-m-20 text-4xl tracking-tight mb-8 text-center">
        Tech Stack
      </h3>
      <div className="flex flex-wrap justify-center space-x-6 gap-4 text-zinc-300">
        {techStack.map((item, id) => (
          <div
            key={id}
            className="p-6 hover:scale-110 hover:border-pink-600 transition-transform duration-300 border-2 border-zinc-700 rounded-md shadow"
          >
            <item.icon className="text-5xl lg:text-7xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
