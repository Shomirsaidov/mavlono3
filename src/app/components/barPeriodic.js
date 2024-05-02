const TopBar = (props) => {
    return (
       <div className="fixed w-full border-b-2 p-4 bg-white" style={{zIndex: 5}}>

            <div className="flex justify-between align-items-center">
                <img src={'/assets/icons/arrow-left.svg'} className="cursor-pointer"/>
                <h1>{props.title}</h1>
                <h1></h1>            
            </div>

       </div>
    )
}


export default TopBar 