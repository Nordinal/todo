import s from '../style/TodoSettings.module.css'


const TodoSettings = (props) => {

    return (
        <div className={s.container}>
            <p>Настройки элемента</p>
            <div>
                <p>Название:</p>
                <input className={s.input}></input>
            </div>
            <div>
                <p>Описание:</p>
                <textarea className={s.description + " " + s.input}></textarea>
            </div>
            <div className={s.condition}>
                <p>Состояние:</p>
                <div>
                    <input name="condition" type="radio" id="process"/><label for="process">В процессе</label>
                </div>
                <div>
                    <input name="condition" type="radio" id="wait"/><label for="wait">Ожидает</label>
                </div>
                <div>
                    <input name="condition" type="radio" id="done"/><label for="done">Выполнена</label>
                </div>
            </div>
            <div className={s.buttons}>
                <button className={s.button}>Сохранить</button>
            </div>
        </div>
    )
}

export default TodoSettings;