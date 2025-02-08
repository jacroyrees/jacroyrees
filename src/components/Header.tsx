import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header() {
  return (
    <header className="flex flex-col justify-between items-center p-5 bg-[#232323] text-white shadow-md">
      <div className="flex justify-between items-center w-full">
        <img src="/jacreeslogo.png" alt="Logo" className="h-12 w-12" />
        <div className="hidden lg:flex space-x-16 items-center text-2xl mr-12">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#portfolio" className="hover:text-gray-400">
            Portfolio
          </a>
          <a href="#resume" className="hover:text-gray-400">
            Resume
          </a>
          <LinkedInIcon
            className="h-6 w-6 hover:text-gray-400 cursor-pointer"
            onClick={() =>
              window.open("https://www.linkedin.com/in/jacroyrees", "_blank")
            }
          />
          <GitHubIcon
            className="h-6 w-6 hover:text-gray-400 cursor-pointer"
            onClick={() =>
              window.open("https://github.com/jacroyrees", "_blank")
            }
          />{" "}
        </div>
        <div className="lg:hidden space-y-2">
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
      </div>
      <div className="w-full h-0.5"></div>
    </header>
  );
}

export default Header;
