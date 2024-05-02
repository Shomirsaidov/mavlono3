import Uploader from '../components/uploader'

const Page = () => {
  return (
    <>
      <h1 className='bg-blue-800 text-white font-bold rounded-xl rounded-t-none text-center p-2'>Upload Page</h1>
      <div className='flex justify-center my-8'>
        <div className='justify-between' style={{maxWidth: '1170px'}}>
          <Uploader/>
        </div>
      </div>
    </>
  )
}


export default Page