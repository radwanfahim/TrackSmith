interface CustomerTable {
  value: string;
}

const CustomerTableRowData: CustomerTable[] = [
  {
    value: "name",
  },
  {
    value: "phone",
  },
  {
    value: "address",
  },
  {
    value: "notes",
  },
  {
    value: "actions",
  },
];

const CustomerTableColData = [
  {
    name: "John Smith",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
    notes: "Preferred contact time: afternoons",
    actions: "edit",
  },
  {
    name: "Sarah Johnson",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Avenue, Los Angeles, CA 90001",
    notes: "VIP customer - priority service",
    actions: "view",
  },
  {
    name: "Michael Chen",
    phone: "+1 (555) 246-8135",
    address: "789 Pine Road, Chicago, IL 60601",
    notes: "Interested in premium package",
    actions: "delete",
  },
  {
    name: "Emily Rodriguez",
    phone: "+1 (555) 369-2580",
    address: "321 Elm Street, Houston, TX 77001",
    notes: "Follow up next week",
    actions: "edit",
  },
  {
    name: "David Kim",
    phone: "+1 (555) 147-2589",
    address: "654 Maple Drive, Phoenix, AZ 85001",
    notes: "New client - onboarding in progress",
    actions: "view",
  },
];

export { CustomerTableRowData, CustomerTableColData };
