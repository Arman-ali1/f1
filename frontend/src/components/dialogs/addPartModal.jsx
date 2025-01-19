"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox} from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddPartModal() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button id="add-part" className="m-2">
          Add Part
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Part</DialogTitle>
          <DialogDescription>
            Enter the details of the new part here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="part-name" className="text-right">
                Name
              </Label>
              <Input id="part-name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="part-number" className="text-right">
                Part Number
              </Label>
              <Input id="part-number" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input id="quantity" type="number" className="col-span-3" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="installationType">Tree Select</Label>
              <Select>
                <SelectTrigger id="installationType">
                  <SelectValue placeholder="Select a tree" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="new">Tree A</SelectItem>
                  <SelectItem value="upgrade">Tree B</SelectItem>
                  <SelectItem value="replacement">Tree C</SelectItem>
                  <SelectItem value="maintenance">Tree D</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="qcA">Select Quality Check</Label>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-4">
                  <Checkbox id="qrA" label="qr A" value="A" />
                  <Label htmlFor="qrA" className="text-right">Check A</Label>
                </div>
                <div className="flex flex-row space-x-4">
                  <Checkbox id="qrB" label="qr B" value="B" />
                  <Label htmlFor="qrB" className="text-right">Check B</Label>
                </div>
                <div className="flex flex-row space-x-4">
                  <Checkbox id="qrC" label="qr C" value="C" />
                  <Label htmlFor="qrC" className="text-right">Check C</Label>
                </div>
                <div className="flex flex-row space-x-4">
                  <Checkbox id="qrD" label="qr D" value="D" />
                  <Label htmlFor="qrD" className="text-right">Check D</Label>
                </div>
                <div className="flex flex-row space-x-4">
                  <Checkbox id="qrD" label="qr D" value="D" />
                  <Label htmlFor="qrD" className="text-right">Check E</Label>
                </div>
                <div className="flex flex-row space-x-4">
                  <Checkbox id="qrD" label="qr D" value="D" />
                  <Label htmlFor="qrD" className="text-right">Check F</Label>
                </div>
                <div className="flex flex-row space-x-4">
                  <Checkbox id="qrD" label="qr D" value="D" />
                  <Label htmlFor="qrD" className="text-right">Check G</Label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Part</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
