import { BsTerminal } from "react-icons/bs";
import { DiLinux } from "react-icons/di";
import { GrArchlinux } from "react-icons/gr";
import { SiJetbrains, SiVisualstudiocode } from "react-icons/si";

export default function Techstack() {
  const techStack = [
    {
      icon: DiLinux,
    },
    {
      icon: GrArchlinux,
    },
    {
      icon: SiVisualstudiocode,
    },
    {
      icon: BsTerminal,
    },
    {
      icon: SiJetbrains,
    },
  ];

  return (
    <section className="border-t border-t-zinc-700 mb-12 mx-6">
      <h3 className="mt-8 scroll-m-20 text-4xl tracking-tight mb-8 text-center">
        Tools Stack
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
