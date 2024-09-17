import { useState } from "react";
import { Menu, X } from "lucide-react";
export const Appbar = ()=>
    {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);

      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
     
        return <div>
<div className="bg-gray-900 shadow-lg">
          <nav className="border bg-gray-900 ">
            <div className="max-w-screen-3xl flex flex-wrap items-center justify-between ml-2 p-4 ">
              <button
                onClick={toggleSidebar}
                className="pt-2 flex text-slate-200 hover:text-gray-400"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex md:order-2">
                <div className={`relative  md:block`}>
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 ml-10"
                      aria-="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-divnecap="round"
                        stroke-divnejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block ml-10 w-96 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-slate-300"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div
                className="ml-auto mr-8 items-center justify-between  w-full md:flex md:w-auto md:order-1"
                id="navbar-search"
              >
                <div>
                  <div
                    className={`flex justify-between space-x-32  bg-gray-900 d:flex-row transition-all duration-300 ${
                      isSidebarOpen ? "max-w-full ml-2" : " mr-96 ml-4 "
                    } `}
                  >
                    <div>
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white text-2xl  "
                      >
                        Networking
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white text-2xl  "
                      >
                        About
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 text-2xl  "
                      >
                        Events
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 text-2xl  "
                      >
                        Job portal
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 text-2xl  "
                      >
                        Login
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 text-2xl  "
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

       
        </div>
    }