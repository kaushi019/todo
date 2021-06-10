function Modal(prop){

    function closeHandle(){
        prop.onCancel();
    }
    function confirmHandle(){
        prop.onConfirm();
    }

    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button onClick={closeHandle} className='btn btn--alt'>Cancel</button>
            <button onClick={confirmHandle} className='btn'>Confirm</button>
        </div>
    );
}

export default Modal;