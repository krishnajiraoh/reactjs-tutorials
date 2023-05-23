/* import { useState } from 'react'

export default function Picture() {

    const [isBGActive, setIsBGActive] = useState(true)

    let bgClassName = "background"; 
    let imgClassName = "picture"; 
    bgClassName = isBGActive ? bgClassName + " background--active" : bgClassName;
    bgClassName = isBGActive ? bgClassName : " picture--active";
    
    function handleBGClick(){
        setIsBGActive(true);
    }

    function handleImgClick(e){
        e.stopPropagation();
        setIsBGActive(false);
    }

    return (
        <div className={bgClassName} onClick={handleBGClick}>
          <img
            className={imgClassName}
            alt="Rainbow houses in Kampung Pelangi, Indonesia"
            src="https://i.imgur.com/5qwVYb1.jpeg"
            onClick={handleImgClick}
          />
        </div>
      );
  }
   */

//Challenge2
import { useState} from 'react';

export default function EditProfile() {

    const [isDisplayMode, setDisplayMode] = useState(true); //Modes => display, edit
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');

    function handleFirstNameChange(e){
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e){
        setLastName(e.target.value)
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
        <label>
            First name:{' '}
            <b style={{
                display : (isDisplayMode) ? "" : "none"
            }}>{firstName}</b>
            <input value={firstName} onChange={handleFirstNameChange} style={{
                display : (isDisplayMode) ? "none" : ""
            }}/>
        </label>
        <label>
            Last name:{' '}
            <b style={{
                display : (isDisplayMode) ? "" : "none"
            }}>{lastName}</b>
            <input value={lastName} onChange={handleLastNameChange} style={{
                display : (isDisplayMode) ? "none" : ""
            }}/>
        </label>
        <button type="submit" onClick={() => {
                setDisplayMode(false)
            } 
            } style={{
                display : (isDisplayMode) ? "" : "none"
            }}>
            Edit Profile
        </button>
        <button type="submit" onClick={() => { 
                setDisplayMode(true)} 
            } style={{
                display : (isDisplayMode) ? "none" : ""
            }}>
            Save Profile
        </button>
        <p><i>Hello, {firstName} {lastName}!</i></p>
        </form>
    );
}
//Tutorail solution
/* import { useState } from 'react';

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
} */
