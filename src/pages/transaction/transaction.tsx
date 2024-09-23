import "./transaction.css";
import { useContext, useState } from "react";
import { TransactionProps } from "../../@types/transaction";
import { TransactionType } from "../../enums/transactionType";
import { ContextTransaction } from "../../context/contextTransaction";
import formatCurrency from "../../utils/formatUtils";

const Transaction = () => {
  const [getValor, setValor] = useState(0);
  const [getReceita, setReceita] = useState(false);
  const [getDespesa, setDespesa] = useState(false);

  const context = useContext(ContextTransaction);

  if (!context) return null;

  const { transactions, saldo, addTransaction } = context;

  function calculaSaldo() {
    let newTransaction: TransactionProps;

    newTransaction = {
      value: getReceita ? getValor : -getValor,
      type: getReceita ? TransactionType.receita : TransactionType.despesa,
    };

    addTransaction(newTransaction);
    setReceita(false);
    setDespesa(false);
    setValor(0);
  }

  return (
    <div className="transaction-container">
      <h1>Saldo: {formatCurrency(saldo)}</h1>
      {!getReceita && !getDespesa ? (
        <div>
          <button className="receita" onClick={() => setReceita(!getReceita)}>Adicionar Receita</button>
          <button className="despesa" onClick={() => setDespesa(!getDespesa)}>Adicionar Despesa</button>
        </div>
      ) : (
        <div></div>
      )}

      {getReceita || getDespesa ? (
        <div className="valor-input-container">
          <h2>{getReceita ? "Adicionando Receita" : "Adicionando Despesa"}</h2>
          <label>Valor:</label>
          <input
            type="number"
            step="0.01"
            placeholder="Insira o valor"
            onChange={(e) => setValor(parseFloat(e.target.value))}
          />
          <div className="buttons-container">
            <button className="salvar" onClick={calculaSaldo}>Salvar</button>
            <button className="cancelar" onClick={() => { setReceita(false); setDespesa(false); }}>Cancelar</button>
          </div>
        </div>

      ) : (
        <div className="transaction-list">
          <h2>Lista de transações</h2>
          {transactions?.map((transaction, index) => (
            <div
              key={index}
              className={`transaction ${transaction.type === TransactionType.receita ? "receita" : "despesa"}`}
            >
              <p>{formatCurrency(transaction.value)}</p>
              <p>{transaction.type === TransactionType.receita ? "Receita" : "Despesa"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transaction;
