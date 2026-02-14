import Card from "../common/Card";
import SmallStatCard from "./SmallStatCard";

const BalanceSection = () => {
  return (
    <div className="balance-wrapper">
      <Card>
        <h3>Total Balance</h3>
        <h1 style={{ color: "#34d399", margin: "15px 0" }}>
          $45,231.89
        </h1>

        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button className="btn-primary"aria-label="Add money to wallet">Add Money</button>
          <button className="btn-secondary">Withdraw</button>
          <button className="btn-secondary">Add New Account</button>
        </div>
      </Card>

      <div className="small-stats">
        <SmallStatCard title="Referral" amount="2362" />
        <SmallStatCard title="Bonus" amount="2362" />
      </div>
    </div>
  );
};

export default BalanceSection;
