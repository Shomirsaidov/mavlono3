const Poem = (props) => {
    return (
        <>
            <div className="flex justify-center px-16 mt-8">
                <div>
                    <div className="text-sm">
                    Ай Худо, ин васлро ҳиҷрон макун! <br/>
                    Сархушони ишқро нолон макун! <br/>
                    Боғи ҷонро тозаву сарсабз дор! <br/>
                    Қасди ин мастону ин бустон макун!   
                    </div>
                    <button style={{color: '#6865FF'}}>...муфассал</button>

                    <div className="flex justify-between mt-4">
                        <div style={{color: '#6865FF'}}>02.04.2024</div>
                        <div className="flex justify-between space-x-2">
                            <img src={'/assets/icons/like.svg'} width={25} className="mb-2"/>
                            <span>2345</span>
                        </div>                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poem