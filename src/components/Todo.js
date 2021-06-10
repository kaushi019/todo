import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop'

function Todo(prop){
    const [showModal, setModal] = useState(false);

    function deleteTodo(){
        setModal(true);
    }

    function closeDelete(){
        setModal(false);
    }


    return (
        <div className='card'>
            <h2>{prop.text}</h2>
            <div className='actions'>
                <button onClick={deleteTodo} className='btn'>Delete</button>
            </div>

            {showModal && <Modal onCancel={closeDelete} onConfirm={closeDelete} />}
            {showModal && <Backdrop onCancel={closeDelete} />}
            
        </div>
    );
}

export default Todo;