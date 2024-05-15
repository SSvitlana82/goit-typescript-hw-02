import { useRef, useState, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { BsSearch } from 'react-icons/bs';
type Props = {
  onSubmit: (query: string) => void;
};
const SearchBar = ({ onSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const search = inputRef?.current?.value.trim() || '';

    if (search.length !== 0) {
      onSubmit(search);
    } else {
      toast.error("This didn't work.");
    }
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <BsSearch size="15px" className={css.search} />
        </button>
        <Toaster />
        <input
          className={css.input}
          ref={inputRef}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
