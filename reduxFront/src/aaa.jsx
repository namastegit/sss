import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    {
      title: "Accounting Solutions",
      dropdown: [
        { name: "QuickBooks Hosting", content: <QuickBooksHostingContent /> },
        { name: "Sage Application Hosting", content: <SageApplicationHostingContent /> },
        { name: "Tax Software Hosting", content: <TaxSoftwareHostingContent /> },
        { name: "Purchase Licenses", content: <PurchaseLicensesContent /> },
      ]
    },
    {
      title: "Cybersecurity Solutions",
      dropdown: [
        { name: "Cyber Security Services", content: <CyberSecurityServicesContent /> },
      ]
    },
    { title: "Cloud Services", dropdown: [] },
    { title: "Pricing", dropdown: [] },
    { title: "Company", dropdown: [] },
    { title: "Resources", dropdown: [] },
  ];

  return (
    <nav className="bg-white relative group  p-2 shadow-md">
      <div className="max-w-7xl  mx-auto flex items-center justify-between space-x-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/api/placeholder/200/80" alt="Ace Cloud Hosting" className="h-10 w-auto" />L0g0
        </div>

        {/* Navbar Items */}
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className=" "
              onMouseEnter={() => {
                setOpenDropdown(index);
                setHoveredItem("QuickBooks Hosting")
              }}
              onMouseLeave={() =>  setOpenDropdown(null)}
            >
              <a
                href="#"
                className="text-gray-700 hover:text-red-600 transition duration-300 ease-in-out flex items-center"
              >
                {item.title}
                {item.dropdown.length > 0 && (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {openDropdown === index && item.dropdown.length > 0 && (
<div className=' bg-transparent mt-10'><div className="absolute left-0  w-full bg-white shadow-xl rounded-lg z-10">
                  <div className="flex ">
                    {item.title === "Accounting Solutions" ? (
                      <>
                        {/* Accounting Solutions Dropdown */}
                        <ul className="w-1/4 border-r">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <li
                              key={idx}
                              className={`px-4 py-7 hover:bg-gray-100 text-md cursor-pointer ${hoveredItem === dropdownItem.name ? 'bg-gray-100 text-red-600' : ''}`}
                              onMouseEnter={() => setHoveredItem(dropdownItem.name)}
                            >
                              {dropdownItem.name}
                            </li>
                          ))}
                        </ul>
                        <div className="w-3/4 px-3 ">
                          {hoveredItem && item.dropdown.find(d => d.name === hoveredItem)?.content}
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Cybersecurity Solutions Dropdown */}
                        {item.dropdown.map((dropdownItem, idx) => (
                          <div key={idx} className="w-full">
                            {dropdownItem.content}
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* Footer Section */}
                  {/* <div className="border-t p-4 flex justify-between items-center bg-gray-50">
                    <div className="flex items-center">
                      <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-bold">Try Cloud Hosting</p>
                        <a href="#" className="text-red-600 hover:underline">Get My Free Trial</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 border border-blue-600 rounded-full p-2 mr-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-bold">Summer Offers</p>
                        <a href="#" className="text-blue-600 hover:underline">Explore Now!</a>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">Call Us At</p>
                      <a href="tel:+1-855-910-6927" className="text-green-600 hover:underline">+1-(855) 910-6927</a>
                    </div>
                  </div> */}
                </div></div>
                
              )}
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="relative">
          {/* <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Search"
          /> */}
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Try for Free Button */}
        <div className='bg-red-600 rounded-full px-2 py-2 hover:bg-red-700 transition duration-300 ease-in-out '>     <button className=" text-white w-24 p-2 rounded-full text-[13px]">
          Try for Free
        </button></div>

      </div>
    </nav>
  );
};

