import SnackBar from './components/SnackBar/SnackBar';
import './App.css';

function App() {

  return (
    <div className="App">
      <SnackBar
        text="Ação executada com sucesso"
        openButtonLabel="Executar ação"
        snackBarButtonLabel="Concluído"
        type="success"
        id="my-snack-bar"
        time={5000}
      />
    </div>
  );
}

export default App;
