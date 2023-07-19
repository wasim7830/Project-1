import React from 'react';

const Footer = ()=>{
  return(
    <>
    <div className="max-w-[1240px] h-[200px] bg-sky-800 rounded-t border-t flex justify-between" >
      <div className="my-[40px]" >
      <h1 className='text-2xl font-bold text-[black] ml-[50px]'>WsCube Tech.</h1>
      <p className="text-white opacity-80 ml-[50px]" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt repellendus perferendis rem iusto veritatis! Reprehenderit voluptate vero explicabo quod error!</p>
      </div>
      <div  className="my-[50px] mr-[20px]">
      <div >
       <tbody>
         <ul>
           <tr>  
             <td className="pl-[80px] text-black text-xl font-bold ">Solution</td>
             <td className="pl-[80px] text-black text-xl font-bold ">Spport</td>
             <td className="pl-[80px] text-black text-xl font-bold ">Company</td>
             <td className="pl-[60px] text-black text-xl font-bold ">Contact</td>
           </tr>
         </ul>
       </tbody>
      </div>
      <div className="" >
      <tbody>
         <ul>
           <tr>
             <td className="pl-[80px] text-white  font-medium opacity-80">Analitical</td>
             <td className="pl-[92px] text-white  font-medium opacity-80">Pracing</td>
             <td className="pl-[96px] text-white  font-medium opacity-80">About</td>
             <td className="pl-[98px] text-white  font-medium opacity-80">7830732395</td>
           </tr>
         </ul>
       </tbody>
      </div>
      <div className="" >
      <tbody>
         <ul>
           <tr>
             <td className="pl-[80px] text-white  font-medium opacity-80">Marking</td>
             <td className="pl-[97px] text-white  font-medium opacity-80">Document</td>
             <td className="pl-[77px] text-white  font-medium opacity-80">Blog</td>
             <td className="pl-[110px] text-white  font-medium opacity-80">9027061564</td>
           </tr>
         </ul>
       </tbody>
      </div>
      <div className="" >
      <tbody>
         <ul>
           <tr>
             <td className="pl-[80px] text-white font-medium opacity-80">Technical</td>
             <td className="pl-[92px] text-white font-medium opacity-80">Privacy</td>
             <td className="pl-[99px] text-white font-medium opacity-80">Articles</td>
             <td className="pl-[92px] text-white font-medium opacity-80">9837603472</td>
           </tr>
         </ul>
       </tbody>
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer;

