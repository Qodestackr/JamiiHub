import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$JAMII 250.00",
    paymentMethod: "MetaMask",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$JAMII 150.00",
    paymentMethod: "Rainbow",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$JAMII 350.00",
    paymentMethod: "Coinbase Wallet",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$JAMII 450.00",
    paymentMethod: "MetaMask",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$JAMII 550.00",
    paymentMethod: "WalletConnect",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$JAMII 200.00",
    paymentMethod: "Coinbase Wallet",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$JAMII 300.00",
    paymentMethod: "Rainbow",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of recent Transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Transactions</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
