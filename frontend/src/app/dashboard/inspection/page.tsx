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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function Inspection() {
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
                <BreadcrumbPage>Inspestion</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="container mx-auto py-10">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Inspection Master</CardTitle>
              <CardDescription>Enter the details for the inspection</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  {/* <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="projectName">Project Name</Label>
                    <Input id="projectName" placeholder="Enter project name" />
                  </div> */}
                  {/* <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter installation location" />
                  </div> */}
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="installationType">Select part</Label>
                    <Select>
                      <SelectTrigger id="installationType">
                        <SelectValue placeholder="Select a part" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="A">Part A</SelectItem>
                        <SelectItem value="B">Part B</SelectItem>
                        <SelectItem value="C">Part C</SelectItem>
                        <SelectItem value="D">Part D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="installationType">Start Inspection </Label>
                    <Select>
                      <SelectTrigger id="installationType">
                        <SelectValue placeholder="Select inspection state" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                        {/* <SelectItem value="Cancel">Cancel</SelectItem> */}
                        
                      </SelectContent>
                    </Select>
                  </div>
                  {/* <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="scheduledDate">Scheduled Date</Label>
                    <Input id="scheduledDate" type="date" />
                  </div> */}
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Enter description " />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button><a href="/dashboard/inspection/checks">Start scan</a></Button>
            </CardFooter>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

