import React, { useState } from 'react';

function LoanAndReturnPage({ onAddLoan, onNavigate }) {
    const [bookTitle, setBookTitle] = useState('');
    const [borrowedDate, setBorrowedDate] = useState('');
    const [returnedDate, setReturnedDate] = useState('');

    const saveData = () => {
        if (!bookTitle) {
            alert('Book Title is not entered.');
            return;
        }


        const newData = {
            bookTitle,
            borrowedDate,
            returnedDate,
        };

        onAddLoan(newData);

        alert('Saved Successfully!');


        setBookTitle('');
        setBorrowedDate('');
        setReturnedDate('');
    };

    return (
        <div>
            <style>{`
        button {
          margin-left: 40px;
          width: 20%;
          height: 30px;
          margin-top: 30px;
          background-color: red;
          color: white;
          border-radius: 5px;
          border-color: red;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        }

        label {
          margin-left: 40px;
          font-family: sans-serif;
          font-size: 15px;
        }

        input {
          margin-right: 40px;
          margin-left: 40px;
          width: 400px;
          padding: 5px;
          border-radius: 5px;
          border: 1px solid gray;
        }
      `}</style>

            <div id="main_container">
                <div
                    style={{
                        backgroundColor: '#f4f4f4',
                        padding: '5px',
                        borderRadius: '5px',
                        width: 'fit-content',
                        marginLeft: '50px',
                        marginTop: '30px',
                    }}>
                    <img
                        style={{
                            width: '360px',
                            marginLeft: '40px',
                            marginTop: '30px',
                            borderRadius: '5px',
                        }}
                        src="https://media.istockphoto.com/id/1347521626/photo/african-american-woman-using-desktop-pc-while-working-at-bookstore.jpg?s=612x612&w=0&k=20&c=xjk_A5PM8cq7VPsPzFQSuAn_iKWIMkPAhf9Fl62yEMg="
                        alt="Loan & Return" />

                    <h1
                        style={{
                            fontWeight: 'bold',
                            marginLeft: '40px',
                            marginTop: '40px',
                        }}>
                        Loan & Return Page
                    </h1>

                    <label>Book Title</label>
                    <br />
                    <input
                        value={bookTitle}
                        onChange={e => setBookTitle(e.target.value)}
                        type="text"
                        placeholder="Book Title" />
                    <br />
                    <br />

                    <label>Borrowed Date</label>
                    <br />
                    <input
                        value={borrowedDate}
                        onChange={e => setBorrowedDate(e.target.value)}
                        type="date"
                        placeholder="Borrowed Date" />
                    <br />
                    <br />

                    <label>Returned Date</label>
                    <br />
                    <input
                        value={returnedDate}
                        onChange={e => setReturnedDate(e.target.value)}
                        type="date"
                        placeholder="Returned Date" />
                    <br />
                    <br />

                    <button onClick={saveData}>Return</button>
                    <button
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            borderColor: 'blue',
                        }}
                        onClick={() => onNavigate('main')}>
                        Back
                    </button>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default LoanAndReturnPage;