import './App.css';

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
import contacts from './data/contacts.json'
import Contact from './components/Contact'
import Header from './components/Header'

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <Contact data={contacts[0]}></Contact>
      <Contact data={contacts[1]}></Contact>
      <Contact data={contacts[2]}></Contact>
      <Contact data={contacts[3]}></Contact>
      <Contact data={contacts[4]}></Contact>
      <Contact data={contacts[5]}></Contact>
      
    </div>
  );
}

export default App;
