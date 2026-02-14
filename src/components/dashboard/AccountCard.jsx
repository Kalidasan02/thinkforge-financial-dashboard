import Card from "../common/Card";

const AccountCard = ({ name, amount }) => {
  return (
    <Card className="account-card">
      <p className="account-name">{name}</p>
      <h3>{amount}</h3>
      <p className="small-sub">+12% since last hour</p>
    </Card>
  );
};

export default AccountCard;
