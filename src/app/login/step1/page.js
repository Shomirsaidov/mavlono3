import Image from 'next/image'
import TopBar from '../../components/bar'
import login from '../../styles/login.css'

const Page = () => {
    return (
     <div style={{height: '1500px'}}>
        <TopBar title="" className='topBar'/>

        <div className='pt-16'>

          <div className="p-8 pt-12">
            <div className='flex justify-center space-x-4 mb-16'>
              <div className='progress_circle progress_active'></div>
              <div className='progress_circle'></div>
              <div className='progress_circle'></div>
            </div>
            <div className='flex justify-center items-center'>
              <Image className='' src={"/assets/brand/mavlonotj-high-resolution-logo-transparent.png"} width={100} height={100}/>
            </div>
            <h1 className='mt-8 text-center font-black'>Даромадан ба профил</h1>

            <div className='space-y-6 mt-8'>
              <input type='text' placeholder='Ному насаб' className='form p-4 rounded-lg outline-none'/>
              <input type='text' placeholder='Почтаи электрони' className='form p-4 rounded-lg outline-none'/>
              <input type='text' placeholder='Раками телефон' className='form p-4 rounded-lg outline-none'/>
              <input type='password' placeholder='Парол' className='form p-4 rounded-lg outline-none'/>
            </div>

            <button className='next_button text-white p-4 mt-16 rounded-full w-full'>Давом додан</button>

          </div>


        </div>

        
     </div>
    );
  };
  
  export const metadata = {
      title: 'Даромадан ба профил Mavlono.tj',
      description: 'Даромадан ба профил Mavlono.tj',
      // Add more metadata as needed
  };
  export default Page;














































  