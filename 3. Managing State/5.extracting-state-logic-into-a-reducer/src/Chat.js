import { useState } from 'react';

export default function Chat({contact, message, dispatch}) {

    function handleOnClick(){
        alert(contact.name + " - " + message);
        dispatch({
            type : 'sent_message'
        })   
    }

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
              type : 'edited_message',
              message : e.target.value
          })
        }}
      />
      <br />
      <button onClick={handleOnClick}>Send to {contact.email}</button>
    </section>
  );
}
