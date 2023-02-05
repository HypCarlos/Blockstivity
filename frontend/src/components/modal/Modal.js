import React from 'react';

const Modal = () => {



  const mode = 'create'
  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='form-title-container'>
          <h3>Let's {mode} your task</h3>
          <button>X</button>
        </div>
<form>

<input/>
<input/>
<input/>
</form>
      </div>
    </div>
  )
}

export default Modal
