import { VscAzureDevops } from "react-icons/vsc";
import { MdDevices } from "react-icons/md";
import { MdOutlineHttp } from "react-icons/md";
import { LuBrain } from "react-icons/lu";

const items = [
  {
    id: 0,
    title: "Full-Stack ECommerce Website",
    description: "A comprehensive eCommerce platform built with Spring, Spring Boot, and React, incorporating secure transactions, a scalable architecture, and intuitive UI/UX design.",
    url: "N/A",
  },
  {
    id: 1,
    title: "MRI Image Manipulation",
    description: "Advanced image processing techniques applied to 3D MRI scans for early detection and classification of brain tumors, leveraging deep learning algorithms.",
    url: "https://github.com/jacroyrees/ImageManipulation",
  },
  {
    id: 2,
    title: "Covid-19 Mask Compliance Detection",
    description: "A computer vision model using OpenCV and deep learning to detect face mask compliance in real-time, aiding in public health safety measures.",
    url: "https://github.com/jacroyrees/MaskDetectionNeuralNetwork",
  },
  {
    id: 3,
    title: "2D Java Video Game",
    description:
      "A classic 2D retro-style game developed in Java, featuring custom game physics, procedural level generation, and AI-driven enemy behavior.",
    url: "https://github.com/jacroyrees/BASICRETRO2D",
  },
  {
    id: 4,
    title: "Custom Tetris Clone",
    description: "A fully customized Tetris clone built in Unity3D using C#, incorporating smooth gameplay mechanics and modernized UI elements.",
    url: "https://github.com/jacroyrees/TetrisUnity",
  },
  {
    id: 5,
    title: "N.E.A.T Vacuum Cleaner Simulation",
    description:
      "An AI-driven autonomous vacuum cleaner simulation utilizing NeuroEvolution of Augmenting Topologies (NEAT) in Unity3D to optimize cleaning efficiency.",
    url: "https://github.com/jacroyrees/NEAT",
  },
];

function Technologies() {
  return (
    <div className="relative w-[100vw]  flex flex-col ml-4 gap-4 font-roboto text-center">
      <h1 className="text-5xl text-center text-white font-bold">You're in Expert Hands</h1>
      <p className="text-center text-white text-lg ml-4 mb-4  ">
        With over three years of experience working in high-performance, agile environments for large organizations, I specialize in building scalable, efficient, and secure software solutions.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4 p-4">
          <LuBrain size={64} color="white" />
          <h1 className="text-white text-2xl font-medium text-center">Machine Learning & Optimization</h1>
          <p className="text-white text-base max-w-md text-center">
            I develop and optimize AI-driven solutions, including neural networks, classifiers, and evolutionary algorithms. These models enhance decision-making processes, automate complex tasks, and drive innovation in various industries.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          <MdOutlineHttp size={64} color="white" />
          <h1 className="text-white text-2xl font-medium text-center">Back-End Development</h1>
          <p className="text-white text-base max-w-md text-center">
            I implement robust backend infrastructures using REST APIs, microservices, and cloud-based solutions. My approach ensures secure, scalable, and high-performance applications that seamlessly integrate with enterprise systems.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          <MdDevices size={64} color="white" />
          <h1 className="text-white text-2xl font-medium text-center">Front-End Development</h1>
          <p className="text-white text-base max-w-md text-center">
            I specialize in creating intuitive and visually appealing user interfaces, collaborating with both technical and business stakeholders to enhance user experience and engagement through well-structured and accessible designs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Technologies;