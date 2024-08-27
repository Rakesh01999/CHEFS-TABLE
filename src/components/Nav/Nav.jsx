import { RiAccountCircleLine } from "react-icons/ri";

const Nav = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between h-[56px] px-4 md:px-8">
                <div className="flex items-center">
                    {/* Dropdown for mobile */}
                    <div className="dropdown lg:hidden">
                        <button tabIndex="0" className="btn btn-ghost p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            <li><a className="hover:text-teal-600">Home</a></li>
                            <li><a className="hover:text-teal-600">Recipes</a></li>
                            <li><a className="hover:text-teal-600">About</a></li>
                            <li><a className="hover:text-teal-600">Search</a></li>
                        </ul>
                    </div>
                    {/* Logo */}
                    <a className="font-bold text-lg md:text-2xl text-teal-600">Recipe Calories</a>
                </div>

                {/* Centered menu for larger screens */}
                <div className="hidden lg:flex items-center space-x-8">
                    <a className="hover:text-teal-600">Home</a>
                    <a className="hover:text-teal-600">Recipes</a>
                    <a className="hover:text-teal-600">About</a>
                    <a className="hover:text-teal-600">Search</a>
                </div>

                {/* Search and Account */}
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input type="text" placeholder="Search" className="input input-bordered w-[80px] h-[40px] md:w-[260px] h-[48px] rounded-full pl-10 pr-4" />
                        <svg className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <button className="rounded-full bg-teal-500 text-white p-2 md:p-3">
                        <RiAccountCircleLine className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
