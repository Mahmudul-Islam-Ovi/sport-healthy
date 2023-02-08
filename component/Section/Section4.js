import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
const element3 = <FontAwesomeIcon icon={faArrowRightLong} />
const Section4 = () => {
    return (
        <div  >
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src="/section1.png" width={100} height={100} className="max-w-sm lg:ml-20 rounded-lg shadow-2xl w-9/12" ></Image>
                    <div className="w-11/12 lg:ml-[400px]">
                        <h1 className="text-5xl ">Best full body </h1>
                        <h1 className="text-5xl ">workout to lose fat</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, natus. id nisi.</p>
                        <div className="btn   w-[220px] bg-[#264373] ">
                        <Link href="/">Get Started </Link>
                            <div className="ml-10">
                                {element3}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;