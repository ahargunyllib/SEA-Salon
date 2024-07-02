"use client";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ServiceType } from "@/lib/placeholder-data";
import React from "react";

export function EditServiceForm({ oldService }: { oldService: ServiceType; }) {
  return <DialogHeader>
    <DialogTitle>Edit service</DialogTitle>
    <DialogDescription>
      Fill in the form below to edit the service
    </DialogDescription>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input placeholder={oldService.name} />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Description</Label>
        <Input placeholder={oldService.description} />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Duration (minutes)</Label>
        <Input
          type="number"
          placeholder={oldService.duration.toString()} />
      </div>
      <Button type="submit">Edit</Button>
    </div>
  </DialogHeader>;
}
