import Input from "./input";

//header tampilan UI
const Header = ({ cari, updateQuery }) => {
  return (
    <header className='container'>
      <h1 className='heading-header'>MyCatatan App</h1>
      <Input value={cari} onChange={updateQuery} type='search' id='search_note' name='search_note' placeholder='Cari catatan..' />
    </header>
  );
};

export default Header;
