import { useState, useEffect } from "react";
import { ambilDataCatatan } from "./utils/data";

import InputForm from "./components/input-form";
import Header from "./components/header";
import BagianCatatan from "./components/bagian";

function Aplikasi() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [catatans, setNotes] = useState(ambilDataCatatan());
  const activeNotes = (searchNotes || catatans).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || catatans).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(catatans.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, catatans]);

  return (
    <>
      <Header search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main className='main'>
        <InputForm updateCatatans={setNotes} />
        <BagianCatatan label='&#127894; Catatan Aktif' catatans={activeNotes} setNotes={setNotes} />
        <BagianCatatan label='&#128194; Arsip' catatans={archivedNotes} setNotes={setNotes} />
      </main>
    </>
  );
}

export default Aplikasi;
