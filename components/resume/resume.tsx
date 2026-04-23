'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';

const PDF_PATH = 'DoPhanTuanDat_CV.pdf';

export const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_PATH;
    link.download = 'DoPhanTuanDat_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Download Button */}
      <div className="flex justify-center">
        <CustomButton onClick={handleDownload} className="gap-2">
          <span className="nf nf-oct-download" />
          Download
        </CustomButton>
      </div>

      {/* PDF Embed */}
      <div className="flex justify-center">
        <iframe
          src={PDF_PATH}
          title="Resume PDF"
          className="h-screen w-full max-w-4xl border border-gray-200 dark:border-gray-700"
        />
      </div>
    </div>
  );
};
