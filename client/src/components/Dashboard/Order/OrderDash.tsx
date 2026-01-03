import Search from "../../../ui/Search";
import Filter from "./Filter";
import Table from "../../../ui/Table";
import {
  OrderTableColData,
  OrderTableRowData,
} from "../../../api/OrderTableData";
import DashHeader from "../../../ui/DashHeader";

const OrderDash = () => {
  // header data
  const dashHeaderData = {
    title: "Orders",
    description: "Manage all customer orders",
    buttonText: "Add Order",
  };

  //   search text
  const searchText = "Search order by customer or product...";

  return (
    <div>
      {/* header */}
      <DashHeader dashHeaderData={dashHeaderData} />

      {/* show order */}
      <div class="border border-gray-200 mt-6  rounded-lg shadow-lg">
        <div class="p-5">
          {/* search */}
          <Search searchText={searchText} />

          {/* filter */}
          <Filter />
        </div>

        {/* table */}
        <Table {...[OrderTableColData, OrderTableRowData]} />
      </div>
    </div>
  );
};

export default OrderDash;
