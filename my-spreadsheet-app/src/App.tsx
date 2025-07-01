import React, { useState } from 'react';

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('All Orders');

  // Sample data for the table
  const tableData = [
    {
      id: 1,
      jobRequest: 'Launch social media campaign for pro...',
      submitted: '15-11-2024',
      status: { text: 'in-process', color: 'bg-blue-100 text-blue-800' },
      submitter: 'Aisha Patel',
      url: 'www.alphapetel...',
      assigned: 'Sophie Choudury',
      priority: { text: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
      dueDate: '20-11-2024',
      estValue: '6,200,000',
    },
    {
      id: 2,
      jobRequest: 'Update press kit for company redesign',
      submitted: '28-10-2024',
      status: { text: 'need to start', color: 'bg-gray-100 text-gray-800' },
      submitter: 'Irfan Khan',
      url: 'www.irfankhanp...',
      assigned: 'Tejas Pandey',
      priority: { text: 'High', color: 'bg-red-100 text-red-800' },
      dueDate: '30-10-2024',
      estValue: '3,500,000',
    },
    {
      id: 3,
      jobRequest: 'Finalize user testing feedback for app...',
      submitted: '05-12-2024',
      status: { text: 'in-process', color: 'bg-blue-100 text-blue-800' },
      submitter: 'Mark Johnson',
      url: 'www.markjohns...',
      assigned: 'Rachel Lee',
      priority: { text: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
      dueDate: '10-12-2024',
      estValue: '4,750,000',
    },
    {
      id: 4,
      jobRequest: 'Design new features for the website',
      submitted: '10-01-2025',
      status: { text: 'Complete', color: 'bg-green-100 text-green-800' },
      submitter: 'Emily Green',
      url: 'www.emilygreen...',
      assigned: 'Tom Wright',
      priority: { text: 'Low', color: 'bg-blue-100 text-blue-800' },
      dueDate: '15-01-2025',
      estValue: '5,800,000',
    },
    {
      id: 5,
      jobRequest: 'Prepare financial report for Q4',
      submitted: '25-01-2025',
      status: { text: 'Blocked', color: 'bg-red-100 text-red-800' },
      submitter: 'Jessica Brown',
      url: 'www.jessicabro...',
      assigned: 'Kevin Smith',
      priority: { text: 'Low', color: 'bg-blue-100 text-blue-800' },
      dueDate: '30-01-2025',
      estValue: '2,800,000',
    },
  ];

  // Function to render status/priority badges
  const renderBadge = (text:any, colorClass:any) => (
    <span className={`px-2 py-1 rounded-md text-xs font-semibold ${colorClass}`}>
      {text}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-inter flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 12v3c0 1.1.9 2 2 2h10a2 2 0 002-2v-3m-7 1.75l3.25-3.25m-3.25 3.25l-3.25-3.25M12 9V6a2 2 0 00-2-2H6a2 2 0 00-2 2v3" />
            </svg>
            <span className="font-semibold">Workspace</span>
            <span className="text-gray-400">/</span>
            <span>Folder 2</span>
            <span className="text-gray-400">/</span>
            <span className="font-semibold text-gray-900">Spreadsheet 3</span>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-8 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {/* Notification Bell Icon with Badge */}
          <button className="relative text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              3 {/* Example notification count */}
            </span>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://placehold.co/32x32/cccccc/ffffff?text=JD" // Placeholder for user avatar
              alt="User Avatar"
              className="w-8 h-8 rounded-full border border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">John Doe</span>
            <span className="text-xs text-gray-500">john.doe@example.com</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        

        {/* Main Spreadsheet View */}
        <main className="flex-1 flex flex-col bg-white">
          {/* Top Toolbar Row */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.16-1.47-1.16-1.85 0L9.2 5.5a1 1 0 00-.34.64l-.7 2.8a1 1 0 001.5 1.07l2.8-.7a1 1 0 00.64-.34l2.33-2.33c.38-.38.38-1.01 0-1.39l-2.33-2.33zM10 18a8 8 0 100-16 8 8 0 000 16zM8 11a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                </svg>
                <span>Tool bar</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span>Hide fields</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2h11.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 5H3z" clipRule="evenodd" />
                </svg>
                <span>Sort</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                <span>Filter</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm1.414-.586a1 1 0 00-1.414 1.414L7 9.414l-2.293 2.293a1 1 0 001.414 1.414L8.414 11l2.293 2.293a1 1 0 001.414-1.414L11 9.414l2.293-2.293a1 1 0 00-1.414-1.414L10 8.586l-2.293-2.293z" clipRule="evenodd" />
                </svg>
                <span>Cell view</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Import</span>
                </div>
              </button>
              <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Export</span>
                </div>
              </button>
              <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 0A3 3 0 1015 12a3 3 0 000 0" />
                  </svg>
                  <span>Share</span>
                </div>
              </button>
              <button className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700 flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>New Action</span>
              </button>
            </div>
          </div>

          {/* Second Toolbar Row (with ABC, Answer a question, Extract) */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Q3 Financial Overview section - Moved here */}
              <div className="bg-gray-200 rounded-md px-3 py-1 flex items-center space-x-1 text-gray-700 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Q3 Financial Overview</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 hover:text-gray-700 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <button className="px-3 py-2 rounded-md bg-green-100 text-green-800 text-sm font-medium hover:bg-green-200">
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>ABC ...</span>
                </div>
              </button>
              <button className="px-3 py-2 rounded-md bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200">
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9.228a4.5 4.5 0 000 6.364M12 20.001V21m0-11a4.5 4.5 0 00-4.5 4.5h9A4.5 4.5 0 0012 10.001zm0 0V3m0 0V2m0 1a9 9 0 110 18 9 9 0 010-18zm0 0a9 9 0 010 18zm0 0a9 9 0 110-18z" />
                  </svg>
                  <span>Answer a question</span>
                </div>
              </button>
              <button className="px-3 py-2 rounded-md bg-red-100 text-red-800 text-sm font-medium hover:bg-red-200">
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Extract</span>
                </div>
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>


          {/* Table Content */}
          <div className="flex-1 overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Request
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitter
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    URL
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigned
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Est. Value
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{row.id}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.jobRequest}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{row.submitted}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {renderBadge(row.status.text, row.status.color)}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.submitter}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-blue-600 underline cursor-pointer">{row.url}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.assigned}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {renderBadge(row.priority.text, row.priority.color)}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{row.dueDate}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 text-right">{row.estValue}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
                {/* Add empty rows for visual consistency */}
                {Array.from({ length: 20 - tableData.length }).map((_, index) => (
                  <tr key={`empty-${index}`} className="h-10 border-b border-gray-100">
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2 text-sm text-gray-400">{tableData.length + 1 + index}</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Tabs */}
          <div className="flex-shrink-0 bg-white border-t border-gray-200 p-4 flex items-center space-x-4">
            {['All Orders', 'Pending', 'Reviewed', 'Arrived'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </main>

        {/* Right Sidebar */}
    
      </div>
    </div>
  );
}

export default App;
