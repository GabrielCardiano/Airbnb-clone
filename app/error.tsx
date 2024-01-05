'use client'

import { ReactElement, useEffect } from "react"
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  error: Error,
}

function Error({ error }: ErrorStateProps): ReactElement {

  useEffect(() => {
    console.error(error);

  }, [error]);

  return (
    <EmptyState 
      title="Uh Oh"
      subtitle="Something went wrong!"
    />
  )
}

export default Error;