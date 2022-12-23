import { useState } from "react"
import Modal from "./Modal"
import Backdrop from "./Backdrop"

export default function Todo(props) {
 
    const [modalIsOpen, setModalIsopen] = useState()

    function deleteHandler () {
     setModalIsopen(true)
    }
    
    function closeModalHandler () {
        setModalIsopen(false)
    }
    

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
           { modalIsOpen ? <Backdrop onClick={closeModalHandler}/>: null}
        </div>
    )
}