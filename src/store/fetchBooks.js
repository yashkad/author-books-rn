import {authorAction} from './authorSlice';


const fetchBooks = (key = 'OL23919A') => {
  return async dispatch => {
    dispatch(authorAction.changeLoading({type: 'booksLoading', value: true}));
    const fetchHandler = async () => {
      const data = await fetch(
        `https://openlibrary.org/authors/${key}/works.json`,
      );

      const res = await data.json();
      console.log('Books = ', res.entries);
      return res.entries;
    };

    try {
      const data = await fetchHandler();
      dispatch(authorAction.addBookData(data));
      dispatch(
        authorAction.changeLoading({type: 'booksLoading', value: false}),
      );
    } catch (error) {
      console.log('error inside fetchBooks : ', error);
    }
  };
};

export default fetchBooks;
