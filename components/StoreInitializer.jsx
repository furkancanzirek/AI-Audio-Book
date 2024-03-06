"use client";

import { useRef } from "react";
import useBooksStore from "@/src/store/BooksStore";
import { usePlayerStore } from "@/src/store/PlayerStore";
function StoreInitializer({ books ,tracks}) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useBooksStore.setState({ books });
    usePlayerStore.setState({ tracks });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
