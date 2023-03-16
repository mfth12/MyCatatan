import Card from "./card";

const SectionNotes = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h2 className='heading'>{label}</h2>
      {notes.length === 0 ? (
        <p className='empty_note'>Tidak ada catatan.</p>
      ) : (
        <div className='list_of_notes'>
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionNotes;
