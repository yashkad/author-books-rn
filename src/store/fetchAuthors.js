import {authorAction} from './authorSlice';

const fetchAuthors = (search = 'J. K. Rowling') => {
  return async dispatch => {
    dispatch(authorAction.changeLoading({type: 'loading', value: true}));
    const fetchHandler = async () => {
      const data = await fetch(
        `https://openlibrary.org/search/authors.json?limit=20&q=${search}`,
      );

      const res = await data.json();

      return res.docs;
    };

    try {
      const data = await fetchHandler();
      // console.log('data', data);
      dispatch(authorAction.addData(data));
      dispatch(authorAction.changeLoading({type: 'loading', value: false}));
    } catch (error) {
      console.log('error inside fetchAuthors : ', error);
    }
  };
};

export default fetchAuthors;
