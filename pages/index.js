// import Image from "next/image";
// import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronRight, faCirclePlay, faArrowRightLong, faPerson, faArrowRight, faPersonBiking, faPersonRunning } from '@fortawesome/free-solid-svg-icons';

import Header from "@/component/Header/Header";
import Section1 from "@/component/Section/Section1"; 
import Section2 from "@/component/Section/Section2"; 
import Section3 from "@/component/Section/Section3"; 
import Section4 from "@/component/Section/Section4"; 



export default function Home() {
  // const menuItems = <>
  //   <li><Link href='/'>HOME</Link></li>
  //   <li><Link href='/'>PROGRAM</Link></li>
  //   <li><Link href='/'>BLOG</Link></li>
  //   <li><Link href='/'>ABOUT US</Link></li>
  // </>
  // const element = <FontAwesomeIcon icon={faCircleChevronRight} />
  // const element2 = <FontAwesomeIcon icon={faCirclePlay} />
  // const element3 = <FontAwesomeIcon icon={faArrowRightLong} />
  // const person = <FontAwesomeIcon icon={faPerson} size="4x" color="white" />
  // const arrow = <FontAwesomeIcon icon={faArrowRight} />
  // const biking = <FontAwesomeIcon icon={faPersonBiking} color="white" size="4x" />
  // const running = <FontAwesomeIcon icon={faPersonRunning} color="white" size="4x" />
  return (
    <div>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
    // <div>
    //   {/* header  */}
    //   <div className="navbar  top-5 ">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //         </label>
    //         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52">
    //           {menuItems}
    //         </ul>
    //       </div>
    //       <a className="btn btn-ghost normal-case lg:ml-20 text-xl"><span className=" rounded-box p-1 text-white bg-[#6462F0]" >Gym </span> <span className="text-[#6765F0]">baran  </span></a>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal ml-[780px] px-1">
    //         {menuItems}
    //       </ul>
    //     </div>
    //     <div className=" xl:navbar-end  lg:mr-20 ">
    //       <div className="btn w-[140px] bg-[#264373] ">
    //         <Link href='/'>LOGIN</Link>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Section-1  */}
    //   <div>
    //     <div className="hero min-h-screen ">
    //       <div className="hero-content flex-col lg:flex-row-reverse">
    //         <Image src="/section1.png" width={100} height={100} className="max-w-sm lg:ml-[140px] rounded-lg shadow-2xl w-9/12"></Image>

    //         <div className="lg:w-5/12 lg:mr-[400px]">
    //           <h1 className="text-5xl font-bold">Healthy  in side </h1>
    //           <h1 className="text-5xl  font-bold"><span className=" text-[#6462F0]" >fresh</span> out side</h1>
    //           <p className="py-6 ">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
    //           <div className="flex">
    //             <div className="btn  w-[180px] bg-[#264373] ">
    //               <Link href="/"> GET STARTED </Link>
    //               <p className="ml-10">{element}</p>

    //             </div>
    //             <div className="btn bg-white hover:bg-white text-black  shadow-2xl ml-5 w-[190px]">
    //               <div className="mr-3">
    //                 {element2}
    //               </div>
    //               <Link href="/"> Learn mores </Link>

    //             </div>
    //           </div>

    //           <div className="mt-3">
    //             <div>
    //               Brands :
    //             </div>
    //             <div className="flex mt-5">
    //               <div >
    //                 <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" width={40} srcset="" />
    //               </div>
    //               <div className="ml-10">
    //                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="adidas" width={40} srcset="" />
    //               </div>
    //               <div className="ml-10">
    //                 <img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" alt="Puma Logo" width={50} srcset="" />
    //               </div>
    //               <div className="ml-10">
    //                 <img src="https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/800x600/321447.jpg" alt="Reebook Logo" width={50} srcset="" />
    //               </div>
    //             </div>
    //           </div>

    //         </div>

    //       </div>
    //     </div>
    //   </div>
    //   {/* Section-2  */}
    //   <div className="lg:mt-[-350px] ">
    //     <div className="hero min-h-screen">
    //       <div className="hero-content flex-col lg:flex-row">
    //         <div className="w-11/12">
    //           <h1 className="text-5xl">Healthy  in side </h1>
    //           <h1 className="text-5xl">fresh out side</h1>
    //         </div>

    //         <div className="w-11/12">

    //           <p className="py-6   ">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Section-3  */}
    //   <div className="mt-[-200px] m-auto p-20 justify-between hero-content flex-col lg:flex-row card card-side bg-[#6462F0] shadow-xl" >

    //     {/* content-1 */}
    //     <div className="">
    //       <div className="flex">
    //         <div>
    //           {person}
    //         </div>
    //         <div className='text-white ml-5 font-bold'>
    //           <p>Get that 11 line in 30 days</p>
    //           <p>in 30 days</p>
    //           <div className="btn no-underline text-base-300 btn-link">
    //             <Link href=""> Learn More </Link>
    //             <p className="ml-2">{arrow}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* content-2*/}
    //     <div>
    //       <div className="flex">
    //         <div>
    //           {biking}
    //         </div>
    //         <div className='text-white ml-5 font-bold'>
    //           <p>14 Days </p>
    //           <p>shered challange</p>
    //           <div className="btn no-underline text-base-300 btn-link">
    //             <Link href=""> Learn More </Link>
    //             <p className="ml-2">{arrow}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* content-3 */}
    //     <div>
    //       <div className="flex">
    //         <div>
    //           {running}
    //         </div>
    //         <div className='text-base-300 ml-5 font-bold'>
    //           <p>Get flat belly</p>
    //           <p>in 30 days</p>
    //           <div className="btn no-underline text-white btn-link">
    //             <Link href=""> Learn More </Link>
    //             <p className="ml-2">{arrow}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>


    //   </div>
    //   {/* Section-4  */}
    //   <div  >
    //     <div className="hero min-h-screen ">
    //       <div className="hero-content flex-col lg:flex-row">
    //         <Image src="/section1.png" width={100} height={100} className="max-w-sm lg:ml-20 rounded-lg shadow-2xl w-9/12" ></Image>
    //         <div className="w-11/12 lg:ml-[400px]">
    //           <h1 className="text-5xl ">Best full body </h1>
    //           <h1 className="text-5xl ">workout to lose fat</h1>
    //           <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, natus. id nisi.</p>
    //           <div className="btn   w-[220px] bg-[#264373] ">
    //             <Link href="/">Get Started </Link>
    //             <div className="ml-10">
    //               {element3}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>


    // </div>
  )
}
