import React from 'react';
import ReportHeader from '../../components/Reports/ReportHeader';
import ReportList from '../../components/Reports/ReportList';

const ReportListPage = () => {
  return (
    <div className="p-6">
      <ReportHeader />
      <ReportList />
    </div>
  );
};

export default ReportListPage;