"use client";
import React, { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const checkpoints = [
  {
    id: 1,
    label: "Checkpoint 1: Check A ",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 2,
    label: "Checkpoint 2: Check B",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 3,
    label: "Checkpoint 3: Check C",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 4,
    label: "Checkpoint 4: Check D",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
];

const InspectionPage = () => {
  const [checkedState, setCheckedState] = useState(
    checkpoints.map(() => ({ ok: false, ng: false }))
  );

  const handleCheck = (id: number, type: string) => {
    setCheckedState((prev) =>
      prev.map((state, index) =>
        index === id - 1
          ? { ok: type === "ok", ng: type === "ng" }
          : state
      )
    );
  };

  const handleSubmitInspection = () => {
    const completedChecks = checkedState.filter(
      (state) => state.ok || state.ng
    ).length;

    if (completedChecks === checkpoints.length) {
      alert("Part Passes All Checks");
    } else {
      alert("Please complete all checkpoints before submission.");
    }
  };

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
                <BreadcrumbLink href="/">Admin Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbLink href="/dashboard">Inspection</BreadcrumbLink>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Checks</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Inspection Page
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {checkpoints.map((checkpoint) => (
              <div
                key={checkpoint.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={checkpoint.imgSrc}
                  alt={checkpoint.label}
                  className="w-full h-full object-cover p-6"
                />
                <h2 className="text-lg font-semibold text-gray-700 text-center">
                  {checkpoint.label}
                </h2>
                <div className="flex gap-10 ">

                <label className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={checkedState[checkpoint.id - 1].ok}
                    onChange={() => handleCheck(checkpoint.id, "ok")}
                  />
                  <span className="ml-2 text-sm text-gray-600">OK</span>
                </label>
                <label className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={checkedState[checkpoint.id - 1].ng}
                    onChange={() => handleCheck(checkpoint.id, "ng")}
                  />
                  <span className="ml-2 text-sm text-gray-600">NG</span>
                </label>
                  </div>
              </div>
            ))}
          </div>
          <button
            type="submit"
            onClick={handleSubmitInspection}
            className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            SUBMIT INSPECTION
          </button>
          <p className="text-center text-gray-600 mt-4">
            Completed:{" "}
            {
              checkedState.filter((state) => state.ok || state.ng).length
            }{" "}
            / {checkpoints.length}
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default InspectionPage;
