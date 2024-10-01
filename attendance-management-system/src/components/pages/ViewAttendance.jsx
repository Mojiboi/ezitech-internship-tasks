import React from 'react';

export default function Attendance() {
  return (
    <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111517] tracking-light text-[32px] font-bold leading-tight">View Attendance</p>
            <p className="text-[#647987] text-sm font-normal leading-normal">View all attendance records in a clear and organized manner</p>
          </div>
        </div>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {['All Users', 'All Locations', 'All Role', 'All Dates'].map((item) => (
            <div key={item} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-4">
              <p className="text-[#111517] text-sm font-medium leading-normal">{item}</p>
            </div>
          ))}
        </div>
        <div className="px-4 py-3">
          <div className="flex overflow-hidden rounded-xl border border-[#dce1e5] bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-white">
                  {['Employee', 'Role', 'Location', 'Shift', 'Date', 'Clock In', 'Clock Out', 'Hours Worked'].map((header) => (
                    <th key={header} className="px-4 py-3 text-left text-[#111517] text-sm font-medium leading-normal">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-[#dce1e5]">
                  <td className="h-[72px] px-4 py-2 text-[#111517] text-sm font-normal leading-normal">Mia Williams</td>
                  <td className="h-[72px] px-4 py-2 text-[#647987] text-sm font-normal leading-normal">Server</td>
                  <td className="h-[72px] px-4 py-2 text-[#647987] text-sm font-normal leading-normal">Downtown</td>
                  <td className="h-[72px] px-4 py-2 text-[#647987] text-sm font-normal leading-normal">Lunch</td>
                  <td className="h-[72px] px-4 py-2 text-[#647987] text-sm font-normal leading-normal">Yesterday</td>
                  <td className="h-[72px] px-4 py-2 text-[#647987] text-sm font-normal leading-normal">12:02 PM</td>
                  <td className="h-[72px] px-4 py-2 text-[#647987] text-sm font-normal leading-normal">4:33 PM</td>
                  <td className="h-[72px] px-4 py-2 text-[#647987] text-sm font-normal leading-normal">4h 31m</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
