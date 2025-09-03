import React, { useState } from 'react';

function UserListHistory({ users, onNavigate }) {
    const [filterCode, setFilterCode] = useState('');

    const filteredUsers = users.filter(user =>
        user.userName.toLowerCase().includes(filterCode.toLowerCase()),
    );


    return (
        <div>
            <style>{`
        td {                              
            word-break: break-word;
            white-space: normal;
        }

        table {
            margin-left: 40px;
            width: 90%;
            border-collapse: collapse;
        }

        th,
        td {
            max-width: 250px;
            min-width: 100px;
            word-wrap: break-word;
        }

        button {
            margin: 20px;
            width: 150px;
            padding: 1px;
            background-color: blue;
            border-radius: 5px;
            border-color: blue;
            color: white;
        }
    `}</style>


            <div id="main_container">
                <div style={{
                    backgroundColor: '#f4f4f4',
                    width: 'fit-content',
                    marginTop: '40px',
                    marginLeft: '40px',
                    padding: '5px',
                    borderRadius: '5px',
                }}>
                    <img
                        style={{
                            width: '250px',
                            marginLeft: '40px',
                            borderRadius: '5px',
                            marginTop: '40px',
                        }}
                        src="https://img.freepik.com/premium-photo/open-book-with-forest-growing-upwards-from-its-pages_1106493-478827.jpg" />


                    <img
                        style={{
                            width: '250px',
                            marginLeft: '40px',
                            borderRadius: '5px',
                            marginTop: '40px',
                        }}
                        src="https://i.guim.co.uk/img/media/144c989fada0a89781d43024a7617e83a44b794d/746_1044_4242_2545/master/4242.jpg?width=465&dpr=1&s=none&crop=none" />
                    <h1 style={{
                        marginLeft: '40px',
                        marginTop: '40px',
                        padding: '5px',
                        fontWeight: 'bold',
                    }}>User List History</h1><br /><br />
                    <input
                        style={{
                            marginLeft: '40px',
                            width: '350px',
                            padding: '1px',
                            borderRadius: '5px',
                        }}
                        value={filterCode}
                        onChange={e => setFilterCode(e.target.value)}
                        type="search"
                        placeholder="Search for User List..." />
                    <button>Search</button>
                    <button
                        onClick={() => onNavigate('main')}>Back</button>
                    <br />
                    <br />

                    <table border="1">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Total Books Borrowed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan="4">
                                        No Books Found.
                                    </td>
                                </tr>
                            ) : (

                                filteredUsers.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.userSurname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>{user.totalBooksBorrowed}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div >
        </div>

    );
}

export default UserListHistory;