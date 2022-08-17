import s from '../style/TodoSettings.module.css'
import {useSelector, useDispatch} from "react-redux"
import { useEffect, useState } from 'react'

const TodoSettings = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    //Чтобы изменения сразу не отображались в общем хранилище, записываем данные в локальное хранилище
    const [localState, setLocalState] = useState(state.items[state.current]) 
    //При изменении активного элемента или удалении элемента перересовываем компонент чтобы записать актуальные данные
    useEffect(() => {
        // Если элементов нет то ставим заглушку
        if(state.items.length === 0){
            setLocalState({name: "", description: "", state: "0"})
        }else{
            setLocalState(state.items[state.current])
        }
    }, [state.current || state.items])
    //Создаем управляемые поля, где разделяем UX и хранилище
    const updateField = (e) => {
        const field = e.target.getAttribute("dataname")
        setLocalState({...localState, [field]: e.target.value})
    }
    //Редактируем существующий элемент
    const submit = () => {
        dispatch({type: "UPDATE_ITEM", payload: localState})
    }
    //Удаляем активный элемент
    const deleteItem = () => {
        dispatch({type: "DELETE_ITEM"})
    }
    return (
        <div className={s.container}>
            <p>Настройки элемента</p>
            <div>
                <p>Название:</p>
                <input dataname="name" className={s.input} value={localState.name} onChange={updateField}></input>
            </div>
            <div>
                <p>Описание:</p>
                <textarea dataname="description" className={s.description + " " + s.input} value={localState.description} onChange={updateField}></textarea>
            </div>
            <div className={s.condition}>
                <p>Состояние:</p>
                <div>
                    <input dataname="state" name="condition" type="radio" id="process" value="0" checked={localState.state === '0'} onChange={updateField}/><label for="process">В процессе</label>
                </div>
                <div>
                    <input dataname="state" name="condition" type="radio" id="wait" value="1" checked={localState.state === '1'} onChange={updateField}/><label for="wait">Ожидает</label>
                </div>
                <div>
                    <input dataname="state" name="condition" type="radio" id="done" value="2" checked={localState.state === '2'} onChange={updateField}/><label for="done">Выполнена</label>
                </div>
            </div>
            <div className={s.buttons}>
                <button className={s.button} onClick={submit}>Сохранить</button>
                <button className={s.button} onClick={deleteItem}>Удалить</button>
            </div>
        </div>
    )
}

export default TodoSettings;