
import { createStore} from 'redux'

const defaultState = {
    items: [
        {
            name: "Сделать это",
            description: "В общем надо сделать то и то и то",
            state: '0'
        },
        {
            name: "Сделать то",
            description: "Ну тут так и так а еще так",
            state: '0'
        }
    ],
    current: 0,
    search: "",
}

const reducer = (state = defaultState, action) => {

    switch (action.type){
        //Изменяем активный элемент после нажатия на кнопку "Сохранить"
        case "UPDATE_ITEM":
            return {
                ...state,
                items: state.items.map((item, id) => {
                    return id === state.current ? action.payload : item
                })
            }
        //Переключаемся между элементами
        case "CHANGE_CURRENT_ITEM":
            return {
                ...state,
                current: action.payload
            }
        //Создаем новый элемент
        case "SET_NEW_ITEM":
            return{
                ...state,
                items: [...state.items, {name: "Новый элемент", description: "", state: "0"}],
                current: state.items.length
            }
        //Изменяем текст в поле "Поиск"
        case "SEARCH":
            return{
                ...state,
                search: action.payload
            }
        //Удаляем активный элемент и делаем активным первый элемент
        case "DELETE_ITEM":
            return{
                ...state,
                items: state.items.filter((item, id) => {
                    if(id !== state.current){
                        return true
                    }else{
                        return false
                    }
                }),
                current: 0
            }
        default:
            return state
    }
}


export const store = createStore(reducer)