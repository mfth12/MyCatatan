const Tombol = ({ label, eventHandler }) => {
  return (
    <button className='button' type='button' onClick={eventHandler} data-action={label}> {label} </button>
  );
};

export default Tombol;
