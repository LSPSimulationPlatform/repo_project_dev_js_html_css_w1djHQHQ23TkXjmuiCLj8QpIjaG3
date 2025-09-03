import React, { useState } from 'react';

import BookCreatePage from './components/BookCreatePage';
import BookListHistory from './components/BookListHistory';
import BookPage from './components/BookPage';
import LoanAndReturnPage from './components/LoanAndReturnPage';
import LoanHistory from './components/LoanHistory';
import LoanPage from './components/LoanPage';
import MainPage from './components/MainPage';
import UserListHistory from './components/UserListHistory';
import UserPage from './components/UserPage';
import UserRegistrationPage from './components/UserRegistrationPage';

function App() {
    const [currentPage, setCurrentPage] = useState('main');

    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [loans, setLoans] = useState([]); // ESlint makes problem with this code
    console.log(loans);
    console.log(users);// just to satisfy ESLint


    const addBooks = (newBook) => {
        setBooks(prev => [...prev, newBook]);
    };

    const addLoans = (newLoan) => {
        setLoans(prev => [...prev, newLoan]);
    };

    const addUsers = (newUser) => {
        setUsers(prev => [...prev, newUser]);
    };


    let pageContent;
    switch (currentPage) {
        case 'create':
            pageContent = (
                <BookCreatePage onAddBooks={addBooks} onNavigate={setCurrentPage} />
            );
            break;

        case 'createLoan':
            pageContent = (
                <LoanAndReturnPage onAddLoan={addLoans} onNavigate={setCurrentPage} />
            );
            break;

        case 'createUser':
            pageContent = (
                <UserRegistrationPage onAddUsers={addUsers} onNavigate={setCurrentPage} />
            );
            break;

        case 'list':
            pageContent = (
                <BookListHistory books={books} onNavigate={setCurrentPage} />
            );
            break;

        case 'listLoan':
            pageContent = (
                <LoanHistory loans={loans} onNavigate={setCurrentPage} />
            );
            break;

        case 'listUser':
            pageContent = (
                <UserListHistory users={users} onNavigate={setCurrentPage} />
            );
            break;

        case 'bookPage':
            pageContent = (
                <BookPage onSelectPage={setCurrentPage} />

            );
            break;

        case 'loanPage':
            pageContent = (
                <LoanPage onSelectPage={setCurrentPage} />
            );
            break;

        case 'userPage':
            pageContent = (
                <UserPage onSelectPage={setCurrentPage} />
            );
            break;

        default:
            pageContent = <MainPage onSelectPage={setCurrentPage} />;
    }

    return <div>{pageContent}</div>;
}

export default App;