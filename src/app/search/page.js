import TopBar from "../components/barDefault"
import poet from '../styles/af.css'
import Image from "next/image"


const page = ()=> {
    return (
        <>
            <TopBar/>
            <div className="px-8">
                <div className="flex items-center mt-20 p-2 justify-between bg-gray-200 rounded-full w-full">
                    <input type="text" className="bg-gray-200 px-4" placeholder="Бишнав аз най чун..."/>
                    <div className="rounded-full p-4 bg-blue-800">
                        <img src={'/assets/icons/search.svg'} className="cursor-pointer"/>
                    </div>
                </div>


                <div className="p-4 bg-gray-200 rounded-3xl mt-8 space-y-2">
                    <div className="flex items-center space-x-4">
                        <img src={'/assets/icons/clock-1.svg'} className="cursor-pointer"/>
                        <div>Дил мукими куи чонон асту...</div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src={'/assets/icons/clock-1.svg'} className="cursor-pointer"/>
                        <div>Дигар ба кучо меравад...</div>
                    </div><div className="flex items-center space-x-4">
                        <img src={'/assets/icons/clock-1.svg'} className="cursor-pointer"/>
                        <div>Дарде ки набояд зистан...</div>
                    </div>
                </div>

                <h1 className="text-blue-900 mt-8 text-xl font-bold">Каталог</h1>

                <div className="flex items-center mt-8 space-x-4">
                    <Image src={'/assets/imgs/rumi.png'} 
                        className="poet_rounded" 
                        width={112} 
                        height={112}
                        style={{width: '70px', height: '70px'}} />
                    <div>
                        <h1>Ҷалолиддини Румӣ</h1>
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

                <div className="flex items-center mt-8 space-x-4">
                    <Image src={'/assets/imgs/bedil.jfif'} 
                        className="poet_rounded" 
                        width={112} 
                        height={112}
                        style={{width: '70px', height: '70px'}} />
                    <div>
                        <h1>Абулқодири Бедил</h1>
                        <span className="text-gray-400 text-sm">4 хонанда</span>
                    </div>
                </div>






            </div>
        
        </>
    )
}

export default page