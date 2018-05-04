export function selectBook(book){
  //selectBook is an actionCreator it needs to return an,
  //action, an object with a type property. IE Type + Payload
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
  console.log('a book has been selected: ', book.title);
}
