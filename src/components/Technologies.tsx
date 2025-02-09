import { MdDevices } from "react-icons/md";
import { MdOutlineHttp } from "react-icons/md";
import { LuBrain } from "react-icons/lu";



function Technologies() {
  return (
    <div className="relative w-[100vw]  flex flex-col p-8 gap-4 font-roboto text-center">
      <h1 className="text-5xl text-center text-white font-bold">You're in Expert Hands</h1>
      <p className="text-center text-white text-lg mb-4  ">
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