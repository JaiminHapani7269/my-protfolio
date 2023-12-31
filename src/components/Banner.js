import React from "react";
import { FaGithub } from "react-icons/fa";
import lap1 from "../assets/lap1.png";
import resume from "../assets/JAIMIN_REACT.pdf";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";


const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex-col flex gap-y-8 lg:flex-row items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              JAIMIN <span>HAPANI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={["Web Developer", 2000, "App Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Front end development is the future of web development. It is all
              about creating beautiful and functional user experiences that
              matter. With the power of code and design, front end developers
              can design the future of the web.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >

              <button className="btn btn-lg" ><a href={resume} download>Download Cv</a></button>

              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/*SOCIALS */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[45px] gap-x-10 max-w-max mx-auto lg:max-0"
            >
              <a href="https://github.com/JaiminHapani7269">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/jaimin-hapani-7269-471b9722b/">
                <BsLinkedin />
              </a>
              <a href="https://instagram.com/jaimin._.hapani?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                <BsInstagram />
              </a>
              <a href="https://www.facebook.com/jaiminhapani.7787?mibextid=ZbWKwL">
                <BsFacebook />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={lap1} className="h-[450px] w-[450px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
