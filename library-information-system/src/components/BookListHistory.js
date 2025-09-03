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
                    src="https://media.istockphoto.com/id/1094357918/photo/looking-for-books-for-the-homework-project.jpg?s=612x612&w=0&k=20&c=lweZgsFrwTkD_0YikElwqUhkDGH8A_FGx-kqoPt5_oA="
                    alt="Book List 1" />

                {/* İkinci şəkil */}
                <img
                    style={{
                        width: 250,
                        marginTop: 20,
                        borderRadius: 5,
                        marginLeft: 20,
                    }}
                    src="https://www.ila.org/content/images/cms/april2.jpg/image-full;size$500,333.ImageHandler"
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