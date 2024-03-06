/* 
{
    id: '1',
    createdAt: 2024-01-22T17:32:19.000Z,
    updatedAt: 2024-01-22T17:32:21.000Z,
    duration: 675,
    trackNumber: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
    bookId: '1',
    parts: [ [Object], [Object], [Object], [Object] ]
  } */

import { create } from "zustand";

const useBooksStore = create((set) => ({
  books: null,
  currentBook: null,
  setBooks: (books) => set({ books }),
  setCurrentBook: (currentBook) => set({ currentBook }),
}));

export default useBooksStore;
