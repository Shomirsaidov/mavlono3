import Image from 'next/image'
import TopBar from '../components/barPeriodic'
import login from '../styles/login.css'

const Page = () => {
    return (
     <div style={{height: '1500px'}}>
        <TopBar title="" className='topBar'/>

        <div className='pt-16'>

          <div className="p-8 pt-12 md:px-80">
            
            <div className='flex justify-center items-center'>
              <Image className='' src={"/assets/brand/mavlonotj-high-resolution-logo-transparent.png"} width={100} height={100}/>
            </div>
            <h1 className='mt-8 text-center font-black'>Иловаи шеър</h1>

            <div className='space-y-6 mt-8'>
              <textarea type='text' placeholder='Матни шеър' className='form p-4 rounded-lg outline-none'></textarea>
              <input type='text' placeholder='Муаллиф' className='form p-4 rounded-lg outline-none'/>
              <input type='text' placeholder='Тегхо' className='form p-4 rounded-lg outline-none'/>
            </div>

            <button className='next_button text-white p-4 mt-16 rounded-full w-full'>Илова кардан</button>

          </div>


        </div>

        
     </div>
    );
  };
  
  export const metadata = {
      title: 'Сохтани профил дар Mavlono.tj',
      description: 'Сохтани профил дар Mavlono.tj',
      // Add more metadata as needed
  };
  export default Page;














































  