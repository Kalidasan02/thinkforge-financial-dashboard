import Layout from "../components/layout/Layout";
import BalanceSection from "../components/dashboard/BalanceSection";
import WalletChart from "../components/dashboard/WalletChart";
import AccountCard from "../components/dashboard/AccountCard";
import TransactionList from "../components/dashboard/TransactionList";

import { bankAccounts, walletAccounts } from "../data/dashboardData";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-grid">
        {/* LEFT COLUMN */}
        <div className="left-section">
          <BalanceSection />

          <div className="section-header">
            <h3>Associated Bank Accounts</h3>
            <span className="dots">•••</span>
          </div>

          <div className="account-grid">
            {bankAccounts.map((acc) => (
              <AccountCard key={acc.id} {...acc} />
            ))}
          </div>

          <div className="section-header">
            <h3>Wallet Accounts</h3>
            <span className="dots">•••</span>
          </div>

          <div className="account-grid">
            {walletAccounts.map((acc) => (
              <AccountCard key={acc.name} {...acc} />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-section">
          <WalletChart />
          <TransactionList />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
