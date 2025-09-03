import React, { useState } from 'react';

function UserRegistrationPage({ onAddUsers, onNavigate }) {
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [totalBooksBorrowed, setTotalBooksBorrowed] = useState('');

    const saveData = () => {
        if (!userName) {
            alert('User Name is required.');
            return;
        }

        if (!totalBooksBorrowed) {
            alert('Total Books Borrowed is required.');
            return;
        }

        const newData = {
            userName,
            userSurname,
            email,
            address,
            totalBooksBorrowed,
        };

        onAddUsers(newData);
        alert('Saved Successfully!');


        setUserName('');
        setUserSurname('');
        setEmail('');
        setAddress('');
        setTotalBooksBorrowed('');
    };

    return (
        <div>
            <style>{`
        button {
          margin-left: 40px;
          width: 30%;
          height: 30px;
          margin-top: 30px;
          background-color: red;
          color: white;
          border-radius: 5px;
          border-color: red;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        }

        label {
          font-size: 15px;
          font-family: sans-serif;
          margin-left: 20px;
          margin-bottom: 5px;
        }

        input {
          margin-left: 20px;
          margin-right: 20px;
          width: 400px;
          border-radius: 5px;
          border: 2px solid;
          padding: 5px;
          border-color: #bfbfbf;
        }
      `}</style>

            <div id="main_container">
                <div
                    style={{
                        backgroundColor: '#f4f4f4',
                        padding: '5px',
                        width: 'fit-content',
                        marginTop: '50px',
                        marginLeft: '50px',
                        marginRight: '50px',
                        borderRadius: '5px',
                    }}>
                    <img
                        style={{
                            width: '400px',
                            marginLeft: '40px',
                            borderRadius: '5px',
                            marginTop: '20px',
                        }}
                        src="https://img.freepik.com/free-photo/front-view-group-young-people-teaming-up-work_23-2148816842.jpg?semt=ais_hybrid&w=740"
                        alt="Users working together" />

                    <h1
                        style={{
                            fontWeight: 'bold',
                            marginLeft: '40px',
                            marginTop: '20px',
                        }}>
                        User Registration Page
                    </h1>

                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            marginLeft: '20px',
                            marginBottom: '10px',
                        }}>
                        <div>
                            <label>Name</label>
                            <br />
                            <input
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                                type="text"
                                placeholder="Name" />
                        </div>
                        <div>
                            <label>Surname</label>
                            <br />
                            <input
                                value={userSurname}
                                onChange={e => setUserSurname(e.target.value)}
                                type="text"
                                placeholder="Surname" />
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            marginLeft: '20px',
                            marginBottom: '10px',
                            marginTop: '20px',
                        }}>
                        <div>
                            <label>Email</label>
                            <br />
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="text"
                                placeholder="Email" />
                        </div>

                        <div>
                            <label>Address</label>
                            <br />
                            <input
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                type="text"
                                placeholder="Address" />
                        </div>
                    </div>

                    <div
                        style={{
                            gap: '20px',
                            marginLeft: '20px',
                            marginBottom: '10px',
                            marginTop: '20px',
                        }}>
                        <label>Total Books Borrowed</label>
                        <br />
                        <input
                            value={totalBooksBorrowed}
                            onChange={e => setTotalBooksBorrowed(e.target.value)}
                            type="text"
                            placeholder="Total Books Borrowed" />
                    </div>

                    <br />
                    <br />
                    <button onClick={saveData}>Save</button>
                    <button

                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            borderColor: 'blue',
                            marginLeft: '10px',
                        }}
                        onClick={() => onNavigate('main')}>
                        Back
                    </button>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default UserRegistrationPage;