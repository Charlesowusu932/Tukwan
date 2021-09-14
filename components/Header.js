import Image from "next/image"

function Header() {
    return (
        <header className="sticky top-0 z-50 p-4 grid grid-cols-3 bg-white shadow-sm md:px-10  ">
            
            
            {/* logo side */}
            <div className="relative flex items-center h-8 my-auto ">
                <Image src="http://links.papareact.com/qd3"  className="cursor-pointer "
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>
              {/* logo side */}

            {/*search side */}
                <div className=" md:border-2  md:shadow-sm  rounded-full	flex  md:px-3">
                    <input type="search" className=" outline-none text-sm bg-transparent flex-grow text-gray-400 placeholder-gray-400" placeholder="Start your search" />
                    <p className="hidden md:inline-flex bg-red-400 p-2 rounded-full text-white cursor-pointer  " >S</p>
                </div>
            {/*search side */}


             {/* Login and signup links */}
              <div className="flex justify-end items-center">
                 <p className="text-gray-500 cursor-pointer">Become a Host</p>

              </div>
            {/* Login and signup links */}

            
        </header>
    )
}

export default Header
