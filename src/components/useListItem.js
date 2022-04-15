import { useRef, useState} from "react";
import {generateColor} from "../utils/generateColor";


const useListItem = ({item, setList}) => {
    const [hasInput, setHasInput] = useState(false)
    const inputRef = useRef()


//
    const changeList = (newItem) => {
        setList(prev => {
            return prev.map(element => {
                if (element.id === newItem.id) {
                    element = newItem
                }
                return element
            })
        })
    }

    const changeColor = () => {
        const newItem = {...item}
        newItem.color = generateColor()
        changeList(newItem)
    }
//
    const editButtonHandler = () => {
        if(!hasInput) {
            setHasInput(true)
            setTimeout(()=> inputRef.current.focus(),0)
        }
        else {
            const inputValue = inputRef.current.value;
            const newItem = {...item}
            newItem.title = inputValue
            changeList(newItem)
            setHasInput(false)

        }
    }
    //
    const onDelete = () => {
        setList(prev => {
                return prev.filter(element => element.id !== item.id)
            }
        )
    }

    return {
        changeColor,
        editButtonHandler,
        hasInput,
        inputRef,
        onDelete
    }
}

export default useListItem