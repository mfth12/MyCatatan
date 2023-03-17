import { useState, useEffect } from "react";
import { ambilDataCatatan } from "./utils/data";

import InputForm from "./components/input-form";
import Header from "./components/header";
import BagianCatatan from "./components/bagian";

function Aplikasi() {
  const [query, setQuery] = useState("");
  const [cariCatatans, setCari] = useState([]);
  const [catatans, setCatatans] = useState(ambilDataCatatan());
  const activeNotes = (cariCatatans || catatans).filter((note) => !note.archived);
  const archivedNotes = (cariCatatans || catatans).filter((note) => note.archived);

  useEffect(() => {
    setCari(catatans.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, catatans]);

  return (
    <>
      <Header cari={query} updateQuery={setQuery} updateNotes={setCatatans} />
      <main className='main'>
        <InputForm updateCatatans={setCatatans} />
        <BagianCatatan label='&#127894; Catatan Aktif' catatans={activeNotes} setCatatans={setCatatans} />
        <BagianCatatan label='&#128194; Arsip' catatans={archivedNotes} setCatatans={setCatatans} />
      </main>
    </>
  );
}

export default Aplikasi;
