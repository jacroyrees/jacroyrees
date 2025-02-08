function ImageContainer() {
  return (
    <div className="w-full h-[50vh] sm:h-[90vh] flex items-center justify-center relative">
      <div className="relative w-[60%] md:w-[80%] h-[60%] rounded-lg bg-[#313131] shadow-xl items-center justify-center hidden md:flex">
        <img
          src="public/jacroyrees.jpeg"
          alt="hello"
          className="absolute w-full h-full rounded-lg shadow-xl object-cover transform -translate-x-[5%] -translate-y-[5%]"
        />
      </div>
      <img
        src="/jacroyrees.jpeg"
        alt="hello"
        className="md:hidden w-[80%] md:w-[10%] h-[60%] rounded-lg shadow-xl object-cover"
      />
    </div>
  );
}

export default ImageContainer;