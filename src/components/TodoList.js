import s from "../style/TodoList.module.css"
import {useDispatch, useSelector} from "react-redux"

const TodoList = (props) => {
    const state = useSelector( state => state)
    const dispatch = useDispatch()
    //Создаем новый элемент в массиве при нажатии на кнопку Добавить
    const setNewItem = () => {
        dispatch({type: "SET_NEW_ITEM"})
    }
    //Обновляем параметры поиска при внесении изменений в поле "Поиск"
    const seacrhItem = (e) => {
        dispatch({type: "SEARCH", payload: e.target.value})
    }
    return (
        <div className={s.container}>
            <div>
                <input placeholder="Поиск" className={s.seacrh} onChange={seacrhItem} value={state.search}></input>
            </div>
            <div className={s.itemList}>
                <Items search={state.search} current={state.current}/>
            </div>
            <div className={s.divAddButton}>
                <button className={s.addButton} onClick={setNewItem}>Добавить +</button>
            </div>
        </div>
    )
}

const Items = (props) => {
    const state = useSelector( state => state.items)
    const dispatch = useDispatch()
    //Изменяем активный элемент
    const getInfo = (e) => {
        dispatch({type: "CHANGE_CURRENT_ITEM", payload: parseInt(e.target.getAttribute("dataid"))})
    }

    return(
        state.map((item, id) => {
            // Сравниваемые элементы с значением из поля Поиск, если название включает себя подстроку поиска, то выводим результат
            if(item.name.toLowerCase().includes(props.search.toLowerCase())){
                return(
                    <div key={id} className={
                        props.current === id ? s.item + " " + s.itemred : s.item + " " + s.itemblue
                    } onClick={getInfo} dataid={id}>{item.name}<span className={
                        item.state === '0' ? s.circle + " " + s.orangeCircle : 
                        item.state === '1' ? s.circle + " " + s.grayCircle : 
                        item.state === '2' ? s.circle + " " + s.greenCircle : " " 
    
                    }></span></div>
                )
            }
        })
    )
}

export default TodoList