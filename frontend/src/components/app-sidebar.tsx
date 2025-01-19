// "use client";
import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import QcMaster from "@/app/dashboard/qc_master/page"
// import { useRouter } from "next/navigation"

// This is sample data.
const data = {
  versions: ["1.0.0", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Dashboard",
      // parentRoute:"dashboard",
      url: "#",
      items: [
        {
          title:"Qc Master",
          url: "/dashboard/qc_master",
          isActive: false,
          slug:"/qc_master",
          // compnent: <QcMaster />,
        },
        {
          title: "Part Master",
          url: "/dashboard/part_master",
          isActive: false,
          slug:"/part_master"
        },
        {
          title: "Inspection",
          url: "/dashboard/inspection",
          isActive: false,
          slug:"/inspection"
        },
      ],
    },
    // {
    //   title: "Building Your Application",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Examples",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const router = useRouter();
  return (
    <Sidebar  {...props}>
      <SidebarHeader 
      className="bg-blue-500 text-white"
      // className="text-white border-b-[1px] border-white   bg-blue-500"
      >
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        {/* <SearchForm /> */}
        {/* <p className="text-center">Company Name</p> */}
      </SidebarHeader>
      <SidebarContent className="bg-blue-500 text-white">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-blue-50" >{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive ?? false}>
                      {/* <span> */}
                      {/* {item.title} */}
                      <a href={`${item.url}`} className="text-blue-200">{item.title}</a>
                      {/* </span> */}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
