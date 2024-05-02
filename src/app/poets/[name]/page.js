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
            </div>

        </>
    )
}

export default Profile