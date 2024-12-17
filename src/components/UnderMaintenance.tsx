import { Cog } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Maintenance",
  description: "Our website is currently undergoing maintenance. We'll be back soon!",
};

export default function UnderMaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-yellow-200 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-800 mb-4">Under Maintenance</h1>
        <p className="text-xl text-yellow-600 mb-8">
          We're working on making things better. Check back soon!
        </p>
        <div className="animate-spin inline-block">
          <Cog className="w-16 h-16 text-yellow-500" />
        </div>
      </div>
    </div>
  );
}
