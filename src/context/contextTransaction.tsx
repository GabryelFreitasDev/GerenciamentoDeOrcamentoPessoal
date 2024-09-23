import { createContext, useState, ReactNode } from "react";
import { TransactionProps } from "../@types/transaction";

interface TransactionContextProps {
  transactions: TransactionProps[];
  saldo: number;
  addTransaction: (trans: TransactionProps) => void;
}

export const ContextTransaction = createContext<TransactionContextProps | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [saldo, setSaldo] = useState(0);

  const addTransaction = (trans: TransactionProps) => {
    setTransactions((prev) => [...prev, trans]);
    setSaldo((prevSaldo) => prevSaldo + trans.value);
  };

  return (
    <ContextTransaction.Provider value={{ transactions, saldo, addTransaction }}>
      {children}
    </ContextTransaction.Provider>
  );
};
