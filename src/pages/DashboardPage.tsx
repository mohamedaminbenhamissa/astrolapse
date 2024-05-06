import Navbar from "../components/Navbar";




const DashboardPage: React.FC = () => {
  console.log("local storage", localStorage.getItem("currentUser"));

  return (
    <div className="min-w-full">
      <Navbar />
      <div className="bg-[#F9F9F9] h-full p-2 rounded-lg mt-[2%] mr-[1%]">
        
      </div>
    </div>
  );
};

export default DashboardPage;
