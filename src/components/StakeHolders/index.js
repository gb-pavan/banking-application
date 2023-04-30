import "./index.css";

const StakeHolders = ({ activeTab, onTabClick }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === "banker" ? "active" : ""} button-width`}
        onClick={() => onTabClick("banker")}
      >
        Banker
      </button>
      <button
        className={`tab ${activeTab === "customer" ? "active" : ""} button-width`}
        onClick={() => onTabClick("customer")}
      >
        Customer
      </button>
    </div>
  );
};


export default StakeHolders;



