import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    //console.log(event.target.value)
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //console.log(inputValue);
    if(inputValue.length <= 1) return;
    onNewCategory( inputValue );
    //setCategories(category => [inputValue, ...category])
    setInputValue('');

    // onNewCategory(inputValue.trim())
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type='text'
        placeholder='Search Gif by category name'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};