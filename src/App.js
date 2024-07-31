import { useEffect } from "react";
import BookForm from "./components/bookForm";
import BookList from "./components/bookList";
import useBookStore from "./store/book"; 
import "./App.css";

function App() {
  const reset = useBookStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className="App">
      <h2>My library store</h2>
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;
