const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomer(customer) {
  const shortName =
    customer.name.split(" ").slice(0, -1).join(" ") +
    " " +
    customer.name.split(" ").pop()[0];
  return { ...customer, shortName };
}

function createCustomers(customers) {
  return customers
    .map((customer) => createCustomer(customer))
    .sort((a, b) => a.age - b.age);
}

const result = createCustomers(customers);
console.log(result);
