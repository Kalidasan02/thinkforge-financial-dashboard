import Card from "../common/Card";
import { transactions } from "../../data/dashboardData";

const TransactionList = () => {
  return (
    <Card>
      <h3 className="transaction-heading">Transaction History</h3>

      <div className="transaction-list">
        {transactions.map((txn, index) => (
          <div key={index} className="transaction-card">
            
            <div className="txn-left">
              <p className="txn-title">{txn.title}</p>
              <p className="txn-amount-large">
                {txn.amount} USD </p>
              <p className="txn-date">May 22, 2025, 6:35pm</p>
            </div>

            <div className="txn-right">
              <span
                className={
                  txn.status === "Success"
                    ? "status success"
                    : "status pending"
                }
              >
                {txn.status}
              </span>
            </div>

          </div>
        ))}
      </div>
    </Card>
  );
};

export default TransactionList;
