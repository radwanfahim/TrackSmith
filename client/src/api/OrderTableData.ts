interface OrderTable {}

const OrderTableRowData: OrderTable[] = [
  {
    value: "customer",
  },
  {
    value: "product",
  },
  {
    value: "qty",
  },
  {
    value: "price",
  },
  {
    value: "profit",
  },
  {
    value: "payment",
  },
  {
    value: "status",
  },
  {
    value: "actions",
  },
];

const OrderTableColData = [
  {
    name: "John Doe",
    product: "Wireless Mouse",
    qty: "2",
    price: 50.0,
    profit: 15.0,
    payment: "Pending",
    status: "Delivered",
    actions: "View",
  },
  {
    name: "Jane Smith",
    product: "Mechanical Keyboard",
    qty: "1",
    price: 120.0,
    profit: 40.0,
    payment: "Paid",
    status: "Shipped",
    actions: "View",
  },
  {
    name: "Alice Wong",
    product: "USB-C Hub",
    qty: "5",
    price: 175.0,
    profit: 60.0,
    payment: "COD",
    status: "Cancelled",
    actions: "View",
  },
  {
    name: " Wong",
    product: "Hub",
    qty: "5",
    price: 175.0,
    profit: 60.0,
    payment: "Refunded",
    status: "Processing",
    actions: "View",
  },
];

export { OrderTableRowData, OrderTableColData };
