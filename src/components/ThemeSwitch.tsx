"use client"
import { GiMoonBats, GiSun } from "react-icons/gi";
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
       const { resolvedTheme, setTheme } = useTheme();
  return (
    <>
      <Switch
        checked={resolvedTheme === "dark" ? true : false}
        onChange={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
        className={`${
          (resolvedTheme === "dark" ? true : false)
            ? "bg-gradient-to-br from-black to-black/50 "
            : "bg-pr1"
        }
         backdrop-blur-3xl  relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            (resolvedTheme === "dark" ? true : false)
              ? "translate-x-8"
              : "translate-x-0"
          }
          flex justify-center items-center text-pr5   pointer-events-none  h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {(resolvedTheme === "dark" ? true : false) ? (
            <GiMoonBats className="duration-200 transition-all" />
          ) : (
            <GiSun className=" duration-200 transition-all" />
          )}
        </span>
      </Switch>
    </>
  );
}

export default ThemeSwitch