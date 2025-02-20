import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StackIcon from "tech-stack-icons";

const items = [
  { id: 0, title: "Full-Stack ECommerce Website", description: "Ecommerce website utilizing Spring, SpringBoot and React", url: "N/A", technologies: ["reactjs", "java", "spring", "tailwindcss", "figma"] },
  { id: 1, title: "MRI Image Manipulation", description: "Manipulating 3D MRI images to resize, invert and create thumbnails. Notably includes Maximum Intensity Projection.", url: "https://github.com/jacroyrees/ImageManipulation", technologies: ["java"] },
  { id: 2, title: "Covid-19 Mask Compliance Detection", description: "Detecting Covid 19 mask compliance using OpenCV and Python.", url: "https://github.com/jacroyrees/MaskDetectionNeuralNetwork", technologies: ["python"] },
  { id: 3, title: "2D Java Video Game", description: "2D Video Game implemented in Java and developed with a team of 6 software engineers. Notably won the University competition.", url: "https://github.com/jacroyrees/BASICRETRO2D", technologies: ["java"] },
  { id: 4, title: "Custom Tetris Clone", description: "Personal take on the classic video game Tetris, implemented with C# and the Enity Engine", url: "https://github.com/jacroyrees/TetrisUnity", technologies: ["csharp"] },
  { id: 5, title: "N.E.A.T Vacuum Cleaner simulation", description: "An implementation of a self learning vacuum cleaner in Unity3D utilizing the NEAT algorithm in order to make comparisons between autonomous and intelligent-autonomous robots", url: "https://github.com/jacroyrees/EvolvingDomesticatedNeuroEvolution", technologies: ["unity","csharp"] },
  { id: 6, title: "CIFAR-10", description: "Implementation of the CIFAR-10 classifier implemented via a Convultion Neural Network.", url: "https://github.com/jacroyrees/bigdata/blob/main/961103.ipynb", technologies: ["unity", "csharp"], paperUrl: "https://github.com/jacroyrees/bigdata/blob/main/CSC345__Object_Recognition%20961103.pdf" },
  { id: 7, title: "Hyper-Parameter Optimization", description: "Parameter optimizer using standard techniques such as Simulated Annealing, Random Search and adaptive penalties", technologies: ["unity", "csharp"], paperUrl: "https://github.com/jacroyrees/Developing/blob/main/CSC372Coursework.ipynb" },

];

function Portfolio() {
  return (
    <div className="text-center">
      <h1 className="text-5xl text-white font-bold mb-1">Portfolio</h1>
      <p className="text-lg text-gray-300 mb-4 p-8">
        Here are some of the projects I've worked on. Each project showcases different skills and technologies I've used to solve real-world problems.
      </p>
      <Grid container spacing={4} justifyContent="center" className="p-6">
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ minWidth: 205, height: 250, position: 'relative', backgroundColor: '#2C2C2C', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ marginBottom: 2, color: 'white' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {item.description}
                </Typography>
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  {item.technologies.map((tech, index) => (
                    <StackIcon key={index} name={tech} className="w-6 h-6" />
                  ))}
                </div>
              </CardContent>
              <div className="p-2 text-left">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:underline">
                  View Code
                </a>
                {(item.id === 5 || item.id === 6) && item.paperUrl && (
                  <>
                    <span className="mx-2">|</span>
                    <a href={item.paperUrl} target="_blank" rel="noopener noreferrer" className="text-white underline hover:underline">
                      View Paper
                    </a>
                  </>
                )}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;