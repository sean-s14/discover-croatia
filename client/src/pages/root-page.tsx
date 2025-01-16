import Navigation from "@/components/layout/navigation";
import { Outlet } from "react-router";
import BackButton from "@/components/common/back-button";

export default function RootPage() {
  return (
    <div>
      <Navigation />
      <BackButton />
      <Outlet />
    </div>
  );
}
