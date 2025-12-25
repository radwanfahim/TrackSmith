import { BsPlus } from "solid-icons/bs";
import Button from "../../../ui/Button";
import Search from "./Search";
import Filter from "./Filter";
import Table from "../../../ui/Table";
import {
  OrderTableColData,
  OrderTableRowData,
} from "../../../api/OrderTableData";

const OrderDash = () => {
  const plusBtn = BsPlus;
  return (
    <div>
      <div class="flex justify-between items-center">
        {/* text */}
        <div>
          <h1 class="text-3xl font-bold text-gray-700">Orders</h1>
          <p class="capitalize text-gray-700 mt-2">
            Manage all customer orders
          </p>
        </div>

        {/* button */}
        <div>
          <Button icon={plusBtn} text="Add Order" style="button-default px-5" />
        </div>
      </div>

      {/* show order */}
      <div class="border border-gray-200 mt-6  rounded-lg shadow-lg">
        <div class="p-5">
          {/* search */}
          <Search />

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