const QuickBooksHostingContent = () => (
  <div className=''>
    <h3 className="font-bold">QuickBooks Hosting</h3>
    <div className="grid grid-cols-2 gap-4 ">
      <ul className=' space-y-2'> 
        <li>QuickBooks Enterprise</li>
        <li>QuickBooks Pro</li>
        <li>QuickBooks Premier</li>
        <li>QuickBooks POS</li>
        <li>QuickBooks Add-ons Hosting</li>
      </ul>
      <ul className='space-y-2'>
        <li>QuickBooks Dedicated Server <span className="text-red-600 text-sm">New</span></li>
        <li>QuickBooks Accountant</li>
        <li>QuickBooks Canada</li>
        <li>QuickBooks Premier Contractor</li>
      </ul>
    </div>
    <div className='flex justify-between space-x-5 items-baseline mb-3 w-10/12 '>
      <div className="mt-4">
        <a href="#" className="text-red-600 hover:underline">Get Guided Demo →</a>
      </div>
      <div className="mt-2 ">
        <a href="#" className="text-red-600 hover:underline">See All QuickBooks Integrations →</a>
      </div>
    </div>
    <div className="border-t py-3 px-1 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
          <a href="#" className="text-red-600 hover:underline">Get My Free Trial</a>
        </div>
      </div>
      <div className="flex items-center">
        <div className='border-l mr-2 border h-20 '>

        </div>
        <span className="text-blue-600 border border-blue-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Summer Offers</p>
          <a href="#" className="text-blue-600 hover:underline">Explore Now!</a>
        </div>
      </div>
      <div className='flex items-center'>
      <div className='border-l mr-2 border h-20 '>

</div>
<span className="text-blue-600 border border-blue-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </span>
        <div>
        <p className="font-bold">Call Us At</p>
        <a href="tel:+1-855-910-6927" className="text-green-600 hover:underline">+1-(855) 910-6927</a>
      </div></div>
      
    </div>
  </div>
);

const SageApplicationHostingContent = () => (
  <div>
    <h3 className="font-bold mb-2">Sage Application Hosting</h3>
    <div className="grid grid-cols-3 gap-4">
      <ul>
        <li>Sage 50</li>
        <li>Sage 100 ERP</li>
        <li>Sage 300 ERP</li>
        <li>Sage 500 ERP</li>
      </ul>
      <ul>
        <li>Sage 100 Contractor</li>
        <li>Sage 300 Construction</li>
        <li>Sage X3</li>
      </ul>
      <ul>
        <li>Sage BusinessWorks</li>
        <li>Sage CRM</li>
        <li>Sage HRMS</li>
      </ul>
    </div>
  </div>
);

const TaxSoftwareHostingContent = () => (
  <div>
    <h3 className="font-bold mb-2">Tax Software Hosting</h3>
    <div className="grid grid-cols-3 gap-4">
      <ul>
        <li>Drake Tax Software</li>
        <li>Lacerte Software</li>
        <li>ProSeries Tax Software</li>
      </ul>
      <ul>
        <li>ATX Software</li>
        <li>ProSystem fx Tax</li>
        <li>UltraTax</li>
      </ul>
      <ul>
        <li>TaxAct</li>
        <li>TaxWise</li>
      </ul>
    </div>
  </div>
);

const PurchaseLicensesContent = () => (
  <div>
    <h3 className="font-bold mb-2">Purchase Licenses</h3>
    <p>Content for Purchase Licenses...</p>
  </div>
);

const CyberSecurityServicesContent = () => (
  <div>
    <h3 className="font-bold text-xl mb-4">Cyber Security Services</h3>
    <div className="grid grid-cols-3 gap-6">
      <div>
        <h4 className="font-bold mb-2">Managed Security Services</h4>
        <ul className="space-y-1">
          <li>Network Security</li>
          <li>Managed SIEM</li>
          <li>Managed EDR</li>
          <li>Endpoint Security</li>
          <li>Managed Email</li>
          <li>Managed DNS</li>
          <li>Vulnerability Management</li>
          <li>SOC as a Service</li>
          <li>CISO as a Service</li>
          <li>Risk Management</li>
          <li>Third-Party Vendor Management</li>
          <li>Managed Detection Response</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Professional Services</h4>
        <ul className="space-y-1">
          <li>Risk & Compliance</li>
          <li>Vulnerability Assessment</li>
          <li>Penetration Testing</li>
          <li>Security Awareness Program</li>
        </ul>
        <h4 className="font-bold mt-4 mb-2">Cyber Security Products</h4>
        <ul className="space-y-1">
          <li>Ace SIEM Shield</li>
          <li>Ace IDX</li>
        </ul>
        <h4 className="font-bold mt-4 mb-2">IT Services</h4>
      </div>
      <div>
        <h4 className="font-bold mb-2">Managed Backup Services</h4>
        <ul className="space-y-1">
          <li>Microsoft Office 365</li>
          <li>Endpoint</li>
          <li className="text-red-600">Ransomware Protection →</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;