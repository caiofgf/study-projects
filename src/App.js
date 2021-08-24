import SnackBar from './components/SnackBar/SnackBar';
import Button from './components/Button/Button';
import './App.css';

function App() {

  function toggleSnackBar() {
    document.getElementById('my-snack-bar').classList.toggle('no-visible');
  }

  return (
    <div className="App">
      <Button
        onClick={toggleSnackBar}
      >Executar ação</Button>
      <SnackBar
        text="Ação executada com sucesso"
        button="Concluído"
        type="attention"
        id="my-snack-bar"
        buttonFunction={toggleSnackBar}
      />
    </div>
  );
}

export default App;
