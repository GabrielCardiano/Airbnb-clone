'use client';

import { useRouter } from "next/navigation"
import { ReactElement } from "react"
import Heading from "./Heading";
import Button from "./Button";

interface EmptyState {
  title?: string,
  subtitle?: string,
  showReset?: boolean,
}

function EmptyState({
  title = 'No exact matches',
  subtitle = 'Try changing or remove some of your filters',
  showReset,
}: EmptyState): ReactElement {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading
        center
        title={title}
        subtitle={subtitle}
      />
      <div className="w-48 mt-4 ">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  )
}

export default EmptyState