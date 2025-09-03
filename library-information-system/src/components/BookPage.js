function BookPage({ onSelectPage }) {
    return (
        <div>
            <style>{`
        .container {
          text-align: center;
          background-color: #f4f4f4;
          border-radius: 5px;
        }

        body {   
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button {
          width: 400px;
          padding: 10px;
          margin: 10px;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>

            <div className="container">
                <h1 style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Georgia' }}>
                    Book Page
                </h1>
                <br />
                <button
                    style={{ backgroundColor: '#007BFF' }}
                    onClick={() => onSelectPage('create')}>
                    Create Book Page
                </button>
                <br />
                <button
                    style={{ backgroundColor: '#28A745' }}
                    onClick={() => onSelectPage('list')}>
                    Book List
                </button>
                <br />
                <button
                    style={{ backgroundColor: '#FD7E14' }}
                    onClick={() => onSelectPage('main')}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default BookPage;