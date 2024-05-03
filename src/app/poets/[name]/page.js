'use client'

import { useState } from "react"
import TopBar from "@/app/components/barDefault"
import poetstyle from '../../styles/poet.css'
import Image from "next/image"


const Profile = ({ params }) => {

    const [tab, switchTab] = useState(0)
    console.log(tab)



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
                <div className="flex justify-between">
                    <div onClick={() => switchTab(0)} className="w-fu  flex justify-center">
                        <div className="p-2 pl-4  text-center w-">
                            Машҳур
                        </div>
                    </div>

                    <div onClick={() => switchTab(1)} className="w-fu  flex justify-center">
                        <div className="p-2  text-center w-">
                            Навтарин
                        </div>
                    </div>

                    <div onClick={() => switchTab(2)} className="w-fu  flex justify-center">
                        <div className="p-2 pr-4  text-center w-">
                            Ҳифзкарда
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className={tab == 0 ? 'tab_line tab_line_active' : 'tab_line'}></div>
                    <div className={tab == 1 ? 'tab_line tab_line_active' : 'tab_line'}></div>
                    <div className={tab == 2 ? 'tab_line tab_line_active' : 'tab_line'}></div>
                </div>


            </div>


            {
                tab == 0 ? (
                    <h1>Машҳур</h1>

                ) : ('')
            }

            { 
                tab == 1 ? (
                    <h1>Навтарин</h1>

                ) : ('')
            }

            { 
                tab == 2 ? (
                    <h1>Ҳифзкарда</h1>

                ) : ('')
            }

            






          

        </>
    )
}

export default Profile