"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";

export default function ProfileTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <UserButton />
        </TooltipTrigger>
        <TooltipContent>
          <p>View profile</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
