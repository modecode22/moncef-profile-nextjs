import Me from "./Me";
import MeAnimation from "./MeAnimation";

const Hero = () => {
  return (
    <main
      id=""
      className="relative gap-5 grid grid-cols-2 w-full   rounded-lg  p-5"
    >
      <main className="bg-pr1/30 relative w-full aspect-square rounded-full  ">
        <Me />
        <MeAnimation />
      </main>
      <main>
        <h1 className="text-animation drop-shadow-md text-3xl sm:text-4xl md:text-8xl ">
          Hey there!
        </h1>
        <h1 className="text-animation drop-shadow-md  text-4xl sm:text-4xl md:text-8xl ">
          {"I'm Moncef"}
        </h1>

        <p className="text-animation drop-shadow-md text-sm sm:text-xl md:text-2xl ">
          Welcome to my portfolio , the place where React and Next.js meet
          creativity and innovation.
        </p>
      </main>
    </main>
  );
}

export default Hero