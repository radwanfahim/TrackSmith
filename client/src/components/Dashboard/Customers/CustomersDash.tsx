import DashHeader from "../../../ui/DashHeader";

const CustomersDash = () => {
  const dashHeaderData = {
    title: "Customers",
    description: "Manage your customer database",
    buttonText: "Add Customer",
  };

  return (
    <div>
      {/* header */}
      <DashHeader dashHeaderData={dashHeaderData} />
    </div>
  );
};

export default CustomersDash;
