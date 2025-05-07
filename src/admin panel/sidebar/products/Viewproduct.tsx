// components/ProductTable.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

const MOCK_PRODUCTS = [
  { id: 1, name: "Dark Spot Removal Cream", division: "Beauty", price: 599, image: "/products/cream.jpg" },
  { id: 2, name: "CloudDrive Device", division: "CloudDrive", price: 4999, image: "/products/cloud.jpg" },
];

export default function ViewProduct() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Division</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MOCK_PRODUCTS.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded object-cover" />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.division}</TableCell>
              <TableCell>₹{product.price}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
