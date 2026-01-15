import blogger from "../assets/img-projects/blogger.png";
import gym from "../assets/img-projects/gym.png";
import weather from "../assets/img-projects/weather.png";
import ttt from "../assets/img-projects/tic-tac-toe.png";

export const projects = [
  {
    title: "Bloggers - Js",
    description:
      "Made while learning Js and ejs. You can create posts.You can also update and delete.",
    image: blogger.src,
    tecnologies: ["HTML", "CSS", "Node.js", "Ejs"],
    demo: "https://blog-project-7o5p.onrender.com",
    code: "https://github.com/sudip-kandel7/blog-project.git",
  },
  {
    title: "Gym - HTML CSS",
    description: "Made while learning HTML and CSS.",
    image: gym.src,
    tecnologies: ["HTML", "CSS"],
    demo: "https://sudip-kandel7.github.io/gym-website/",
    code: "https://github.com/sudip-kandel7/gym-website.git",
  },
  {
    title: "Weather Website",
    description:
      "A simple weather website that shows the weather of any city using open weather API. In default shows the weather of Pokhara.",
    image: weather.src,
    tecnologies: ["React", "CSS", "API"],
    demo: "http://sudip-kandel.com.np/weather/",
    code: "https://github.com/sudip-kandel7/weather.git",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "A simple Tic-Tac-Toe game made using JAVA.",
    image: ttt.src,
    tecnologies: ["JAVA", "XML"],
    code: "https://github.com/sudip-kandel7/Tic-Tac-Toe.git",
  },
];
