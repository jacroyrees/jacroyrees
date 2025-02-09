import StackIcon from "tech-stack-icons";

const techStackItems = [
  { name: "reactjs", label: "ReactJS" },
  { name: "typescript", label: "TypeScript" },
  { name: "jest", label: "Jest" },
  { name: "java", label: "Java" },
  { name: "spring", label: "Spring" },
  { name: "azure", label: "Azure" },
  { name: "figma", label: "Figma" },
  { name: "cypress", label: "Cypress" },
  { name: "git", label: "Git" },
  { name: "python", label: "Python" },
  { name: "datadog", label: "Datadog" },
  {name: "docker", label: "Docker"},
];

function TechStack() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-10">
      <h1 className="text-4xl  text-white text-center font-bold">
        Current Technologies
      </h1>
      <p className="text-white text-lg text-center max-w-2xl mt-2">
        I have over 3 years of industry experience working in fast-paced, agile environments with various technologies.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-8 w-full max-w-4xl">
        {techStackItems.map((item) => (
          <div key={item.name} className="flex flex-col items-center p-4">
            <StackIcon name={item.name} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            <p className="text-white mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
