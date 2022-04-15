import React from 'react';
import useListItem from "./useListItem";

const ListItem = ({item,setList}) => {
    const {
        editButtonHandler,
        changeColor,
        hasInput,
        inputRef,
        onDelete
    } = useListItem({item, setList})

    return (
        <div className="listItem" >
            <h1>#{item.id}</h1>
            <div>
                {hasInput ? (
                    <div>
                        <input defaultValue={item.title} ref={inputRef}/>
                    </div>
                        )
                    : (
                        <div className="title" style={{color: item.color}}>{item.title}</div>
                    )}
                <button type="button" onClick={editButtonHandler} >{hasInput? "Save": "Edit"}</button>
            </div>

            <button onClick={changeColor} type="button">Change Color</button>
            <button type="button" onClick={onDelete}>Delete</button>
        </div>
    )
}

export default ListItem