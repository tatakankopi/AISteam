import React from 'react';

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const DateRangePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange
}: DateRangePickerProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tanggal Mulai
        </label>
        <input
          type="date"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tanggal Selesai
        </label>
        <input
          type="date"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          min={startDate || new Date().toISOString().split('T')[0]}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;