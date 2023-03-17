import { useState } from "react";
import InputCatatan from "./input";

const InputForm = ({ updateCatatans }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const buatCatatan = (event) => {
    event.preventDefault();
    const waktu = new Date().toISOString();
    updateCatatans((catatan) => [
      ...catatan,
      { id: waktu, title, body: note, archived: false, createdAt: waktu },
    ]);
  };

  return (
    <form className='form' onSubmit={buatCatatan}>
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

export default InputForm;
