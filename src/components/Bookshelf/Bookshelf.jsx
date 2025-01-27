import { useState } from 'react';


const Bookshelf = () => {

    const [books, setBooks] = useState([

        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' },
        { title: 'Pride and Prejudice', author: 'Jane Austen' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'Moby Dick', author: 'Herman Melville' },
        { title: 'War and Peace', author: 'Leo Tolstoy' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
        { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
        { title: 'Brave New World', author: 'Aldous Huxley' }
    ]);

    const [newBook, setNewBook] = useState({
        title: null,
        author: null
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({
            ...newBook,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    };

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="author"
                            placeholder="Author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Add Book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div key={index} className="bookCard">
                            <h4>{book.title}</h4>
                            <p>{book.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Bookshelf;