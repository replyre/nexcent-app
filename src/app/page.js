"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Carousal from "@/components/carousal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Counter from "@/components/Counter";
export default function Component() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Carousal />
      <section className="flex dark:bg-black flex-col items-center justify-center gap-5 mt-5 text-[#4D4D4D] dark:text-gray-300 dark:bg-inherit">
        <p className="text-3xl font-semibold">Our Clients</p>
        <p className="text-center">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-evenly w-full py-4">
          <img src="./images/client1.svg" />
          <img src="./images/client2.svg" />
          <img src="./images/client3.svg" />
          <img src="./images/client4.svg" />
          <img src="./images/client5.svg" />
          <img src="./images/client6.svg" />
          <img src="./images/client3.svg" />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-2 md:gap-5 mt-7 text-[#4D4D4D] dark:text-gray-300">
        <p className="text-xl p-2 md:text-3xl font-semibold md:w-[30%] text-center">
          Manage your entire community in a single system
        </p>
        <p>Who is Nextcent suitable for?</p>
        <div className="flex flex-col md:flex-row justify-center w-full py-4 gap-10 md:gap-0">
          <div className="flex flex-col items-center  gap-5 md:w-[30%] justify-center">
            <img src="./images/manage1.svg" />
            <p className="text-3xl font-semibold px-10 md:px-0 md:w-[50%] text-center">
              Membership Organizations
            </p>
            <p className="md:w-[60%] px-10 md:px-0 text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 md:w-[25%] justify-center">
            <img src="./images/manage2.svg" />
            <p className="text-3xl font-semibold px-10  md:px-0 md:w-[50%] text-center">
              National Associations
            </p>
            <p className="md:w-[60%] px-10 md:px-0 text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col items-center  gap-5 md:w-[30%] justify-center">
            <img src="./images/manage3.svg" />
            <p className="text-3xl font-semibold px-10  md:px-0 md:w-[50%] text-center">
              Clubs And Groups
            </p>
            <p className="md:w-[60%] px-10   md:px-0 text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center flex-col md:flex-row gap-[100px] m-10 p-10">
        <img src="./images/password.svg" />
        <div className="flex flex-col w-[100%] md:w-[50%] justify-center gap-6">
          <p className="text-2xl md:text-4xl font-semibold text-left   md:w-[80%]">
            The unseen of spending three years at Pixelgrade
          </p>

          <p className="md:text-left md:w-[80%] text-justify text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className="md:text-left md:w-[80%]  text-center">
            <Button asChild className="bg-green-600 hover:bg-green-500 px-6">
              <Link href="/login">Register</Link>
            </Button>
          </div>
        </div>
      </section>
      <Counter />
    </ThemeProvider>
  );
}
