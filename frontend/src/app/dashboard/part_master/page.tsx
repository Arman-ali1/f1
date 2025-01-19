import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AddPartModal from "@/components/dialogs/addPartModal"
import { Separator } from "@/components/ui/separator"

export default function PartMaster() {
  const parts = [
    {
      id: "PART001",
      name: "Engine",
      description: "Car Engine",
    },
    {
      id: "PART002",
      name: "Transmission",
      description: "Automatic Transmission",
    },
    {
      id: "PART003",
      name: "Battery",
      description: "Car Battery",
    },
    {
      id: "PART004",
      name: "Tires",
      description: "All-Season Tires",
    },
    {
      id: "PART005",
      name: "Brakes",
      description: "Disc Brakes",
    },
    {
      id: "PART006",
      name: "Suspension",
      description: "Coil Spring Suspension",
    },
    {
      id: "PART007",
      name: "Exhaust",
      description: "Exhaust System",
    },
  ]
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Admin Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Part Master</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className=" flex">
        <AddPartModal />
        </div>
        <div className="container mx-auto py-10">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Parts Master</CardTitle>
              <CardDescription>List of Parts.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>A list of your recent Parts.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Serial no</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right pr-6">Edit</TableHead>
                    <TableHead className="text-right pr-6">Delete</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {parts.map((id) => (
                    <TableRow key={id.id}>
                      <TableCell className="font-medium">{id.id}</TableCell>
                      <TableCell>{id.name}</TableCell>
                      <TableCell>{id.description}</TableCell>
                      <TableCell className="text-right "><Button className="bg-green-500" variant="outline">Edit</Button></TableCell>
                      <TableCell className="text-right"><Button variant="outline" className="bg-red-500">Delete
                        </Button ></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                {/* <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter> */}
              </Table>
            </CardContent>
            {/* <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Schedule Installation</Button>
            </CardFooter> */}
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

