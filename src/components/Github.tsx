import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <section className="border-t border-t-zinc-700 mb-12">
      <h3 className="mt-8 scroll-m-20 text-4xl tracking-tight mb-8 text-center">
        Day I Code
      </h3>
      <div className="flex flex-col justify-center items-center gap-8">
        <GitHubCalendar
          username="kyzsuukii"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={{
            dark: ["hsl(0, 0%, 22%)", "hsl(333, 71%, 51%)"],
          }}
        />
      </div>
    </section>
  );
}
