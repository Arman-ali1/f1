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
import { Separator } from "@/components/ui/separator"
import AddQcModal from "@/components/dialogs/addQcModal"


export default function QcMaster() {
  const partChecks = [
    {
      id: "CHECK001",
      name: "Check A",
      description: "Description for Check A",
    },
    {
      id: "CHECK002",
      name: "Check B",
      description: "Description for Check B",
    },
    {
      id: "CHECK003",
      name: "Check C",
      description: "Description for Check C",
    },
    {
      id: "CHECK004",
      name: "Check D",
      description: "Description for Check D",
    },
    {
      id: "CHECK005",
      name: "Check E",
      description: "Description for Check E",
    },
    {
      id: "CHECK006",
      name: "Check F",
      description: "Description for Check F",
    },
    {
      id: "CHECK007",
      name: "Check G",
      description: "Description for Check G",
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
                <BreadcrumbPage>QC Master</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className=" flex">
        <AddQcModal />
        </div>
        <div className="container mx-auto py-10">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>QC Master</CardTitle>
              <CardDescription>The list of QC master.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>A list of your recent Quality checks.</TableCaption>
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
                  {partChecks.map((id :any) => (
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

