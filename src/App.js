import { AuthProvider } from "./Context/authContext";
import { GlobalStyle } from "./Global/style";
import Router from'./Router'

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
    </AuthProvider>
  );
}

export default App;
