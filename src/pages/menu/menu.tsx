import { useContext } from "react";
import { ContextTransaction } from "../../context/contextTransaction"; 
import { TransactionType } from "../../enums/transactionType"; 
import "./menu.css"; 
import formatCurrency from "../../utils/formatUtils";

const Menu = () => {
  const context = useContext(ContextTransaction);

  if (!context) {
    return <div>Erro ao carregar transações.</div>;
  }

  const { transactions, saldo } = context;

  const totalEntradas = transactions
    .filter((transaction) => transaction.type === TransactionType.receita)
    .reduce((acc, curr) => acc + curr.value, 0);

  const totalSaidas = transactions
    .filter((transaction) => transaction.type === TransactionType.despesa)
    .reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="cards-container">
        <div className="card saldo">
          <h3>Saldo Atual</h3>
          <p className={saldo >= 0 ? "saldo-positivo" : "saldo-negativo"}>
            {formatCurrency(saldo)}
          </p>
        </div>

        <div className="card entradas">
          <h3>Total de Entradas</h3>
          <p>{formatCurrency(totalEntradas)}</p>
        </div>

        <div className="card saidas">
          <h3>Total de Saídas</h3>
          <p>{formatCurrency(totalSaidas)}</p>
        </div>
      </div>

      <div className="historico">
        <h3>Histórico de Transações:</h3>
        <ul className="transactions-list">
          {transactions.map((transaction, index) => (
            <li key={index} className={transaction.type === TransactionType.receita ? "receita" : "despesa"}>
              <span>{transaction.type === TransactionType.receita ? "Entrada" : "Saída"}: </span>
              <span>{formatCurrency(transaction.value)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
