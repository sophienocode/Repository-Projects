/* eslint-disable no-unused-vars */

import { useState } from "react"


import {

    FaSearch,
    FaBell,
    FaHome,
    FaFolder,
    FaRegCalendar,
    FaRegUser,

} from "react-icons/fa";


const navItems = [
    { name: "Projects", icon:FaFolder, href: "#projects"},
    /*
    { name: "Dashboard", icon:FaHome},
    { name: "Team", icon:FaRegUser},
    
    { name: "Calendar", icon:FaRegCalendar  },
    
    
    */
]



export default function Header() {

    const [ activeTab, setActiveTab ] = useState("Projects");
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    
   



  return (
    <>
      <div className="max-4 sm:mx-6 " >
        <header className="bg-black border border-gray-800 rounded-2xl shadow-2xl p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-8">
                    <nav className="hidden lg:flex gap-4">
                     {navItems.map(({ name, icon: Icon, href  }) => ( 
                        <a 
                        href={href}
                        key={name}
                        className={` ${activeTab === name ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-green-900" }   flex items-center gap-2 px-4 py-2 rounded-xl text-lg`}
                        onClick={() => setActiveTab(name)}
                        >
                            <Icon size={20} />
                            <span> {name} </span>
                        </a>
                     ))}  
                        
                    </nav>
                    <button 
                    className="lg:hidden p-2 rounded-xl bg-gray-900 border-gray-700 hover:bg-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    >
                        <div className="w-5 h-5 flex flex-col justify-center items-center">
                            <div className={ `w-4 h-0.5 bg-white transition-all ${isMobileMenuOpen?"rotate-45 translate-y-1.5":"" 
                            }`} 
                            />
                            
                            <div className={ `w-4 h-0.5 bg-white mt-1 transition-all ${isMobileMenuOpen?" opacity-0 ":""    
                            }`}
                            />

                            <div className={ `w-4 h-0.5 bg-white mt-1 transition-all ${isMobileMenuOpen?" -rotate-45 -translate-y-1.5 ":""    
                            }`}
                            />
                            
                        </div>
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative hidden sm:block">
                        <FaSearch className="absolute left-3 top-10 -translate-y-7 text-gray-500"/>
                        <div className="flex items-center gap-3">
                        <input
                            className="bg-gray-900 border rounded-xl pl-10 pr-4 py-2 w-40 md:w-64 text-white placeholder-gray-700 focus:outline-none border-gray-500"
                            placeholder="Search"
                            type="text"
                        />

                        <button className="p-2 rounded-xl bg-gray-900 border border-gray-700 hover:bg-gray-800"> 
                            <div className="size-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                            <FaBell className="text-gray-400 hover:text-white size-5" />
                            </div>     
                        </button>
                        </div>
                    
                    </div>
                </div>
            </div>
            {
            isMobileMenuOpen&&(
                <div
            
                className="lg:hidden mt-4 pt-4">
                    <nav className="grid grid-cols-2 gap-4">
                        {navItems.map(({ name, icon: Icon , href}) => ( 
                        <a
                        href={href}
                        key={name}
                        className={` ${activeTab === name ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-green-900" }   flex items-center gap-2 px-4 py-2 rounded-xl text-lg`}
                        onClick={() => setActiveTab(name)}
                        >
                            <Icon size={20} />
                            <span> {name} </span>
                        </a>
                     ))}  
                    </nav>
                </div>
            )}
        </header>
      </div>
    </>
  )
}
