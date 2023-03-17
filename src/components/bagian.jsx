import Card from "./card";

const Bagian = ({ label, catatans, setNotes }) => {
  return (
    <section>
      <h2 className="heading">{label}</h2>
      {catatans.length === 0 ? (
        <h5 className="empty_note">Tidak ada catatan.</h5>
      ) : (
        <div className="list_of_notes">
          {catatans?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Bagian;
