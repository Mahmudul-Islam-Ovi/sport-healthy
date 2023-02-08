import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faArrowRight, faPersonBiking, faPersonRunning } from '@fortawesome/free-solid-svg-icons';


const person = <FontAwesomeIcon icon={faPerson} size="4x" color="white" />
const arrow = <FontAwesomeIcon icon={faArrowRight} />
const biking = <FontAwesomeIcon icon={faPersonBiking} color="white" size="4x" />
const running = <FontAwesomeIcon icon={faPersonRunning} color="white" size="4x" />

const Section3 = () => {
    return (
        <div className="mt-[-200px] m-auto p-20 justify-between hero-content flex-col lg:flex-row card card-side bg-[#6462F0] shadow-xl" >

            {/* content-1 */}
            <div className="">
                <div className="flex">
                    <div>
                        {person}
                    </div>
                    <div className='text-white ml-5 font-bold'>
                        <p>Get that 11 line in 30 days</p>
                        <p>in 30 days</p>
                        <div className="btn no-underline text-base-300 btn-link">
                            <Link href=""> Learn More </Link>
                            <p className="ml-2">{arrow}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* content-2*/}
            <div>
                <div className="flex">
                    <div>
                        {biking}
                    </div>
                    <div className='text-white ml-5 font-bold'>
                        <p>14 Days </p>
                        <p>shered challange</p>
                        <div className="btn no-underline text-base-300 btn-link">
                            <Link href=""> Learn More </Link>
                            <p className="ml-2">{arrow}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* content-3 */}
            <div>
                <div className="flex">
                    <div>
                        {running}
                    </div>
                    <div className=' text-white ml-5 font-bold'>
                        <p>Get flat belly</p>
                        <p>in 30 days</p>
                        <div className="btn no-underline text-base-300 btn-link">
                            <Link href=""> Learn More </Link>
                            <p className="ml-2">{arrow}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Section3;