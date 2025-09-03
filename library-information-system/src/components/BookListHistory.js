import React, { useState } from 'react';

function BookListHistory({ books, onNavigate }) {
    const [filterCode, setFilterCode] = useState('');

    const filteredBooks = books.filter(book =>
    book.bookTitle.toLowerCase().includes(filterCode.toLocaleLowerCase()),
  );


    return (
        <div id="main_container">
            <div
                style={{
                    backgroundColor: '#f4f4f4',
                    width: '90%',
                    marginLeft: 40,
                    marginTop: 40,
                    padding: 5,
                }}>
                {/* Birinci şəkil */}
                <img
                    style={{
                        width: 250,
                        marginLeft: 40,
                        marginTop: 20,
                        borderRadius: 5,
                    }}
                    src="https://videos.openai.com/vg-assets/assets%2Ftask_01k3pp7zw3fxqtkszmqyn0x0sc%2F1756329540_img_1.webp?st=2025-08-27T19%3A47%3A45Z&se=2025-09-02T20%3A47%3A45Z&sks=b&skt=2025-08-27T19%3A47%3A45Z&ske=2025-09-02T20%3A47%3A45Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ccXXzyqy4ex6l7igDRisqlRbJjiDcF5Yep81HLF%2BlQE%3D&az=oaivgprodscus"
                    alt="Book List 1" />

                {/* İkinci şəkil */}
                <img
                    style={{
                        width: 250,
                        marginTop: 20,
                        borderRadius: 5,
                        marginLeft: 20,
                    }}
                    src="https://videos.openai.com/vg-assets/assets%2Ftask_01k3pp7zw3fxqtkszmqyn0x0sc%2F1756329540_img_0.webp?st=2025-08-27T19%3A47%3A45Z&se=2025-09-02T20%3A47%3A45Z&sks=b&skt=2025-08-27T19%3A47%3A45Z&ske=2025-09-02T20%3A47%3A45Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=RV891M8cZuO6x0fgGipMOj34ij7etC3lYe1u4LCL2Ok%3D&az=oaivgprodscus"
                    alt="Book List 2" />

                {/* Başlıq */}
                <h1
                    style={{
                        marginLeft: 40,
                        marginTop: 30,
                        padding: 5,
                        fontWeight: 'bold',
                    }}>
                    Book List History
                </h1>
                <br />

                {/* Search input və düymələr */}
                <input
                    style={{
                        marginLeft: '40px',
                        width: '350px',
                        padding: '5px',
                        borderRadius: '5px',
                    }}
                    type="search"
                    placeholder="Search..."
                    value={filterCode}
                    onChange={e => setFilterCode(e.target.value)} />
                <button
                    style={{
                        marginLeft: '10px',
                        width: '150px',
                        padding: '5px',
                        borderRadius: '5px',
                        borderColor: 'black',
                        backgroundColor: 'blue',
                        color: 'white',
                    }}>
                    Search
                </button>

                <button
                    style={{
                        marginLeft: '10px',
                        width: '150px',
                        padding: '5px',
                        borderRadius: '5px',
                        borderColor: 'black',
                        backgroundColor: 'blue',
                        color: 'white',
                    }}
                    onClick={() => onNavigate('main')}>
                    Back
                </button>
                <br />
                <br />

                {/* Cədvəl */}
                <table border="1"
                    style={{
                        marginLeft: '40px',
                        width: '80%',
                        borderCollapse: 'collapse',
                        border: '1px solid black',
                    }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publication Year</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{/* Burada sətirlər gələcək */}
                        {filteredBooks.length === 0 ? (
                            <tr>
                                <td colSpan="4">
                                    No Books found.
                                </td>
                            </tr>
            ) : (
              filteredBooks.map((book, index) => (
                  <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{book.bookTitle}</td>
                      <td>{book.bookAuthor}</td>
                      <td>{book.publicationYear}</td>
                      <td>{book.description}</td>
                      <td>{book.bookStatus}</td>
                  </tr>

              ))
            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookListHistory;