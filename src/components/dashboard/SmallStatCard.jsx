import Card from "../common/Card";

const SmallStatCard = ({ title, amount }) => {
  return (
    <Card className="small-card">
      <p className="small-title">{title}</p>
      <h3 className="small-amount">{amount} USD</h3>
      <p className="small-sub">+20% from last month</p>
    </Card>
  );
};

export default SmallStatCard;
