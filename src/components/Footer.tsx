import Image from 'next/image'

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-pr1/10 dark:bg-pr4/30 h-60 flex flex-col items-center justify-center gap-2"
    >
      <h1 className="text-2xl">Contact me on</h1>
      <h2>aissaouimoncefdev@gmail.com</h2>
      <h3>or</h3>
      <nav className="flex justify-center items-center gap-5">
        <a
          target="_blank"
          href="https://github.com/modecode22"
          title="github"
          className="relative w-8 h-8 bg-white rounded-full flex justify-center items-center group"
        >
          <Image fill src="/github.svg" className="w-6 h-6" alt="" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100090251763624"
          title="facebook"
          className="relative w-8 h-8 flex justify-center items-center"
        >
          <Image fill src="/Facebook.svg" className="w-8 h-8" alt="" />
        </a>

        <a
          target="_blank"
          href="https://twitter.com/epiccoder1"
          title="twitter"
          className="relative w-8 h-8 flex justify-center items-center"
        >
          <Image fill src="/Twitter.svg" className="w-8 h-8" alt="" />
        </a>
      </nav>
      <h3 className="font-thin  text-animation">
        Call me Sundays, busy learning & working weekdays :)
      </h3>
    </footer>
  );
}

export default Footer