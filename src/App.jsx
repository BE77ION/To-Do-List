import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Head from './components/head'
import './index.css'
import Items from './components/items'

function App() {
  const [inputValue, setInputValue] = useState();
  const [addItem, setAddItem] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleAddItem = () => {
    if (inputValue && inputValue.trim() !== '') {
      setAddItem([...addItem, inputValue.trim()])
      setInputValue('')
    }
  }
  const handleDelete = (index) => {
    const newItems = addItem.filter((_, i) => i !== index)
    setAddItem(newItems)
  }
  const handleEdit=(index,newtext)=>{
      const updatedItem=[...addItem]
      updatedItem[index]=newtext
      setAddItem(updatedItem)

    }
  return (
    <>
      <Head></Head>
      <hr className='line'></hr>
      <div className='container'>
        <div className='input'>
          <input className='input_size'
            type='text' placeholder='add task'
            value={inputValue}
            onChange={handleInputChange}></input>
          <button className='add_button'
            onClick={handleAddItem}>
            ADD</button>
        </div>
        <div>
          <Items items={addItem} handleDelete={handleDelete} handleEdit={handleEdit}></Items>
        </div>
      </div>
    </>
  )
}

export default App
