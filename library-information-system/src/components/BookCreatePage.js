import React, { useState } from 'react';

function BookCreatePage({ onAddBooks, onNavigate }) {
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [description, setDescription] = useState('');
    const [bookStatus, setBookStatus] = useState('');

    const saveData = () => {
        if (!bookTitle) {
            alert('Book Title is not entered');
            return;
        }

        if (!bookAuthor) {
            alert('Book Author is not entered.');
            return;
        }


        const newData = {
            bookTitle,
            bookAuthor,
            publicationYear,
            description,
            bookStatus,

        };

        onAddBooks(newData);

        alert('Saved successfully!');


        setBookTitle('');
        setBookAuthor('');
        setPublicationYear('');
        setDescription('');
        setBookStatus('');
    };


    return (
        <div>
            <style>{`
        .container {  
          background-color: #f4f4f4;
          width: 100%;
          max-width: 500px;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }

        button {
          margin-left: 20px;
          width: 30%;
          height: 30px;
          margin-top: 30px;
          background-color: red;
          color: white;
          border-radius: 5px;
          border-color: red;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }

        label {
          font-size: 15px;
          font-family: sans-serif;
          margin-left: 20px;
          margin-bottom: 5px;
        }

        .inputs {
          margin-left: 20px;
          width: 400px;
          border-radius: 5px;
          border: 2px solid #bfbfbf;
          padding: 5px;
        }
      `}</style>

            <div id="main_container">
                <div
                    className="container"
                    style={{
                        backgroundColor: '#f4f4f4',
                        width: 'fit-content',
                        padding: '10px',
                        marginLeft: '50px',
                        marginTop: '10px',
                        borderRadius: '5px',
                    }}>
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/040/712/545/small/ai-generated-reading-literature-outdoors-a-fresh-flower-blossoms-on-an-old-book-generated-by-ai-photo.jpg"
                        style={{ width: 350, marginLeft: 20, borderRadius: 5 }}
                        alt="Book" />

                    <h1
                        style={{
                            color: 'black',
                            marginLeft: 20,
                            marginTop: 30,
                            marginRight: 20,
                            fontWeight: 'bold',
                        }}>
                        Create Book Page
                    </h1>

                    <label>Book Title</label>
                    <br />
                    <input
                        value={bookTitle}
                        className="inputs"
                        type="text"
                        placeholder="Title"
                        onChange={e => setBookTitle(e.target.value)} />
                    <br />
                    <br />

                    <label>Book Author</label>
                    <br />
                    <input
                        value={bookAuthor}
                        className="inputs"
                        type="text"
                        placeholder="Author"
                        onChange={e => setBookAuthor(e.target.value)} />
                    <br />
                    <br />

                    <label>Publication Year</label>
                    <br />
                    <input
                        value={publicationYear}
                        onChange={e => setPublicationYear(e.target.value)}
                        className="inputs"
                        type="date" />
                    <br />
                    <br />

                    <label>Description</label>
                    <br />
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="inputs"
                        placeholder="Description"
                        rows={4} />
                    <br />
                    <br />

                    <label>Status</label>
                    <br />
                    <select
                        value={bookStatus}
                        onChange={e => setBookStatus(e.target.value)}
                        className="inputs">
                        <option>Available</option>
                        <option>Borrowed</option>
                    </select>
                    <br />
                    <br />

                    <button onClick={saveData}>Save</button>
                    <button
                        style={{ backgroundColor: 'blue', borderColor: 'blue' }}
                        onClick={() => onNavigate('main')}>Back</button>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default BookCreatePage;