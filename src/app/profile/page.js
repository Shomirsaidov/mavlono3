import TopBar from "../components/barDefault"
import Image from "next/image"
import profilecss from '../styles/profile.css'

const profile = () => {
    return (
        <>
            <TopBar title="Профил"/>
        
           <div className="px-8">
           <div className="mt-20 md:px-80">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="rounded-full p-4 bg-gray-200 font-bold">OX</div>
                        <div>
                            <div className="font-bold text-xl">Одил Хуршеди</div>
                            <span className="text-white px-2 rounded-md text-sm " style={{background: '#2d2c54'}}>хонанда</span>
                        </div>
                    </div>
                    <img src={'/assets/icons/edit-2.svg'} className="cursor-pointer"/>
                </div>
                <button className="flex items-center space-x-2 bg-gray-200 p-4 rounded-xl mt-8">
                    <div>
                        <a href="/addPoem">
                        Иловаи шеър
                        </a>
                    </div>
                    <div className="text-xl">+</div>
                </button>
            </div>

            <h1 className="text-blue-900 mt-8 text-xl font-bold md:px-80">Шоирони дустдоштаи Хуршед</h1>




            <div className="md:px-80">
            <div className="flex items-center mt-8 space-x-4">
                    <Image src={'/assets/imgs/rumi.png'} 
                        className="poet_rounded" 
                        width={112} 
                        height={112}
                        style={{width: '70px', height: '70px'}} />
                    <div>
                        <a href="/poets/Ҷалолиддини Румӣ">
                            <h1>Ҷалолиддини Румӣ</h1>
                        </a>
                        <span className="text-gray-400 text-sm">4 хонанда</span>
                    </div>
                </div>

                <div className="flex items-center mt-8 space-x-4">
                    <Image src={'/assets/imgs/sadi.jfif'} 
                        className="poet_rounded" 
                        width={112} 
                        height={112}
                        style={{width: '70px', height: '70px'}} />
                    <div>
                        <h1>Саъдии Шерозӣ</h1>
                        <span className="text-gray-400 text-sm">4 хонанда</span>
                    </div>
                </div>


                <div className="flex items-center mt-8 space-x-4">
                    <Image src={'/assets/imgs/khay.jfif'} 
                        className="poet_rounded" 
                        width={112} 
                        height={112}
                        style={{width: '70px', height: '70px'}} />
                    <div>
                        <h1>Умари Хайём</h1>
                        <span className="text-gray-400 text-sm">4 хонанда</span>
                    </div>
                </div>
            </div>

           </div>











        
        </>
    )
}

export default profile