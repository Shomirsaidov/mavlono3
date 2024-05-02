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
                    <label for="checkbox-20">Чалолиддини Руми</label>
                </div>

                <div class="checkbox-wrapper-18 flex space-x-2">
                    <div class="round">
                        <input type="checkbox" id="checkbox-22" />
                        <label for="checkbox-19"></label>
                    </div>
                    <label for="checkbox-22">Саъди Шерози</label>
                </div>

                <div class="checkbox-wrapper-18 flex space-x-2">
                    <div class="round">
                        <input type="checkbox" id="checkbox-23" />
                        <label for="checkbox-19"></label>
                    </div>
                    <label for="checkbox-23">Хофизи Шерози</label>
                </div>

                <div class="checkbox-wrapper-18 flex space-x-2">
                    <div class="round">
                        <input type="checkbox" id="checkbox-24" />
                        <label for="checkbox-19"></label>
                    </div>
                    <label for="checkbox-24">Абулкодири Бедил</label>
                </div>

                <div class="checkbox-wrapper-18 flex space-x-2">
                    <div class="round">
                        <input type="checkbox" id="checkbox-25" />
                        <label for="checkbox-19"></label>
                    </div>
                    <label for="checkbox-25">Лоик Шерали</label>
                </div>

                <div class="checkbox-wrapper-18 flex space-x-2">
                    <div class="round">
                        <input type="checkbox" id="checkbox-26" />
                        <label for="checkbox-26"></label>
                    </div>
                    <label for="checkbox-19">Фаридуддини Аттор</label>
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
  
