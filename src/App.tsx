import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className="max-w-7xl mx-auto p-2 md:p-6 ">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
