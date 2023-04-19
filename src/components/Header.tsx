import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header
      id="me"
      className=" z-10 backdrop-blur-sm  text-pr4 dark:text-pr2 sticky top-0  w-full bg-pr/20 dark:bg-pr5/30 h-14 flex justify-between items-center px-10 shadow-sm lg:px-44"
    >
      <section className="font-extrabold  hover:brightness-110  select-none active:brightness-125 duration-100 cursor-pointer text-animation text-2xl ">
        Moncef
      </section>
      <nav className="hidden sm:flex justify-center w-full  items-center gap-5">
        <a
          href="#me"
          className="text-center text-xs md:text-base font-thin  hover:text-pr3  dark:hover:text-pr1 duration-100 cursor-pointer"
        >
          Me
        </a>
        <a
          href="#experience"
          className="text-xs text-center md:text-base font-thin   hover:text-pr3  dark:hover:text-pr1 duration-100 cursor-pointer"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-xs text-center md:text-base font-thin  hover:text-pr3  dark:hover:text-pr1 duration-100 cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-xs text-center md:text-base font-thin  hover:text-pr3  dark:hover:text-pr1 duration-100 cursor-pointer"
        >
          Contact
        </a>
      </nav>
      <h2 className=" flex cursor-pointer theme-toggle text-lg font-black  text-pr5 dark:text-pr">
        <ThemeSwitch/>
      </h2>
      <button
        id="burger"
        className="ml-5 flex sm:hidden justify-center items-center w-6 h-6 hover:brightness-110 active:brightness-125"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </header>
  );
}

export default Header