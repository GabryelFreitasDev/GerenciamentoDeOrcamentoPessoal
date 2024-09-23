import { TransactionType } from "../enums/transactionType";

export type TransactionProps = {
    value: number;
    type?: TransactionType;
}