import { icons } from "../utils/icons"
import resume from '../assets/docs/Placeholder-PDF.pdf'

export default function ResumePage() {
  return (
    <>
    <section className="container w-screen grid grid-cols-4">
      <h1 className="col-span-4 font-semibold text-5xl text-center accent-text">Skill list</h1>
      <section className="grid grid-cols-4 col-span-4 my-4">
        <section className="cols-span-1 grid grid-cols-1 justify-items-center  m-2">
          <img src={icons.mongodb} alt="mongodb icon" className="size-40 border-8 border-green-500 rounded-full m-2"/>
          <p className="text-2xl text-center my-2">MongoDB</p>
        </section>
        <section className="cols-span-1 grid grid-cols-1 justify-items-center m-2">
          <img src={icons.express} alt="mongodb icon" className="size-40  border-8 border-purple-500 rounded-full m-2"/>
          <p className="text-2xl text-center my-2">ExpressJs</p>
        </section>
        <section className="cols-span-1 grid grid-cols-1 justify-items-center m-2">
          <img src={icons.react} alt="mongodb icon" className="size-40 border-8 border-cyan-400 rounded-full m-2"/>
          <p className="text-2xl text-center my-2">React</p>
        </section>
        <section className="cols-span-1 grid grid-cols-1 justify-items-center m-2">
          <img src={icons.node} alt="mongodb icon" className="size-40 border-8 border-black rounded-full m-2"/>
          <p className="text-2xl text-center my-2">NodeJs</p>
        </section>
        <h2 className="col-span-4 text-5xl text-center my-3">MERN STACK</h2>
      </section>
      <section className="grid grid-cols-4 col-span-4 my-4">
        <section className="cols-span-1 flex justify-evenly border-8 border-blue-950 rounded-full">
          <p className="text-2xl text-center my-2">MySQL</p>
          <img src={icons.mySql} alt="mySql icon" className="size-12"/>
        </section>
        <section className="cols-span-1 flex justify-evenly border-8 border-blue-950 rounded-full">
          <p className="text-2xl text-center my-2">Tailwind</p>
          <img src={icons.tailwind} alt="mySql icon" className="size-12"/>
        </section>
        <section className="cols-span-1 flex justify-evenly border-8 border-blue-950 rounded-full">
          <p className="text-2xl text-center my-2">Bootstrap</p>
          <img src={icons.bootstrap} alt="mySql icon" className="size-12"/>
        </section>
        <section className="cols-span-1 flex justify-evenly border-8 border-blue-950 rounded-full">
          <p className="text-2xl text-center my-2">C-Sharp</p>
          <img src={icons.cSharp} alt="mySql icon" className="size-12"/>
        </section>
      </section>
      <a href={resume} download='resume' className="col-start-2 col-span-2 text-center accent-bg main-text border-1 border-black rounded-full text-2xl">Downloadable resume</a>
    </section>
    </>
  )
}