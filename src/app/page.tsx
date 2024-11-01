import About from './Components/About';
import ContactMe from './Components/ContactMe';
import Homepage from './Components/Homepage';
import Project from './Components/Project';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
      <div className="snap-start w-screen h-screen flex items-center justify-center">
        <Homepage/>
      </div>
      <div className="snap-start w-[100%] h-screen  items-center justify-center">
        <About/>
      </div>
      <div className="snap-start w-screen h-screen  items-center justify-center  bg-black">
        <Project/>
      </div>
      <div className="snap-start w-screen h-screen  items-center justify-center">
       <ContactMe/>
      </div>
    </div>
  );
}
