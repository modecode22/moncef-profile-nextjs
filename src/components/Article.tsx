import Image from "next/image";
import Animation from "./Animation";

interface Props {
  children: React.ReactNode;
  img: any;
  url: string;
  title: string;
  description:string;
}

const Article = ({ children, img, title, url, description }: Props) => {
  return (
    <article className="bg-pr1/30 group p-5 select-none  flex flex-col justify-center items-center text-sm   rounded-lg    backdrop-blur-md shadow-lg shadow-pr1/10 ">
      <Animation />

      <section className="h-full bg-white/80 dark:bg-pr5/80  p-5 gap-5 w-full rounded-lg  shadow-lg shadow-pr2/20  row-span-1 flex flex-col justify-between">
        <a
          target="_blank"
          title={`${title} site`}
          href={url}
          className=" relative aspect-video rounded-lg w-full   row-span-1"
        >
          <Image
            className="aspect-video shadow-lg   h-full w-full rounded-lg  hover:-translate-y-[0.1rem] grayscale-[0.5] hover:animate-none hover:brightness-110 active:brightness-125 random hover:grayscale-0 scr duration-75  hover:shadow-lg dark:hover:shadow-pr5 cursor-pointer transition-all ease-in hover:shadow-pr2"
            src={img}
            alt="project image"
            fill
          />
        </a>
        <main>
          <h1 className="font-bold ">{title}</h1>
          <h3>{description}</h3>
        </main>
        <section className="grid grid-cols-2">
          <div className="flex flex-wrap gap-1 md:text-xs">{children}</div>
          <a
            target="_blank"
            title={`${title} site`}
            href={url}
            className="hover:underline self-end justify-self-end   text-lg  hover:text-pr2 active:text-pr1 dark:active:text-pr1 duration-100 transition-all dark:hover:text-pr2 dark:text-pr text-pr5 cursor-pointer"
          >
            visit now
          </a>
        </section>
      </section>
    </article>
  );
};

export default Article