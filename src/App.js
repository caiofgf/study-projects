import React, { useState } from 'react';
import Button from './components/Button/Button';
import SnackBar from './components/SnackBar/SnackBar';
import './App.css';

function App() {
  const [snackBarState, setSnackBarState] = useState(false);
  function openSnackBar() {
    setSnackBarState(true);
  }
  return (
    <div className="App">
      <Button
            onClick={openSnackBar}
        >Executar ação</Button>
      <SnackBar
        text="Ação concluída com êxito. Tente novamente maiss tarde"
        snackBarButtonLabel="Tente novamente"
        type="success"
        id="my-snack-bar"
        time={5000}
        open={snackBarState}
        onClose={() => setSnackBarState(false)}
      />
    </div>
  );
}

export default App;
