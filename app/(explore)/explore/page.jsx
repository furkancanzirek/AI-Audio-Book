import BooksSlider from "../components/books-slider/BooksSlider";
import prisma from "@/app/lib/prisma";
import { usePlayerStore } from "@/src/store/PlayerStore";
import useBooksStore from "@/src/store/BooksStore";
import StoreInitializer from "@/components/StoreInitializer";
const page = async () => {
  const getBooks = async () => {
    //order by id parts
    const books = await prisma.audioBook.findMany({
      take: 5,
      include: {
        tracks: {
          include: {
            parts: {
              orderBy: {
                id: "asc",
              },
            },
          },
        },
      },
    });
    useBooksStore.getState().setBooks(books);
    usePlayerStore.setState({
      tracks: books[0].tracks,
    });

    return books;
  };
  const books = await getBooks();
  const tracks = books[0].tracks;
  return (
    <div className="container mt-8">
      <StoreInitializer books={books} tracks={tracks} />
      <BooksSlider />
    </div>
  );
};

export default page;
