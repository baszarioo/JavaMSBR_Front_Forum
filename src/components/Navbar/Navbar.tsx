import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

export default function Navbar() {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <Link to="#" className="text-2xl font-bold text-gray-900">
              Travelio
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="#" className="text-gray-600 hover:text-gray-900" >
                Car Rental
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900" >
                Flights
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900" >
                Hotels
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900" >
                Packages
              </Link>
            </nav>
            <div className="flex space-x-4">
              <Button>
                <UserIcon className="w-5 h-5 mr-2" />
                Log In
              </Button>
              <Button>
                <UserIcon className="w-5 h-5 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        </header>
        </div>
    );
};

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }