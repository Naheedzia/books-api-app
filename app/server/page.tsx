import React from "react";

type Book = {
    id: number;
    name: string;
    type: string;
    available: boolean;
};

async function getBooks() {
    const response = await fetch("https://simple-books-api.glitch.me/books", { cache: "no-store" });

    const data = response.json();
    return data;
}


export default async function staticPage() {

    const books = await getBooks();

    return (
        <div>

            <h1 className="text-center">Server page</h1>
            <div className="grid grid-cols-2 my-4">
                <ul>
                    {books.map((book: Book) => (

                        <li key={book.id}>
                            {book.name} - {book.type} - {book.available ? "Available" : "Not Available"}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}