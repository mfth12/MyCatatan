import { tampilTanggalTerformat } from "../utils/data";
import Tombol from "./tombol";

const Card = ({ id, title, createdAt, body, archived, action }) => {
  const deleteCatatan = (item) => action((notes) => notes.filter((note) => note.id !== item));
  const toggleArsip = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    );
  };

  return (
    <article id={id} className='card'>
      <header className='card_header'>
        <h3 className='heading-card'>{title}</h3>
        <small className='date'>{tampilTanggalTerformat(createdAt)}</small>
        <p className='note'>{body}</p>
      </header>
      <footer className='card_footer'>
        <Tombol eventHandler={() => deleteCatatan(id)} label='hapus' />
        <Tombol eventHandler={() => toggleArsip(id)} label={archived ? "aktifkan" : "arsip"} />
      </footer>
    </article>
  );
};

export default Card;
