import TopBar from "@/app/components/barDefault"
import poemstyles from '../../styles/poem.css' 
import Poem from '../../components/poem'

const PoemPage = ({params}) => {
    return (
        <>

            <TopBar title={"Саъди Шерози"}/>
            
            <div className="mygrey p-8 pt-20 px-16 text-sm">

            Фироки дустонаш боду ёрон<br/>
            Ки моро дур кард аз дустдорон<br/>
            Дилам дар банди танхои бифарсуд<br/>
            Чу булбул дар кафас рузи бахорон<br/>
            Халоки мо чунон махмил гирифтанд<br/>
            Чу катли мур зери пои саворон<br/>
            Ба хайли хар ки меоям ба зинхор<br/>
            Намебинам чух зинхорхорон<br/>
            Надонистам ки дар поёни сухбат<br/>
            Чунин бошад вафои хакгузорон<br/>
            Ба ганчи шойгон афтода будам<br/>
            Надонистам, ки бар ганчанд морон<br/>
            Дило гар дусти дори ба ночор<br/>
            Бибояд бурданат чаври хазорон<br/>
            Хилофи шарти ерон аст, Саъди<br/>
            Ки баргарданд рузи тирборон<br/>
            Чи хуш бошад саре дар пои ере<br/>
            Ба ихлосу иродат чонсупорон !<br/>

            <div className="flex justify-between items-center mt-4">
                <div style={{color: '#6865FF'}}>02.04.2024</div>
                <div className="flex justify-between items-center space-x-2">
                    <img src={'/assets/icons/like.svg'} width={25} className=""/>
                    <div>2345</div>
                </div>                
                <img src={'/assets/icons/bookmark.svg'} width={15} className=""/>
            </div>


            </div>


            <div className="flex flex-wrap wrap px-16 mt-4 space-y-2 space-x-2">
                <div className="tags mt-2 ml-2">#ишк</div>
                <div className="tags">#мухаббат</div>
                <div className="tags">#дунё</div>
                <div className="tags">#саъди</div>
                <div className="tags">#одамият</div>
                <div className="tags">#ишк</div>
            </div>

            <h1 className="text-blue-900 mt-8 text-xl font-bold md:px-80">Монанди ин</h1>

            <Poem/>










        </>
    )
}

export default PoemPage