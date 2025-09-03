import React, { useState } from 'react';

function LoanHistory({ loans, onNavigate }) {
    const [filterCode, setFilterCode] = useState('');

    const filteredLoans = loans.filter(loan =>
    loan.bookTitle.toLowerCase().includes(filterCode.toLowerCase()),
  );

    return (
        <div>
            <style>{`
        table, th, td {
          border: 1px solid #000;
          padding: 5px;
        }
        table {
          margin-left: 40px;
          width: 80%;
          border-collapse: collapse;
        }
        button {
          margin-left: 20px;
          color: white;
          background-color: blue;
          border-color: blue;
          border-radius: 5px;
          padding: 1px;
          width: 100px;
        }
      `}</style>

            <div id="main_container">
                <div
                    style={{
                        backgroundColor: '#f4f4f4',
                        display: 'inline-block',
                        padding: '5px 20px 5px 5px',
                        borderRadius: '5px',
                        marginLeft: '40px',
                        marginTop: '40px',
                    }}>
                    <h1
                        style={{
                            marginLeft: '40px',
                            marginTop: '40px',
                            padding: '5px',
                            fontWeight: 'bold',
                        }}>
                        Loan History
                    </h1>
                    <br />

                    <input
                        style={{
                            borderRadius: '5px',
                            marginLeft: '40px',
                            padding: '1px',
                            width: '350px',
                        }}
                        value={filterCode}
                        onChange={e => setFilterCode(e.target.value)}
                        type="search"
                        placeholder="Search for Loan History..." />
                    <button>Save</button>
                    <button onClick={() => onNavigate('main')}>Back</button>

                    <br />
                    <br />

                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Book Title</th>
                                <th>Borrowed Date</th>
                                <th>Returned Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLoans.length === 0 ? (
                                <tr>
                                    <td colSpan="4">No Books Found.</td>
                                </tr>
              ) : (
                filteredLoans.map((loan, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{loan.bookTitle}</td>
                        <td>{loan.borrowedDate}</td>
                        <td>{loan.returnedDate}</td>
                    </tr>
                ))
              )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default LoanHistory;