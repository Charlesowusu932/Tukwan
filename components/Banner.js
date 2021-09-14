import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px]  sm:h-[400px]  lg:h-[500px]  xl:h-[550px] ">
             <Image src="http://links.papareact.com/0fm"  className=" "
                layout="fill"
                objectFit="cover"
                />


                <div className="absolute w-full text-center top-1/2 ">
                   <h1 className="text-lg my-4 font-semibold">Not sure where to go? Perfect.</h1>
                   <button className="bg-white px-10 py-4 shadow-lg  rounded-full 
                   text-purple-500 font-bold hover:shadow-xl active:scale-90 transition duration-150
                   ">I'm Flexible</button>
                </div>
            
        </div>
    )
}

export default Banner
