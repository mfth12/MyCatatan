import Card from "./card";

const Bagian = ({ label, catatans, setCatatans }) => {
  return (
    <section>
      <h2 className="heading">{label}</h2>
      {catatans.length === 0 ? (
        //jika catatan kosong
        <h5 className="empty_note">Tidak ada catatan.</h5>
      ) : (
        //jika ada isi, menampilkan catatan dalam bentuk map
        <div className="list_of_notes">
          {catatans?.map((note) => (
            <Card key={note.id} action={setCatatans} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Bagian;
