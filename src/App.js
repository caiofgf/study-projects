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
            type="primary"
            onClick={openSnackBar}
        >Executar ação</Button>
      <SnackBar
        text="Sistema indisponível. Tente de novo"
        snackBarButtonLabel="OK"
        type="success"
        id="my-snack-bar"
        time={50000}
        open={snackBarState}
        onClose={() => setSnackBarState(false)}
      />
    </div>
  );
}

export default App;
