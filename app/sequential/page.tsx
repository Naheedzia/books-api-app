import React from "react";

type Book = {
    id: number;
    name: string;
    type: string;
    available: boolean;
};

async function getFiction() {
    const response = await fetch("https://simple-books-api.glitch.me/books?type=fiction",
        {
            cache: "no-store",
        }
    );

    const data = response.json();

    return data;
}

async function getNonFiction() {
    const response = await fetch("https://simple-books-api.glitch.me/books?type=non-fiction",
        {
            cache: "no-store",
        }
    );

    const data = response.json();

    return data;
}

export default async function Sequential() {
    const fictionBooks = await getFiction();
    const nonFictionBooks = await getNonFiction();

    return (
        <div>
            <h1>Fiction Books</h1>
            <ul>
                {fictionBooks.map((book: Book) => (
                    <li key={book.id}>
                        {book.name} - {book.type} - {book.available ? "Avilable" : "Not Available"}
                    </li>
                ))}
            </ul>
            <h1>Non-Fiction Books</h1>
            <ul>
                {nonFictionBooks.map((book: Book) => (
                    <li key={book.id}>
                        {book.name} - {book.type} - {book.available ? "Avilable" : "Not Available"}
                    </li>
                ))}
            </ul>
        </div>
    );
}