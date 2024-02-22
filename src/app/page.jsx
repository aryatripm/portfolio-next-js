"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { stagger, useAnimate, motion } from "framer-motion";
import { BadgeCheck, ChevronRight, Database, FileDown, Github, Globe2, GraduationCap, Linkedin, Mail, MailPlus, PanelsTopLeft, SendHorizontal, TabletSmartphone, XCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AnimateNumber } from "animate-number-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGooglePlay, faHtml5, faJava, faJs, faLaravel, faPhp, faTrello } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { Suspense } from "react";
import { Computer } from "@/components/computer";

const Home = () => {
  // Email
  const [modalForm, setModalForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).then(
      () => {
        setSuccess(true);
        form.current.reset();
      },
      () => {
        setError(true);
      }
    );
  };

  // Animation
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.5,
  });

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerGridItems,
        }
      );
    }
  }, [scope]);

  return (
    <main className="flex flex-col w-full h-full xl:flex-row container relative mx-auto py-20 px-6">
      <div ref={scope} className="grid w-full grid-cols-5 gap-6 auto-rows-auto">
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="overflow-clip md:col-span-2 col-span-full row-span-2 md:p-8 p-4 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-4xl font-bold  text-red">Hi,</span>
          <span className="text-4xl font-bold btn-shine">I&apos;m Arya Majiah</span>
          <span className="text-2xl text-blue dark:text-tosca">Software Engineer | Mobile Developer | Web Developer</span>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-1 py-6 md:px-8 px-4 rounded-3xl group shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-1 hover:dark:bg-neutral-200 hover:bg-neutral-800 duration-200 transition-colors ease-in-out"
        >
          <Link href="https://github.com/aryatripm" className="justify-between items-center flex w-full">
            <div className="text-2xl font-bold group-hover:text-white group-hover:dark:text-black">Github</div>
            <Github className="group-hover:text-white group-hover:dark:text-black" />
          </Link>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-1 py-6 justify-center md:px-8 px-4 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col flex-1 hover:bg-[#0077B5] hover:dark:bg-[#0077B5] group duration-200 transition-colors ease-in-out"
        >
          <Link href="https://linkedin.com/in/arya-majiah" className="justify-between items-center flex w-full">
            <span className="text-2xl font-bold text-[#0077B5] dark:text-[#0077B5] group-hover:text-white">Linkedin</span>
            <Linkedin className="text-[#0077B5] dark:text-[#0077B5] group-hover:text-[#FFF] hover:text-white" />
          </Link>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          onClick={() => setModalForm(true)}
          className="md:col-span-1 col-span-full row-span-2 md:p-8 p-4 rounded-3xl group cursor-pointer flex flex-col shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl">Contact</span>
          <span className="text-4xl font-bold">Me!</span>
          <div className="w-full items-end flex flex-col">
            <MailPlus size={64} className="transition-all group-hover:scale-100 group-hover:translate-x-0 -translate-x-5 scale-0" />
            <Mail size={64} className="absolute transition-all scale-100 translate-x-0 group-hover:-translate-x-5 group-hover:scale-0" />
          </div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-2 col-span-full row-span-5 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <div className="w-full h-full overflow-visible">
            <Canvas>
              <Suspense fallback={null}>
                <Computer />
                <OrthographicCamera makeDefault position={[2, 2, 5]} zoom={150} castShadow />
                <ambientLight intensity={0.1} />
                <directionalLight color="white" position={[2, 2, 3]} lookAt={[0, 0, -0.031]} />
                <OrbitControls />
              </Suspense>
            </Canvas>
          </div>
          <span className="text-sm p-4 text-end">Retro Computer by Tobalation is licensed under Creative Commons Attribution.</span>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-2 md:p-8 p-4 gap-6 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl font-bold">Years Experience</span>
          <div className="m-auto text-6xl font-bold">
            <AnimateNumber easing="easeInOut" duration={2000} animation={true} slideAnimation={true}>
              1
            </AnimateNumber>
            +
          </div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-2 md:p-8 p-4 gap-6 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl font-bold">Certificates</span>
          <div className="m-auto text-6xl font-bold">
            <AnimateNumber easing="easeInOut" animation={true} slideAnimation={false} decimal={0} duration={2000}>
              15
            </AnimateNumber>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.2, y: 120, opacity: 0 }}
          className="md:col-span-1 col-span-2 row-span-1 rounded-3xl shadow-md hover:shadow-lg justify-center items-center bg-neutral-100 dark:bg-amber-400 dark:text-black flex flex-col hover:dark:bg-amber-500 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <ThemeToggle />
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-full row-span-4 md:p-8 p-4 rounded-3xl group shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl mb-4">Location</span>
          <span className="text-4xl">Bandung,</span>
          <span className="text-4xl font-bold h-full">Indonesia</span>
          <div className="w-full">
            <Globe2 strokeWidth={1} className="float-end w-24 h-24 group-hover:text-tosca group-hover:w-48 group-hover:h-48 transition-all ease-in-out duration-200" />
          </div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-2 col-span-full row-span-2 md:p-8 p-4 group rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <div className="flex gap-6 mb-4 items-center">
            <GraduationCap size={48} className="group-hover:skew-y-12 group-hover:scale-110 transition-all ease-in-out duration-300" />
            <span className="text-xl font-bold">Graduated from</span>
          </div>
          <span className="text-4xl font-bold">Maranatha Christian University</span>
          <span className="text-2xl">Computer Science</span>
          <span className="text-lg">2020 - 2024 | GPA 3.97</span>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-full row-span-1 md:p-8 p-4 group rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col dark:hover:bg-[#F05340] hover:bg-[#F05340] duration-200 transition-colors ease-in-out"
        >
          <div className="flex flex-col group-hover:opacity-0 group-hover:-translate-y-5 transition-all ease-in-out duration-100">
            <div className="flex items-center gap-4 w-full">
              <span className="text-2xl w-full font-bold">i2c Studio</span>
              <FontAwesomeIcon icon={faTrello} size="2xl" className="text-[#007AC0]" />
              <FontAwesomeIcon icon={faLaravel} size="2xl" className="text-[#F05340]" />
            </div>
            <span className="text-lg">Junior Web Developer</span>
          </div>
          <div className="absolute flex flex-col text-transparent group-hover:text-white transition-all ease-in-out duration-100">
            <span className="text-2xl font-bold">Part-Time</span>
            <span className="text-xl">2021-2024</span>
          </div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-2 col-span-full row-span-2 md:p-8 p-4 rounded-3xl shadow-md group text-end items-end hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <div className="flex gap-4 items-center mb-4 w-full">
            {/* <Image src="/bangkit.png" width={600} height={141} alt="Bangkit" className="w-48" /> */}
            <Image src="/kampusmerdeka.png" width={1080} height={1080} alt="Bangkit" className="w-24 float-end" />
          </div>
          <span className="text-4xl font-bold">Bangkit Academy 2023</span>
          <span className="text-xl">by Google, GoTo, and Traveloka</span>
          <span className="text-xl font-bold">Mobile Development Cohort</span>
          <span className="text-lg mt-4">Trained about Android native mobile development with Kotlin and studied about soft-skills and English. In the end, created a team to make a product for capstone project.</span>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-2 rounded-3xl shadow-md hover:shadow-lg group bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-red hover:bg-red duration-200 transition-colors ease-in-out"
        >
          <Link href={"/cv.pdf"} className="h-full w-full">
            <div className="flex flex-col h-full justify-center gap-4 md:p-8 p-4">
              <FileDown size={72} className="text-red group-hover:text-white dark:group-hover:text-black" />
              <span className="text-3xl font-bold group-hover:text-white dark:group-hover:text-black">Download CV (Resume)</span>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-full row-span-4 md:p-8 gap-4 p-4 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <PanelsTopLeft />
          <span className="text-2xl">Web Development</span>
          <div className="flex flex-col w-full gap-2">
            <span className="text-3xl font-bold group hover:text-[#E44D26] transition-all">
              HTML <FontAwesomeIcon icon={faHtml5} size="lg" className="opacity-0 group-hover:opacity-100 transition-all" />
            </span>
            <span className="text-3xl font-bold group hover:text-[#2965f1] transition-all">
              CSS <FontAwesomeIcon icon={faCss3} size="lg" className="opacity-0 group-hover:opacity-100 transition-all" />
            </span>
            <span className="text-3xl font-bold group hover:text-[#F0DB4F] transition-all">
              JS <FontAwesomeIcon icon={faJs} size="lg" className="opacity-0 group-hover:opacity-100 transition-all" />
            </span>
            <span className="text-3xl font-bold group hover:text-[#484C89] transition-all">
              PHP <FontAwesomeIcon icon={faPhp} size="lg" className="opacity-0 group-hover:opacity-100 transition-all" />
            </span>
            <span className="text-3xl font-bold group hover:text-[#F05340] transition-all">
              Laravel <FontAwesomeIcon icon={faLaravel} size="lg" className="opacity-0 group-hover:opacity-100 transition-all" />
            </span>
            <span className="text-3xl font-bold group hover:text-[#6DB33F] transition-all">
              Spring <FontAwesomeIcon icon={faJava} size="lg" className="opacity-0 group-hover:opacity-100 transition-all" />
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-2 md:p-8 p-4 gap-2 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl font-bold">Android Learning Path Dicoding</span>
          <div className="flex items-center gap-2">
            <BadgeCheck size={48} className="text-tosca" />
            <span className="text-xl">Menjadi Android Developer Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck size={48} className="text-tosca" />
            <span className="text-xl">Belajar Prinsip Pemrograman SOLID</span>
          </div>
          <Link href={"https://www.dicoding.com/learningpaths/7"} className="flex items-center gap-2 mt-2 text-end justify-end group">
            <span className="text-lg group-hover:text-red transition-all">More</span>
            <ChevronRight size={24} className="group-hover:text-red transition-all" />
          </Link>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-2 md:p-8 p-4 rounded-3xl group shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="mb-4 flex gap-2 items-center">
            <Database className="w-5 h-5 group-hover:w-12 group-hover:h-12 transition-all ease-in-out" />
            <span className="text-2xl">Database</span>
          </span>
          <span className="text-3xl font-bold">MySQL</span>
          <span className="text-3xl font-bold">PostgreSQL</span>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-2 col-span-full row-span-3 md:p-8 p-4 gap-4 group rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <div className="flex gap-4 items-center">
            <TabletSmartphone className="w-5 h-5 group-hover:w-12 group-hover:h-12 transition-all ease-in-out" />
            <span className="text-2xl">Mobile Development</span>
          </div>
          <span className="text-4xl font-bold">Native</span>
          <span className="text-2xl">Android | Kotlin, Java | Jetpack Compose</span>
          <span className="text-4xl font-bold">Multi Platform</span>
          <span className="text-2xl">Flutter | Dart</span>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-1 md:p-8 p-4 rounded-3xl group shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-[#FF9900] hover:bg-[#252F3E] duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl font-bold group-hover:opacity-0 transition-all">AWS Academy Graduate</span>
          <span className="text-2xl group-hover:opacity-0 transition-all">Cloud Foundations</span>
          <Link href={"https://www.credly.com/badges/442fed06-b257-4b30-83e6-a5af3905a7a3?source=linked_in_profile"} className="absolute text-2xl font-bold opacity-0 group-hover:opacity-100 group-hover:text-white transition-all">
            Open Certificate
          </Link>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-2 md:p-8 p-4 rounded-3xl group text-center justify-center shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-[#6DB33F] hover:bg-[#6DB33F] duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl font-bold group-hover:opacity-0 transition-all">E-Commerce REST API</span>
          <span className="text-2xl group-hover:opacity-0 transition-all">Spring Boot | Java</span>
          <Link href={"https://github.com/aryatripm/e-commerce-rest-api-spring"} className="text-2xl font-bold absolute opacity-0 group-hover:opacity-100 transition-all">
            Go To Repository
          </Link>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-1 md:p-8 p-4 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl font-bold text-[#0077B5]">More Certificate on Linkedin</span>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-2 md:p-8 p-4 justify-center items-center gap-2 rounded-3xl group shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-[#CC2132] hover:bg-[#CC2132] duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl mb-2 group-hover:opacity-0 transition-all font-bold">Final Year Project</span>
          <Image src="/hebat.png" width={1080} height={1080} alt="Hebat Mobile" className="w-24 rounded-xl group-hover:opacity-0 transition-all" />
          <span className="text-xl group-hover:opacity-0 transition-all">
            Mobile application that helps <strong>Purwakarta District Health Office</strong> find new tuberculosis cases.
          </span>
          <div className="absolute opacity-0 flex flex-col justify-center group-hover:opacity-100 transition-all">
            <Link href={"https://play.google.com/store/apps/details?id=com.desahebat.hebat"} className="text-xl font-bold opacity-0 group-hover:opacity-100 transition-all">
              <FontAwesomeIcon icon={faGooglePlay} className="text-white text-6xl" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-2 md:p-8 p-4 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl font-bold">Daily Cloud</span>
          <Image src="/dailycloud.png" width={1080} height={1080} alt="Daily Cloud" className="w-24 rounded-xl" />
          <span className="text-xl">Bangkit Capstone Project</span>
          <span className="text-lg font-bold h-full">Kotlin | Jetpack Compose | AI Implementation</span>
          <Link href={"https://github.com/daily-cloud"} className="text-2xl font-bold text-tosca">
            Go To Repository
          </Link>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-2 col-span-full row-span-3 relative overflow-hidden rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90" />
            <Image className="z-0 object-cover object-center w-full h-full" src={"/movieticket.jpg"} alt="Movie Ticket" fill />
            <div className="relative z-20 w-full p-4 space-y-3 md:p-8">
              <Link href={"https://github.com/aryatripm/movie-ticket-flutter"} className="text-4xl font-bold text-white">
                Movie Ticket
              </Link>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-2 py-1 text-md font-medium bg-white rounded-lg dark:text-black">Flutter</span>
                <span className="px-2 py-1 text-md font-medium bg-white rounded-lg dark:text-black">Dart</span>
                <span className="px-2 py-1 text-md font-medium bg-white rounded-lg dark:text-black">TMBD API</span>
                <span className="px-2 py-1 text-md font-medium bg-white rounded-lg dark:text-black">BLoC</span>
                <span className="px-2 py-1 text-md font-medium bg-white rounded-lg dark:text-black">Go Router</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-1 col-span-2 row-span-1 md:p-8 p-4 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl font-bold">More Projects on Github</span>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="md:col-span-3 col-span-full row-span-1 justify-between md:p-8 p-4 rounded-3xl shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-900 flex hover:dark:bg-neutral-800 hover:bg-neutral-200 duration-200 transition-colors ease-in-out"
        >
          <span className="text-2xl">Build with 100% ❤️</span>
          <span className="text-2xl">©2024 aryatripm</span>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.2,
            y: 120,
            opacity: 0,
          }}
          className="col-span-full row-span-1 md:p-8 p-4"
        ></motion.div>
      </div>

      {modalForm && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-md w-1/3">
            <div className="flex justify-between gap-10">
              <h1 className="text-3xl font-bold">Send Me Email</h1>
              <button onClick={() => setModalForm(false)} className="float-right text-2xl font-bold text-red">
                <XCircle />
              </button>
            </div>
            <form onSubmit={sendEmail} ref={form} className="flex flex-col gap-4 mt-8 text-2xl">
              <input type="email" name="user_email" placeholder="someone@email.com" className="p-4 rounded-xl outline-none focus:border-2 transition-all ease-in-out duration-75" />
              <textarea name="message" placeholder="Hi Arya..." rows={6} className="p-4 rounded-xl outline-none resize-none focus:border-2 transition-all ease-in-out duration-75"></textarea>
              <button type="submit" className="p-4 rounded-xl bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-400 transition-all ease-in-out duration-150 flex justify-center gap-4">
                Send
                <SendHorizontal />
              </button>
              {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
              {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
            </form>
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default Home;
