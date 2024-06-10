import React from "react";
import { Card } from "../../../@/components/ui/card";
import { Label } from "../../../@/components/ui/label";
import { Input } from "../../../@/components/ui/input";
import { Button } from "../../../@/components/ui/button";
import './LoginComp.css';

export default function LoginComp() {
  return (
    <div className="pt-10">        
    <Card className="mx-auto max-w-sm">
      <div className="flex flex-col items-center space-y-6 p-6">
        <div className="space-y-1 text-center">
          <MountainIcon className="h-8 w-8" />
          <h2 className="text-2xl font-bold">Welcome back</h2>
        </div>
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="Enter your username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </div>
    </Card>
    </div>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}