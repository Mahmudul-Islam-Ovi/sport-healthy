import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const element = <FontAwesomeIcon icon={faCircleChevronRight} />
  const element2 = <FontAwesomeIcon icon={faCirclePlay} />
 

const Section1 = () => {
    return (
        <div >
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image src="/section1.png" width={100} height={100} className="max-w-sm lg:ml-[140px] rounded-lg shadow-2xl w-9/12"></Image>

                <div className="lg:w-5/12 lg:mr-[400px]">
                    <h1 className="text-5xl font-bold">Healthy  in side </h1>
                    <h1 className="text-5xl  font-bold"><span className=" text-[#6462F0]" >fresh</span> out side</h1>
                    <p className="py-6 ">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                    <div className="flex">
                        <div className="btn  w-[180px] bg-[#264373] ">
                            <Link href="/"> GET STARTED </Link>
                            <p className="ml-10">{element}</p>

                        </div>
                        <div className="btn bg-white hover:bg-white text-black  shadow-2xl ml-5 w-[190px]">
                            <div className="mr-3">
                                {element2}
                            </div>
                            <Link href="/"> Learn mores </Link>

                        </div>
                    </div>

                    <div className="mt-3">
                        <div>
                            Brands :
                        </div>
                        <div className="flex mt-5">
                            <div >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" width={40} srcset="" />
                            </div>
                            <div className="ml-10">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="adidas" width={40} srcset="" />
                            </div>
                            <div className="ml-10">
                                <img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" alt="Puma Logo" width={50} srcset="" />
                            </div>
                            <div className="ml-10">
                                <img src="https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/800x600/321447.jpg" alt="Reebook Logo" width={50} srcset="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </div>
    );
};

export default Section1;