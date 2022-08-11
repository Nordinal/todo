import s from "../style/TodoList.module.css"

const TodoList = (props) => {

    return (
        <div className={s.container}>
            <div>
                <input placeholder="Поиск" className={s.seacrh}></input>
            </div>
            <div className={s.itemList}>
                <div className={s.item}>Сделать то-то</div>
                <div className={s.item}>Сделать еще</div>
                <div className={s.item}>Сделать то-то</div>
                <div className={s.item}>Сделать еще</div>
                <div className={s.item}>Сделать то-то</div>
                <div className={s.item}>Сделать еще</div>
                <div className={s.item}>Сделать то-то</div>
                <div className={s.item}>Сделать еще</div>
                <div className={s.item}>Сделать то-то</div>
                <div className={s.item}>Сделать еще</div>
                <div className={s.item}>Сделать то-то</div>
                <div className={s.item}>Сделать еще</div>
                <div className={s.item}>Сделать то-то</div>
                <div className={s.item}>Сделать еще</div>
                <div className={s.item}>Сделать то-то</div>
                <div className={s.item}>Сделать еще</div>
            </div>
            <div className={s.divAddButton}>
                <button className={s.addButton}>Добавить +</button>
            </div>
        </div>
    )
}

export default TodoList