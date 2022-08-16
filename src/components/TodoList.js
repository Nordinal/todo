import s from "../style/TodoList.module.css"
import {useSelector} from "react-redux"

const TodoList = (props) => {
    
    return (
        <div className={s.container}>
            <div>
                <input placeholder="Поиск" className={s.seacrh}></input>
            </div>
            <div className={s.itemList}>
                <Items />
            </div>
            <div className={s.divAddButton}>
                <button className={s.addButton}>Добавить +</button>
            </div>
        </div>
    )
}

const Items = (props) => {
    const state = useSelector( state => state.items)

    const getInfo = () => {

    }

    return(
        state.map((item, id) => {
            return(
                <div key={id} className={s.item} onClick={getInfo}>{item.name}<span className={
                    item.state === '0' ? s.circle + " " + s.orangeCircle : 
                    item.state === '1' ? s.circle + " " + s.grayCircle : 
                    item.state === '2' ? s.circle + " " + s.greenCircle : " " 

                }></span></div>
            )
        })
    )
}

export default TodoList