import Image from 'next/image'
import TopBar from '../../components/bar'
import login from '../../styles/login.css'
import checkbox from '../../styles/checkbox.css'

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

                
                <div class="checkbox-wrapper-18 flex space-x-2">
                    <div class="round">
                        <input type="checkbox" id="checkbox-20" />
                        <label for="checkbox-20"></label>
                    </div>
                    <label for="checkbox-20">asdsa</label>
                </div>

                <div class="checkbox-wrapper-18 flex space-x-2">
                    <div class="round">
                        <input type="checkbox" id="checkbox-19" />
                        <label for="checkbox-19"></label>
                    </div>
                    <label for="checkbox-19">asdsa</label>
                </div>
                
                

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
  