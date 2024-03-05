import { Suspense } from "react";
import { SlowComponent } from "@/components/SlowComponent";
import Loading from "@/components/Loading";

export default function FastPage() {
  return (
    <div>
      <h2>Fast page</h2>
      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
            <Loading />
          </div>
        }
      >
        <SlowComponent />
      </Suspense>
    </div>
  );
}
