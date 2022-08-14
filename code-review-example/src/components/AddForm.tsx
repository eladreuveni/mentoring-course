import React, { FC, useState } from 'react'

import './AddForm.scss';

const AddForm: FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [favoriteColor, setFavoriteColor] = useState("");
    const [favoriteTTL, setFavoriteTTL] = useState("");

    const nameRegex = /^[a-zA-Z]+$/;

    const onChange = async (e: any) => {
        if (e.target.name === "firstName") {
            setFirstName(e.target.value)
        }
        if (e.target.name === "lastName") {
            setLastName(e.target.value)
        }
        if (e.target.name === "favoriteColor") {
            setFavoriteColor(e.target.value)
        }
        if (e.target.name === "favoriteTTL") {
            setFavoriteTTL('Elad'.substring(0, e.target.value.length))
        }
    }

    const submit = () => {
        if (firstName) {
            if (firstName.length < 15) {
                if (nameRegex.test(firstName)) {
                    // good to go
                }
                else {
                    console.log('השם לא תקין');
                }
            }
            else {
                console.log('השם ארוך מדי');
            }
        }
        else {
            console.log('שם חסר');
        }

        if (lastName) {
            if (lastName.length < 15) {
                if (nameRegex.test(lastName)) {
                    // good to go
                }
                else {
                    console.log('השם לא תקין');
                }
            }
            else {
                console.log('השם ארוך מדי');
            }
        }
        else {
            console.log('שם חסר');
        }

    }

    return (
        <div className='form-container'>
            Form
            <form action="">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', marginBottom: '3vh' }}>
                    <input name="firstName" value={firstName} onChange={onChange} />
                    <label htmlFor="firstName">first name</label>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', marginBottom: '3vh' }}>
                    <input name="lastName" value={lastName} onChange={onChange} />
                    <label htmlFor="lastName">last name</label>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', marginBottom: '3vh' }}>
                    <input name="favoriteColor" value={favoriteColor} onChange={onChange} />
                    <label htmlFor="favoriteColor">favorite color</label>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', marginBottom: '3vh' }}>
                    <input name="favoriteTTL" value={favoriteTTL} onChange={onChange} />
                    <label htmlFor="favoriteTTL">favorite TTL</label>
                </div>

                <div className="send-button" style={{ backgroundColor: 'gray', width: '10vh', margin: 'auto', padding: '1vh', cursor: 'pointer' }} onClick={() => submit()}>שליחה</div>
            </form>
        </div>
    )
}

export default AddForm;