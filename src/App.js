import SnackBar from './components/SnackBar/SnackBar';
import './App.css';

function App() {

  return (
    <div className="App">
      <SnackBar
        text="Ação concluída com êxito. Tente novamente maiss tarde"
        openButtonLabel="Executar ação"
        snackBarButtonLabel="Tente novamente"
        type="success"
        id="my-snack-bar"
        time={5000}
      />
    </div>
  );
}

export default App;
