import { useState } from "react";
import InputCatatan from "./input";

const FormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: note, archived: false, createdAt: timestamp },
    ]);
  };

  return (
    <form className='form' onSubmit={createNote}>
      <h2 className='heading'>&#128221; Catatan Baru</h2>
      <small className='small'> Batasan karakter: <span className='counter'>{50 - title.length}</span> </small>
      <InputCatatan value={title} onChange={setTitle}
        type='text' placeholder='Judul' id='title' name='title' required />
      <InputCatatan value={note} onChange={setNote}
        type='textarea' placeholder='Tulis catatan Anda di sini' id='note' name='note' required />
      <InputCatatan name='submit_form' type='submit' id='submit_form' value='Buat Catatan' />
    </form>
  );
};

export default FormInput;
