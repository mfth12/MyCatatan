import { useState, useEffect } from "react";
import { ambilDataCatatan } from "./utils/data";

//import input-form, header, dan bagian-catatan
import InputForm from "./components/input-form";
import Header from "./components/header";
import BagianCatatan from "./components/bagian";

function Aplikasi() {
  const [query, setQuery] = useState("");
  const [cariCatatans, setCari] = useState([]);
  const [catatans, setCatatans] = useState(ambilDataCatatan());
  const catatanAktif = (cariCatatans || catatans).filter((note) => !note.archived);
  const catatanArsip = (cariCatatans || catatans).filter((note) => note.archived);
  //filter pencarian catatan
  useEffect(() => {
    setCari(catatans.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, catatans]);

  //mengembalikan UI aplikasi
  return (
    <>
      <Header cari={query} updateQuery={setQuery} updateNotes={setCatatans} />
      <main className='main'>
        <InputForm updateCatatans={setCatatans} />
        <BagianCatatan label='&#127894; Catatan Aktif' catatans={catatanAktif} setCatatans={setCatatans} />
        <BagianCatatan label='&#128194; Arsip' catatans={catatanArsip} setCatatans={setCatatans} />
      </main>
    </>
  );
}

export default Aplikasi;
