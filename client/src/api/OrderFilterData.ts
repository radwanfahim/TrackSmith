interface OrderFilter {
  text: string;
}

const OrderFilterData: OrderFilter[] = [
  {
    text: "all",
  },
  {
    text: "Pending",
  },
  {
    text: "Shipped",
  },
  {
    text: "Delivered",
  },
];

export default OrderFilterData;
