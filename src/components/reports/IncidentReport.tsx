import React from 'react';
import { useReports } from '../../hooks/useReports';
import { Button } from '../ui/Button';
import { FileText, Printer } from 'lucide-react';

export const IncidentReport = () => {
  const { generateReport, loading } = useReports();

  const handleGenerateReport = async () => {
    const report = await generateReport({
      type: 'incident',
      format: 'pdf',
      dateRange: {
        start: new Date(Date.now() - 24 * 60 * 60 * 1000), // Last 24 hours
        end: new Date(),
      },
    });

    // Open report in new window
    window.open(URL.createObjectURL(report), '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Daily Incident Report</h3>
        <Button onClick={handleGenerateReport} loading={loading}>
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <div className="space-y-2">
        <Button variant="secondary" className="w-full" onClick={() => handleGenerateReport()}>
          <Printer className="h-4 w-4 mr-2" />
          Print Report
        </Button>
      </div>
    </div>
  );
};