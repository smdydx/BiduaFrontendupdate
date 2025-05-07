import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Image } from "lucide-react";
import { useForm } from "react-hook-form";

export default function AddProduct() {
  const form = useForm();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: any) => {
    console.log("Submitted product:", data);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("image", file.name);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 max-w-2xl">
        <h2 className="text-2xl font-semibold">Add New Product</h2>

        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter product name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="division"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Division</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select division" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beauty">Beauty Care</SelectItem>
                  <SelectItem value="cloud">CloudDrive</SelectItem>
                  <SelectItem value="naploo">Naploo</SelectItem>
                  <SelectItem value="oem">OEM Solutions</SelectItem>
                  <SelectItem value="it">IT Connect</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price (₹)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter price" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Image</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <Button variant="outline" type="button" onClick={handleFileClick}>
                    <Image className="w-4 h-4 mr-2" /> Upload Image
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    title="Upload product image"
                  />
                  {field.value && <span className="text-sm text-muted-foreground">{field.value}</span>}
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </Form>
  );
}
