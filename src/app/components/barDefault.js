
const TopBar = (props) => {
    return (
       <div className="fixed w-full border-b-2 p-4 bg-white" style={{zIndex: 5, top: '0px'}}>

            <div className="flex justify-between align-items-center">
                <a className="/profile">
                    <img src={'/assets/icons/profile-circle.svg'} className="cursor-pointer" width={30} height={30}/>
                </a>
                <h1>{props.title}</h1>
                <a href="/search">
                    <img src={'/assets/icons/search-normal-1.svg'} className="cursor-pointer"/>
                </a>
            </div>

       </div>
    )
}


export default TopBar 