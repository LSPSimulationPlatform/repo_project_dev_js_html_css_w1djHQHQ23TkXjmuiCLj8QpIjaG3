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
                            width: '220px',
                            marginLeft: '40px',
                            borderRadius: '5px',
                            marginTop: '40px',
                        }}
                        src="https://videos.openai.com/vg-assets/assets%2Ftask_01k3r1qa7wezktggzyg42hqre4%2F1756375054_img_1.webp?st=2025-08-28T08%3A57%3A37Z&se=2025-09-03T09%3A57%3A37Z&sks=b&skt=2025-08-28T08%3A57%3A37Z&ske=2025-09-03T09%3A57%3A37Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Yow9Ouw1P3I14Ma655jAayrkz3j8vBs3ipF6p8dJ6SQ%3D&az=oaivgprodscus" />


                    <img
                        style={{
                            width: '220px',
                            marginLeft: '40px',
                            borderRadius: '5px',
                            marginTop: '40px',
                        }}
                        src="https://videos.openai.com/vg-assets/assets%2Ftask_01k3r1qa7wezktggzyg42hqre4%2F1756375054_img_0.webp?st=2025-08-28T08%3A57%3A37Z&se=2025-09-03T09%3A57%3A37Z&sks=b&skt=2025-08-28T08%3A57%3A37Z&ske=2025-09-03T09%3A57%3A37Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Q7efyK%2BhmNDB94ZxUXUrvr8Mm7LP%2FxVr%2BfFRqmqMXYA%3D&az=oaivgprodscus" />
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

                    <table border>
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