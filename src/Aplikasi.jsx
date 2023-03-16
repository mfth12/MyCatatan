import { useState, useEffect } from "react";
import { FormInput, Header, SectionNotes } from "./components";
// import style from "./styles/index.css";
import { getInitialData } from "./utils";

function Aplikasi() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <>
      <Header search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main className='main'>
        <FormInput updateNotes={setNotes} />
        <SectionNotes label='&#127894; Catatan Aktif' notes={activeNotes} setNotes={setNotes} />
        <SectionNotes label='&#128194; Arsip' notes={archivedNotes} setNotes={setNotes} />
      </main>
    </>
  );
}

export default Aplikasi;
