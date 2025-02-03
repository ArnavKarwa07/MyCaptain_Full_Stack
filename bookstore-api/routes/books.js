const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const Book = require("../models/Book");

let books = [];

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const found = books.find((book) => book.id === req.params.id);
  if (found) {
    res.json(found);
  } else {
    res.status(400).json({ msg: `Book with ID ${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  const newBook = new Book(
    req.body.title,
    req.body.author,
    req.body.ISBN,
    req.body.publicationDate,
    req.body.genre
  );
  newBook.id = uuid.v4();
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
  const found = books.find((book) => book.id === req.params.id);
  if (found) {
    const updatedBook = req.body;
    Object.assign(found, updatedBook);
    res.json({ msg: "Book updated", book: found });
  } else {
    res.status(400).json({ msg: `Book with ID ${req.params.id} not found` });
  }
});

router.delete("/:id", (req, res) => {
  const foundIndex = books.findIndex((book) => book.id === req.params.id);
  if (foundIndex !== -1) {
    books.splice(foundIndex, 1);
    res.json({ msg: `Book deleted` });
  } else {
    res.status(400).json({ msg: `Book with ID ${req.params.id} not found` });
  }
});

module.exports = router;
