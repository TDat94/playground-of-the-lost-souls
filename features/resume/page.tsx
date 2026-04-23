'use client';

import { Resume } from '@/components/resume/resume';

export default function ResumePage() {
  return (
    <div className="bg-background w-full">
      {/* Resume PDF embed with download button */}
      <div className="items-top mx-auto flex w-full max-w-4xl justify-center px-4 py-8 sm:px-8">
        <Resume />
      </div>
    </div>
  );
}
