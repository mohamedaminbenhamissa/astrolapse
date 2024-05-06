import logo from "../assets/astrolab.png";

const Logo = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col">
      <img src={logo} alt="Logo" className="w-80 h-80" />
      <h1 className="flex justify-center text-[#A58A76] font-gagalin text-4xl mt-4 ml-4">AstroLapse</h1>
      <h2 className="flex justify-center text-[#A58A76] font-gagalin">Illuminate Your Time, Empower Your Projects.</h2>
      </div>
      
    </div>
  );
};

export default Logo;
