import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt"; // Restart icon

const personalItems = [
  { name: "music", label: "Gig in Kyiv, Ukraine", image: "band.jpg" },
  { name: "gym", label: "Darth Manion tough mudder", image: "run.jpg" },
  { name: "travel", label: "Ha Giang Loop, Vietnam", image: "travel.jpg" },
];

export default function Personal() {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(new Audio("bloodmoney.mp3"));

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    audioRef.current.currentTime = 0; // Restart audio
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col items-center w-full px-4 py-10">
      <h1 className="text-4xl text-white text-center font-bold mb-1">Personal</h1>
      <p className="text-white text-lg text-center max-w-2xl mt-2 ">
      Outside of Tech I enjoy watching and playing music, attending the gym travelling to new places to meet new people and learn more about their culture</p>

      <div className="flex flex-wrap justify-center gap-6 mt-8 w-full max-w-4xl">
        {personalItems.map((item) => (
          <div key={item.name} className="flex flex-col items-center p-4">
            <img src={item.image} alt={item.label} className=" w-[250px] h-[250px] rounded-lg object-cover shadow-xl " />
            <p className="text-white mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      <Card sx={{ display: "flex", mt: 8 }}>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Blood Money
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              All Dead, All Dead
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="restart" onClick={handleRestart}>
              <RestartAltIcon />
            </IconButton>
            <IconButton aria-label="play/pause" onClick={handlePlayPause}>
              {isPlaying ? (
                <PauseIcon sx={{ height: 38, width: 38 }} />
              ) : (
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              )}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="artist.png"
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}