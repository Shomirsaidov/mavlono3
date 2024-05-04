import TopBar from "../components/barDefault"
import profilecss from '../styles/profile.css'

const profile = () => {
    return (
        <>
            <TopBar/>
        
            <div className="mt-20 px-8">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="rounded-full p-4 bg-gray-200 font-bold">OX</div>
                        <div>
                            <div className="font-bold text-xl">odil khurshedi</div>
                            <span className="text-white px-2 rounded-md text-sm " style={{background: '#2d2c54'}}>хонанда</span>
                        </div>
                    </div>
                    <img src={'/assets/icons/edit-2.svg'} className="cursor-pointer"/>
                </div>
                <button className="flex items-center space-x-2 bg-gray-200 p-4 rounded-xl mt-8">
                    <div>Иловаи шеър</div>
                    <div className="text-xl">+</div>
                </button>
            </div>
        
        </>
    )
}

export default profile