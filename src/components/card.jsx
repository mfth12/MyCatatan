import { tampilTanggalTerformat } from "../utils/data";
import Tombol from "./tombol";

//fungsi Card
const Card = ({ id, title, createdAt, body, archived, action }) => {
  //menghapus catatan
  const deleteCatatan = (item) => action((notes) => notes.filter((note) => note.id !== item));
  //mengganti status catatan aktif & arsip
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

  //mengembalikan tampilan Card pada UI aplikasi
  return (
    <article id={id} className='card'>
      <header className='card_header'>
        <h3 className='heading-card'>{title}</h3><small className='date'>{tampilTanggalTerformat(createdAt)}</small>
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
