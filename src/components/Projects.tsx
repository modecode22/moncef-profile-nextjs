import Article from "./Article"
import Badge from "./Badge";
import fakegpt from "../../public/fakegpt.webp";
import dushdo from "../../public/dushdo.webp";
import pr1 from "../../public/pr1.webp";
import ree7 from "../../public/ree7.webp";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center items-center flex-wrap  gap-10 my-10"
    >
      <h1 className="text-center text-4xl  ">
        My projects 🚀 are an adventure waiting to happen 🎢, buckle up and
        enjoy the ride 🤠
      </h1>
      <div className="w-full gap-5 grid grid-cols-1  md:grid-cols-2 ">
        <Article
          key={1}
          url="https://chatgpt-arabic.vercel.app"
          title="Fake GPT"
          img={fakegpt}
          description="ChatGPT clone / Fake ChatGPT App ..."
        >
          <Badge>Next js</Badge>
          <Badge>Typescript</Badge>
          <Badge>TailwindCss</Badge>
          <Badge>firebase</Badge>
          <Badge>SWR</Badge>
          <Badge>OpenAI API</Badge>
          <Badge>Rest API</Badge>
          <Badge>Next auth</Badge>
        </Article>

        <Article
          key={2}
          url="https://www.dushdo.com"
          title="dushdo"
          img={dushdo}
          description="A perfect Todo/Pomodoro Desktop App Built with Tauri"
        >
          <Badge>Tauri</Badge>
          <Badge>React js</Badge>
          <Badge>Typescript</Badge>
          <Badge>TailwindCss</Badge>
          <Badge>React Query</Badge>
          <Badge>Zustand</Badge>
          <Badge>Rest API</Badge>
          <Badge>SQLite DB</Badge>
        </Article>

        <Article
          key={3}
          url="https://ree7.vercel.app"
          title="Ree7"
          img={ree7}
          description="BookStore / blog With Speed like Ree7 "
        >
          <Badge>Next js</Badge>
          <Badge>Typescript</Badge>
          <Badge>TailwindCss</Badge>
          <Badge>ReduxToolkit</Badge>
          <Badge>Firebase</Badge>
          <Badge>Sanity.io</Badge>
          <Badge>Rest API</Badge>
        </Article>

        <Article
          key={4}
          url="/"
          title="Rawda"
          img={pr1}
          description="Coming Soon ..."
        >
          <Badge>firebase</Badge>
          <Badge>React js</Badge>
          <Badge>Typescript</Badge>
          <Badge>TailwindCss</Badge>
          <Badge>React Query</Badge>
        </Article>

      </div>
    </section>
  );
}

export default Projects