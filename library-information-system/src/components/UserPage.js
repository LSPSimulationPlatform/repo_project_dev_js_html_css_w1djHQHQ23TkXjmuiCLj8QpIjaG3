function UserPage({ onSelectPage }) {
    return (
        <div>
            <style>{`
        body {   
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          text-align: center;
          background-color: #f4f4f4;
          border-radius: 5px;
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
                <h1
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontFamily: 'Georgia',
                    }}>
                    User Page
                </h1>
                <br />
                <button
                    style={{ backgroundColor: '#007BFF' }}
                    onClick={() => onSelectPage('createUser')}>
                    User Registration Page
                </button>
                <br />
                <button
                    style={{ backgroundColor: '#28A745' }}
                    onClick={() => onSelectPage('listUser')}>
                    User Registration List
                </button>
                <br />
                <button
                    style={{ backgroundColor: '#FD7E14' }}
                    onClick={() => onSelectPage('main')}>
                    Back
                </button>
                <br />
            </div>
        </div>
    );
}

export default UserPage;