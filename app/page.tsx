import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black text-white  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{name:"Home",link:"",icon:<FaHome/>},{name:"About",link:"",icon:<FaUser/>}]} />
        < Hero />
        <Grid/>
        </div>
    </main>
  );
}
