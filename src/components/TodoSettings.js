import s from '../style/TodoSettings.module.css'
import {useSelector, useDispatch} from "react-redux"
import { useState } from 'react'

const TodoSettings = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.items[state.current])
    const [localState, setLocalState] = useState(state)
    const updateField = (e) => {
        const field = e.target.getAttribute("dataname")
        setLocalState({...localState, [field]: e.target.value})
    }
    const submit = () => {
        dispatch({type: "UPDATE_ITEM", payload: localState})
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
            </div>
        </div>
    )
}

export default TodoSettings;