import {
  CustomerTableColData,
  CustomerTableRowData,
} from "../../../api/CustomerTableData";
import DashHeader from "../../../ui/DashHeader";
import Search from "../../../ui/Search";
import Table from "../../../ui/Table";

const CustomersDash = () => {
  // header data
  const dashHeaderData = {
    title: "Customers",
    description: "Manage your customer database",
    buttonText: "Add Customer",
  };

  //   search text
  const searchText = "Search customer by name or phone...";

  return (
    <div>
      {/* header */}
      <DashHeader dashHeaderData={dashHeaderData} />

      {/* show order */}
      <div class="border border-gray-200 mt-6  rounded-lg shadow-lg">
        <div class="p-5">
          {/* search */}
          <Search searchText={searchText} />
        </div>

        {/* table */}
        <Table {...[CustomerTableColData, CustomerTableRowData]} />
      </div>
    </div>
  );
};

export default CustomersDash;
