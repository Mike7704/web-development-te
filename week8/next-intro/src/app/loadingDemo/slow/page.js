import { SlowComponent } from "@/components/SlowComponent";

export default function SlowPage() {
  return (
    <div>
      <p className="text-green-400">Loading your slow page...</p>
      <SlowComponent />
    </div>
  );
}
