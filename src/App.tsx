import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Transaction from "./pages/transaction/transaction";
import Home from "./pages/menu/menu";
import Sobre from "./pages/sobre/sobre";
import { TransactionProvider } from "./context/contextTransaction";
import Header from "./components/header/header";

function App() {
  
  return (
    <TransactionProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </TransactionProvider>
  );
}

export default App;
