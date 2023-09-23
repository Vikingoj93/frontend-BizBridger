"use client";
import { useSession  } from "next-auth/react";
import {useEffect} from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession();



  return <div>
            {
              <p>
                {JSON.stringify(session, null, 2)}
              </p>
            }
          </div>;
}
