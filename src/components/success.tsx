import { useState } from "react";
import { Menu, X } from "lucide-react";
import ImageSlider from "./imageslider";

const ResponsiveLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [isQuickopen, setIsQuickopen] = useState(false);
  const [isServicesopen, setisServicesopen] = useState(false);
  const [isFreelanceOpen, setIsFreelanceOpen] = useState(false);

  const imageUrls = [
    "WhatsApp Image 2024-09-03 at 4.2.jpg",
    "WhatsApp Image 2024-09-06 at 8.20.00 PM.jpeg",
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen mb-4">
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ${
          isSidebarOpen ? "w-96" : "w-0"
        } border-r `}
      >
        <a href="/" className="flex items-center rtl:space-x-reverse">
          <img
            src="Screenshot from 2024-09-03 17-31-56.png"
            className="ml-10 size-8 w-8 flex rounded mt-3"
            alt="UIET Logo"
          />
          <div className="text-white ml-8 mb-2 text-3xl font-bold mr-10 mt-4">
            Alumni Connect
          </div>
        </a>
        <div className="p-4">
          <a href="/" className="items-center rtl:space-x-reverse">
            <div className="flex flex-row justify-center mr-12">
              <img
                src="uietlogo.jpg"
                className="ml-10 w-32 flex"
                alt="UIET Logo"
              />
            </div>
          </a>
        </div>
        <nav className="flex-grow p-4">
          <ul className="space-y-4">
            <li>
              <div
                onClick={() => setIsDirectoryOpen(!isDirectoryOpen)}
                className="block p-2 hover:bg-gray-500 rounded text-white text-2xl cursor-pointer flex justify-between"
              >
                Alumni Directory
                <span>{isDirectoryOpen ? "▲" : "▼"}</span>
              </div>
              {isDirectoryOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-500 rounded text-white text-xl"
                    >
                      Search Alumni
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-500 rounded text-white text-xl"
                    >
                      Alumni Events
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div
                onClick={() => setIsQuickopen(!isQuickopen)}
                className="block p-2 hover:bg-gray-500 rounded text-white text-2xl cursor-pointer flex justify-between"
              >
                Quick Access
                <span>{isQuickopen ? "▲" : "▼"}</span>
              </div>
              {isQuickopen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-500 rounded text-white text-xl "
                    >
                      Upcoming Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-500 rounded text-white text-xl "
                    >
                      Popular Groups
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-500 rounded text-white text-xl "
                    >
                      Recent jobs
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div
                onClick={() => setisServicesopen(!isServicesopen)}
                className="block p-2 hover:bg-gray-500 rounded text-white text-2xl cursor-pointer flex justify-between"
              >
                Alumni Services
                <span>{isServicesopen ? "▲" : "▼"}</span>
              </div>
              {isServicesopen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-500 rounded text-white text-xl "
                    >
                      Career Counselling
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-500 rounded text-white text-xl "
                    >
                      Mentorship Programs
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-500 rounded text-white text-2xl"
                >
                  Donation Portal
                </a>
              </li>
            </ul>

            <li>
              <div
                onClick={() => setIsFreelanceOpen(!isFreelanceOpen)}
                className="block p-2 hover:bg-gray-500 rounded text-white text-2xl cursor-pointer flex justify-between"
              >
                Freelancing Portal
                <span>{isFreelanceOpen ? "▲" : "▼"}</span>
              </div>
              {isFreelanceOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-500 rounded text-white text-xl "
                    >
                      Project Based Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-500 rounded text-white text-xl "
                    >
                      Full Program
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
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
                      isSidebarOpen ? "translate-x-0" : " mr-96 "
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
        <div className="text-center shadow-md bg-gray-900 text-white text-3xl pb-8 pt-6">
          "Welcome to the UIET, Panjab University's Alumni Association."
          <br />
          <div className="text-xl">
            "Stay connected, grow your network, and support your alma mater."
          </div>
        </div>
        {/* Content area */}
        <main
          className={`flex-1 p-4 transition-all duration-300 ${
            isSidebarOpen ? "ml-0" : "ml-0"
          } justify-center`}
        >
          <div>
            <div className="bg-gray-900 text-center text-2xl font-bold shadow-2xl shadow-red-900 border text-white">
              OUR MOTIVE
            </div>
            <br />
            <div className="text-lg font-medium shadow-2xl border shadow-black p-6">
              Our alumni connect platform offers a comprehensive suite of
              features to strengthen connections and opportunities within our
              community. Users can easily register and network with fellow
              alumni, with intelligent suggestions based on their city and
              profession. The platform also includes an AI-powered profile scan
              to enhance networking opportunities. A dedicated job portal
              provides access to fixed jobs, internships, and referrals, while
              directories sorted by graduation year help users find peers
              quickly. Stay updated with upcoming events, share your success
              stories, and engage with the donation portal, feedback, and report
              features. Additionally, the freelancing portal offers
              project-based work opportunities, making it a versatile resource
              for both personal and professional growth.
            </div>
          </div>
          <br />
          <br />
          <div className="bg-gray-900 text-center text-2xl font-bold shadow-2xl shadow-red-900 border text-white">
              SUCCESS STORIES
            </div>
          <div>
            <ImageSlider images={imageUrls} />
          </div>
          <div className="ml-4 text-md font-medium shadow-2xl border shadow-black p-6">
            We are thrilled to announce that TEAM U.I.E.T. has achieved an
            outstanding feat by securing the All India Rank-2 in the final phase
            of Aerothon 2023 with a cash prize of 1 Lakh, a prestigious
            competition conducted by SAE INDIA. This remarkable accomplishment
            is a testament to the remarkable skills and collaborative efforts
            demonstrated by our team, especially considering that it is their
            inaugural attempt, surpassing even the renowned IITs.<br/> A moment of
            appreciation is due for each member of the team:<br/><br/>
            Manik Singla (ECE 3rd, UEM215129) <br/>
            Ayush Sharma (CSE 3rd, UE213020) <br/>
            Aryan Singh Dhiman (CSE 3rd, UE213020) <br/>
            Tanish (I.T 4th, UEM208125) <br/>
            Akshat Salhotra (MECH 3rd, UE219006) <br/>
            Arulsham Bhasin (MECH 3rd, UE219014) <br/> <br />
             Their outstanding skills, determination, and cohesive teamwork not only
            brought glory to U.I.E.T. but also resulted in surpassing the
            competition from reputed institutions like the IITs. <br />
             The team worked relentlessly under guidance of our startup, Menthosa Solutions in
            Telecommunication Research Lab, CSE <br />
             This accomplishment reflects the excellence and commitment that define U.I.E.T., and we look forward
            to achieving even greater heights in the future. Congratulations to
            the entire team for this phenomenal achievement! 🎉🏆 #TeamUIET
            #Aerothon2023 #ProudMoment
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
