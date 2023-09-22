"use client";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  console.log(session);
  return <div>
            {
              <p>
                {JSON.stringify(session, null, 2)}
              </p>
            }
          </div>;
}
