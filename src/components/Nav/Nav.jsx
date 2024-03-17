import { RiAccountCircleLine } from "react-icons/ri";

const Nav = () => {
    return (
        <div>
            <nav className="md:container md:mx-auto">
                {/* <div class="navbar bg-base-100 w-[1320px] h-[56px] mt-2 ml-32"> */}
                <div class="navbar w-[450px] md:w-[1320px] h-[56px] lg:w-full mt-2">
                    <div class="navbar-start flex-1">
                        <div class="dropdown">
                            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabindex="0"
                                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-base shadow bg-base-100 rounded-box w-52">
                                <li><a class="">Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a class="btn btn-ghost font-bold text-[12px] md:text-[32px]">Recipe Calories</a>
                    </div>
                    <div class="navbar-center hidden lg:flex mx-60">
                        <div class="">
                            <ul class="menu text-base menu-horizontal">
                                <li><a class="">Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div class="navbar-end gap-6 ml-6"> */}
                    <div class="navbar-end gap-3">
                        <label class="input input-bordered rounded-3xl w-[80px] h-[40px] md:w-[260px] h-[48px] flex items-center gap-1">
                            <svg className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                            <input type="text" class="grow" placeholder="Search" />
                        </label>
                        <button class="rounded-full bg-[#0BE58A] flex flex-row">
                            <RiAccountCircleLine className="w-[48px] h-[48px]" />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;