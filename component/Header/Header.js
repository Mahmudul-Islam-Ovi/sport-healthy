import Link from "next/link";

const Header = () => {
    const menuItems = <>
        <li><Link href='/'>HOME</Link></li>
        <li><Link href='/'>PROGRAM</Link></li>
        <li><Link href='/'>BLOG</Link></li>
        <li><Link href='/'>ABOUT US</Link></li>
    </>

    return (
        <div className="navbar  top-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case lg:ml-20 text-xl"><span className=" rounded-box p-1 text-white bg-[#6462F0]" >Gym </span> <span className="text-[#6765F0]">baran  </span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal ml-[780px] px-1">
                    {menuItems}
                </ul>
            </div>
            <div className=" xl:navbar-end  lg:mr-20 ">
                <div className="btn w-[140px] bg-[#264373] ">
                    <Link href='/'>LOGIN</Link>
                </div>
            </div>
        </div>

    );
};

export default Header;