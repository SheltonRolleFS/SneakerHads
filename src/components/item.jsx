import { useState } from "react";

const Item = ({ name, price, image }) => {
  const [showData, setShowData] = useState(false);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const backgroundStyling = {
    background: `url(${image}) center center no-repeat`,
    backgroundSize: "cover",
  };

  const display = () => {
    setShowData(!showData);
  };

  return (
    <div onClick={display} className="item-card" style={backgroundStyling}>
      <div className={showData ? "overlay" : undefined} />
      <div className={showData ? "data" : undefined}>
        <h1>{name}</h1>
        <p>{formatter.format(price)}</p>
      </div>
    </div>
  );
};

export default Item;
