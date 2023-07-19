import React from 'react';
import { IconName,GrGithub } from "react-icons/gr";
import { IconName,DiAndroid,DiApple} from "react-icons/di";
const Plans = ()=>{

return(
  <>
  <div  className=" ml-[50px] my-[50px] md:my-[50px] md:flex justify-center">
   <div className="h-[350px] w-[240px] rounded  mx-5 text-center alin-item-center text-[black] shadow-2xl hover:bg-[#d1d5db] duration-500 hover:scale-110">
    <div  className="mx-[100px] mt-[10px] text-3xl"><GrGithub/></div>
     <h1 className="text-2xl font-bold opacity-80">Web Developnent</h1>
     <h1 className="opacity-80 text-3xl font-bold my-[5px]">$149</h1>
     <h1 className="opacity-80 text-xl font-mefium">Lorem, ipsum dolor.</h1>
     <h1 className="opacity-80 text-xl font-mefium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
     <h1 className="opacity-80 text-xl font-mefium">Lorem, ipsum dolor.</h1>
     <button className="bg-green-500 mx-auto p-3 text-white rounded mt-[20px] hover:bg-black duration-500 text-green-500" >Start Trial</button>
   </div>
   <div className="h-[350px] w-[240px] rounded  shadow-2xl mx-5 text-center alin-item-center text-[black] drop-shadow-md hover:bg-[#d1d5db] duration-500 hover:scale-110">
   <div className="mx-[100px] mt-[10px] text-3xl" ><DiAndroid/></div>
   <h1 className="text-2xl font-bold opacity-80">Digital Markting</h1>
     <h1 className="opacity-80 text-3xl font-bold  my-[5px]">$149</h1>
     <h1 className="opacity-80 text-xl font-mefium">Lorem, ipsum dolor.</h1>
     <h1 className="opacity-80 text-xl font-mefium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
     <h1 className="opacity-80 text-xl font-mefium">Lorem, ipsum dolor.</h1>
     <button className="bg-green-500 mx-auto p-3 text-white rounded mt-[20px] hover:bg-black duration-500 text-green-500" >Start Trial</button>
   </div>
   <div className="h-[350px] w-[240px] rounded  shadow-2xl mx-5 text-center alin-item-center text-[black] drop-shadow-md hover:bg-[#d1d5db] duration-500 hover:scale-110">
   <div className="mx-[100px] mt-[10px] text-3xl" ><DiApple/></div>
   <h1 className="text-2xl font-bold opacity-80">Ehical Hacking</h1>
     <h1 className="opacity-80 text-3xl font-bold my-[5px]">$149</h1>
     <h1 className="opacity-80 text-xl font-mefium">Lorem, ipsum dolor.</h1>
     <h1 className="opacity-80 text-xl font-mefium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
     <h1 className="opacity-80 text-xl font-mefium">Lorem, ipsum dolor.</h1>
     <button className="bg-green-500 mx-auto p-3 text-white rounded mt-[20px] hover:bg-black duration-500 text-green-500" >Start Trial</button>
     </div> 
  </div>
  </>
)

}

export default Plans;
