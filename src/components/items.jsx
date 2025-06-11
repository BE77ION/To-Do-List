import { useState } from 'react';
import './items.css';

function Items({ items, handleDelete, handleEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(items[index]);
  };

  const saveEdit = () => {
    if (editText.trim() !== '') {
      handleEdit(editIndex, editText.trim());
      setEditIndex(null);
      setEditText('');
    }
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditText('');
  };

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="items">
          {editIndex === index ? (
            <div className="edit-section">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
              />
              <div className="button-group">
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <p className="item_no">{item}</p>
              <div className="button-group">
                <button onClick={() => handleDelete(index)}>DELETE</button>
                <button onClick={() => startEditing(index)}>EDIT</button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default Items;
