import TopBar from "@/app/components/barDefault"
import poetstyle from '../../styles/poet.css'
import Image from "next/image"

const Profile = ({ params }) => {
    return (
        <>
            <TopBar title={decodeURI(params.name)}/>
                
            <div className="mygrey rounded-b-3xl p-8 pt-20">
                <div className="flex justify-center">
                    <Image src={'/assets/imgs/rumi.png'} 
                    className="poet_rounded" 
                    width={112} 
                    height={112}
                    style={{width: '100px', height: '100px'}} />
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                    <h1>{decodeURI(params.name)}</h1>
                    <img src={'/assets/icons/tick.svg'} width={16}/>
                </div>
                <div className="flex justify-center items-center space-x-8 mt-4">
                    <div className="flex flex-col items-center">
                        <img src={'/assets/icons/edit-2.svg'} width={25} className="mb-2"/>
                        <div className="text-center text-sm">57</div>
                        <span className="super-small">Editors</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={'/assets/icons/glass-1.svg'} width={25} className="mb-2"/>
                        <div className="text-center text-sm">57</div>
                        <span className="super-small">Editors</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={'/assets/icons/book.svg'} width={25} className="mb-2"/>
                        <div className="text-center text-sm">57</div>
                        <span className="super-small">Editors</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className='outline-none next_button text-white p-4 mt-8 rounded-md text-xs'>Подписаться</button>
                </div>
            </div>

            <div className=" mt-4 mygrey rounded-t-3xl pb-0">
                <div className="flex justify-around">
                    <div>
                        <div className="p-2  text-center w-1/3">
                            Машҳур
                        </div>
                    </div>

                    <div>
                        <div className="p-2  text-center w-1/3">
                            Навтарин
                        </div>
                    </div>

                    <div>
                        <div className="p-2  text-center w-1/3">
                            Ҳифзкарда
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="tab_line "></div>
                    <div className="tab_line tab_line_active"></div>
                    <div className="tab_line "></div>
                </div>


            </div>

            

          

        </>
    )
}

export default Profile