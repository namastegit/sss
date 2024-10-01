import React, { useState } from 'react';
import { Search } from 'lucide-react';


const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [ishovering, setISHovering] = useState(false);

  const handleOnMouseLeave = () => {
if(!ishovering) {
  setOpenDropdown(null);
}
  }

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
    { title: "Cloud Services",  dropdown: [
      { name: "Cyber Security Services", content: <CloudServicesContent /> },
    ] },
    { title: "Pricing", dropdown:  [
      { name: "Cyber Security Services", content: <PricingContent /> },
    ] },
    { title: "Company", dropdown:[
      { name: "Cyber Security Services", content: <CompanyContent /> },
    ] },
    { title: "Resources", dropdown:[
      { name: "Cyber Security Services", content: <ResourcesContent></ResourcesContent> },
    ]  },
  ];

  return (<>
 <div>

 </div>
 <nav className={`bg-white max-w-6xl mx-auto  shadow-md ${openDropdown > 2 ? '' : 'relative group'}`}>
      <div className="max-w-6xl  mx-auto flex items-center justify-between space-x-3">
        {/* Logo */}
        <div className="flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120" height="70" viewBox="0 0 120 70"><defs><clipPath id="clip-ace-black-logo-web"><rect width="120" height="70"></rect></clipPath></defs><g id="ace-black-logo-web" clip-path="url(#clip-ace-black-logo-web)"><g id="ace-cloud-logo-1200x300" transform="translate(-249.271 -1926.6)"><g id="Group_239" data-name="Group 239" transform="translate(250.271 1932.6)"><path id="Path_4" data-name="Path 4" d="M5.078,123.58V80.227h51.33v40.411l-12.7-8.691L29.485,82.671,8.012,123.491Z" transform="translate(-4.444 -70.213)" fill="#c8361a"></path><g id="Group_8" data-name="Group 8"><g id="Group_238" data-name="Group 238"><path id="Path_5" data-name="Path 5" d="M24.223,2.44s9.483,35.4,30.278,49.877c0,0-2.1,3.331-3.468,3.892,0,0-18.269-8.569-27-32.7,0,0-6.2,23.811-19.4,35.329,0,0-3.776-2.867-4.635-4.592,0,0,21.449-27.717,23.315-53.18L23.475,0Z" fill="#3c3c3c"></path><path id="Path_6" data-name="Path 6" d="M67,209.9s27.085-22.625,62.872-21.455c0,0-32.182.23-64.7,25.93A3.244,3.244,0,0,1,67,209.9" transform="translate(-56.755 -164.889)" fill="#3c3c3c"></path></g></g><path id="Path_14" data-name="Path 14" d="M6.975-68.437H3.63l-.465,1.574H.156L3.74-76.4H6.955l3.583,9.536H7.452ZM6.364-70.5,5.311-73.927,4.27-70.5Zm10.087.93,2.517.286a3.527,3.527,0,0,1-.683,1.363,3.172,3.172,0,0,1-1.213.894,4.762,4.762,0,0,1-1.877.319,6.92,6.92,0,0,1-1.831-.2,3.2,3.2,0,0,1-1.259-.663,3.348,3.348,0,0,1-.826-1.076,3.785,3.785,0,0,1-.3-1.638,3.858,3.858,0,0,1,.364-1.774,3.213,3.213,0,0,1,.729-.933,3.358,3.358,0,0,1,.95-.614,5.267,5.267,0,0,1,1.984-.318,4.575,4.575,0,0,1,2.579.6,3.189,3.189,0,0,1,1.246,1.769l-2.491.332a1.154,1.154,0,0,0-.426-.667,1.383,1.383,0,0,0-.829-.224,1.338,1.338,0,0,0-1.064.471,2.135,2.135,0,0,0-.407,1.425,1.854,1.854,0,0,0,.4,1.292,1.33,1.33,0,0,0,1.028.442,1.414,1.414,0,0,0,.875-.267A1.589,1.589,0,0,0,16.451-69.569Zm11.4-.091H22.546a1.714,1.714,0,0,0,.345.95,1.255,1.255,0,0,0,1,.449,1.5,1.5,0,0,0,.742-.2,1.744,1.744,0,0,0,.462-.436l2.608.241a3.736,3.736,0,0,1-1.444,1.493,5.246,5.246,0,0,1-2.426.452,4.967,4.967,0,0,1-2.16-.387,3.171,3.171,0,0,1-1.3-1.229,3.71,3.71,0,0,1-.517-1.981,3.479,3.479,0,0,1,1.038-2.621,3.953,3.953,0,0,1,2.865-1,5.1,5.1,0,0,1,2.342.449,3.031,3.031,0,0,1,1.307,1.3,4.755,4.755,0,0,1,.449,2.218Zm-2.693-1.268a1.77,1.77,0,0,0-.413-1.1,1.2,1.2,0,0,0-.881-.332,1.2,1.2,0,0,0-1.008.5,1.835,1.835,0,0,0-.306.93Z" transform="translate(60.504 88.118)" fill="#3c3c3c"></path><path id="Path_15" data-name="Path 15" d="M11.748-71.906l2.582.781a4.762,4.762,0,0,1-.82,1.815,3.557,3.557,0,0,1-1.389,1.1,5.2,5.2,0,0,1-2.111.371,6.129,6.129,0,0,1-2.54-.452,4.027,4.027,0,0,1-1.7-1.589,5.387,5.387,0,0,1-.716-2.912,4.95,4.95,0,0,1,1.259-3.637A4.789,4.789,0,0,1,9.875-77.7a4.836,4.836,0,0,1,2.833.729,4.28,4.28,0,0,1,1.532,2.238l-2.6.579a2.228,2.228,0,0,0-.286-.637,1.7,1.7,0,0,0-.6-.52,1.738,1.738,0,0,0-.8-.182,1.73,1.73,0,0,0-1.535.806,3.422,3.422,0,0,0-.4,1.878A3.568,3.568,0,0,0,8.49-70.64a1.651,1.651,0,0,0,1.353.588,1.642,1.642,0,0,0,1.278-.475A2.937,2.937,0,0,0,11.748-71.906Zm3.929-5.633h2.654V-68H15.677Zm4.02,6.1a3.456,3.456,0,0,1,1.067-2.605,3.986,3.986,0,0,1,2.882-1.024,3.958,3.958,0,0,1,3.135,1.2,3.486,3.486,0,0,1,.852,2.387,3.467,3.467,0,0,1-1.057,2.612,4.04,4.04,0,0,1-2.924,1.018,4.1,4.1,0,0,1-2.693-.846A3.4,3.4,0,0,1,19.7-71.437Zm2.654-.007a2.085,2.085,0,0,0,.374,1.366,1.18,1.18,0,0,0,.94.442,1.175,1.175,0,0,0,.94-.436,2.156,2.156,0,0,0,.368-1.4,2.036,2.036,0,0,0-.371-1.337,1.154,1.154,0,0,0-.917-.439,1.2,1.2,0,0,0-.956.446A2.062,2.062,0,0,0,22.351-71.444ZM36.187-68H33.715v-1.119a3.642,3.642,0,0,1-1.116.982,2.968,2.968,0,0,1-1.382.293A2.251,2.251,0,0,1,29.5-68.5a2.834,2.834,0,0,1-.621-2.013v-4.4h2.66v3.8a1.4,1.4,0,0,0,.241.924.854.854,0,0,0,.676.273.965.965,0,0,0,.777-.364,2.1,2.1,0,0,0,.3-1.307v-3.324h2.647Zm8.879-9.536V-68H42.588v-1.021a3.334,3.334,0,0,1-.95.878,2.71,2.71,0,0,1-1.275.3,2.462,2.462,0,0,1-2.156-1.073,4.462,4.462,0,0,1-.745-2.608,3.792,3.792,0,0,1,.823-2.628,2.7,2.7,0,0,1,2.091-.911,2.914,2.914,0,0,1,1.122.208,2.551,2.551,0,0,1,.894.624v-3.3Zm-2.654,6.062a1.82,1.82,0,0,0-.345-1.213,1.1,1.1,0,0,0-.872-.4.961.961,0,0,0-.774.384,2.063,2.063,0,0,0-.312,1.288,1.945,1.945,0,0,0,.322,1.239.991.991,0,0,0,.8.394,1.066,1.066,0,0,0,.846-.4A1.987,1.987,0,0,0,42.412-71.476Z" transform="translate(55.606 105.044)" fill="#3c3c3c"></path></g><path id="Path_16" data-name="Path 16" d="M5.2-50.107H8.3v3.514h3.39v-3.514H14.8v10.041H11.688v-4.061H8.3v4.061H5.2Zm11.143,6.424a3.639,3.639,0,0,1,1.123-2.743A4.2,4.2,0,0,1,20.5-47.5a4.167,4.167,0,0,1,3.3,1.267,3.671,3.671,0,0,1,.9,2.514,3.65,3.65,0,0,1-1.113,2.75A4.254,4.254,0,0,1,20.5-39.9a4.319,4.319,0,0,1-2.835-.89A3.574,3.574,0,0,1,16.339-43.683Zm2.794-.007a2.195,2.195,0,0,0,.394,1.438,1.242,1.242,0,0,0,.99.466,1.237,1.237,0,0,0,.99-.459,2.27,2.27,0,0,0,.387-1.473,2.144,2.144,0,0,0-.39-1.407,1.215,1.215,0,0,0-.966-.462,1.262,1.262,0,0,0-1.007.469A2.171,2.171,0,0,0,19.133-43.69Zm6.411,1.6,2.767-.26a1.365,1.365,0,0,0,.479.705,1.424,1.424,0,0,0,.822.212,1.39,1.39,0,0,0,.87-.239.535.535,0,0,0,.24-.444.508.508,0,0,0-.315-.465,5.746,5.746,0,0,0-1.2-.287,12.506,12.506,0,0,1-2.017-.469,2.128,2.128,0,0,1-.952-.729,1.892,1.892,0,0,1-.387-1.17,1.916,1.916,0,0,1,.418-1.238,2.487,2.487,0,0,1,1.151-.777,6.114,6.114,0,0,1,1.966-.257,6.8,6.8,0,0,1,1.921.2,2.5,2.5,0,0,1,1.034.616,3.225,3.225,0,0,1,.688,1.13l-2.644.26a.9.9,0,0,0-.342-.514,1.4,1.4,0,0,0-.794-.219,1.127,1.127,0,0,0-.688.168.5.5,0,0,0-.216.407.434.434,0,0,0,.274.4,4.428,4.428,0,0,0,1.192.246,8.162,8.162,0,0,1,2.068.438,2.28,2.28,0,0,1,1.038.8,1.966,1.966,0,0,1,.36,1.143A2.248,2.248,0,0,1,32.9-41.2a2.573,2.573,0,0,1-1.2.948,5.759,5.759,0,0,1-2.229.352,5.3,5.3,0,0,1-2.839-.568A2.556,2.556,0,0,1,25.543-42.087Zm12.424-8.02v2.767H39.5V-45.3H37.967v2.577a1.386,1.386,0,0,0,.089.615.51.51,0,0,0,.479.232,3.06,3.06,0,0,0,.863-.178l.205,1.924a9.076,9.076,0,0,1-1.931.226,3.36,3.36,0,0,1-1.534-.267,1.627,1.627,0,0,1-.729-.811,4.764,4.764,0,0,1-.236-1.761V-45.3H34.146V-47.34h1.027v-1.336Zm2.966,0h2.788v1.9H40.933Zm0,2.767h2.788v7.274H40.933Zm4.568,0h2.6v1.185a3.864,3.864,0,0,1,1.178-1.038,3.1,3.1,0,0,1,1.452-.312,2.379,2.379,0,0,1,1.812.688,3,3,0,0,1,.654,2.127v4.623h-2.8v-4a1.456,1.456,0,0,0-.253-.969.9.9,0,0,0-.712-.284,1.013,1.013,0,0,0-.822.384,2.232,2.232,0,0,0-.315,1.377v3.493H45.5Zm14.417,0h2.609v6.869l.007.322a3.033,3.033,0,0,1-.291,1.3,2.746,2.746,0,0,1-.774,1,3.039,3.039,0,0,1-1.226.555,7.62,7.62,0,0,1-1.7.171,5.007,5.007,0,0,1-3.01-.658,2.142,2.142,0,0,1-.818-1.76q0-.137.014-.37l2.705.308a.879.879,0,0,0,.315.521,1.333,1.333,0,0,0,.774.212,1.169,1.169,0,0,0,.9-.322,1.652,1.652,0,0,0,.3-1.123v-1.1a2.9,2.9,0,0,1-.822.705,2.915,2.915,0,0,1-1.39.342,2.757,2.757,0,0,1-2.356-1.274,4.068,4.068,0,0,1-.637-2.39,3.687,3.687,0,0,1,.822-2.589,2.79,2.79,0,0,1,2.151-.89,3.015,3.015,0,0,1,1.4.288,3.049,3.049,0,0,1,1.031.952ZM57.3-43.813a1.727,1.727,0,0,0,.336,1.168,1.122,1.122,0,0,0,.884.38,1.126,1.126,0,0,0,.873-.394,1.735,1.735,0,0,0,.353-1.188,1.788,1.788,0,0,0-.37-1.216,1.158,1.158,0,0,0-.9-.421,1.048,1.048,0,0,0-.853.387A2.032,2.032,0,0,0,57.3-43.813Z" transform="translate(305.737 2026.048)" fill="#3c3c3c"></path></g></g></svg> 
        </div>

        {/* Navbar Items */}
        <ul className="flex space-x-3 h-2 ">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${openDropdown > 2 ?'relative group': " "}`}
              onMouseEnter={() => {
                setOpenDropdown(index);
                console.log(openDropdown);
                setHoveredItem("QuickBooks Hosting");
                setISHovering(true);
              }}
              onMouseLeave={() => {
                setISHovering(false),
                setOpenDropdown(false);
                handleOnMouseLeave}
              }
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

            
{openDropdown === index && item.dropdown.length > 0 && (
  
    <div className={`${openDropdown > 2 ? 'relative group' : 'absolute left-0'} mt-3 w-full bg-white shadow-xl rounded-lg z-10`}>
      <div className="flex">
        {index <= 2 ? (
          item.dropdown.length > 1 ? (
            <>
              {/* Accounting Solutions Dropdown */}
              <ul className="w-1/4 bg-[#F2F2F2] border-r">
                {item.dropdown.map((dropdownItem, idx) => (
                  <li
                    key={idx}
                    className={`px-4 py-7 hover:bg-white text-md cursor-pointer ${hoveredItem === dropdownItem.name ? 'bg-gray-100 text-red-600' : ''}`}
                    onMouseEnter={() => {setHoveredItem(dropdownItem.name);
                      setISHovering(true)}
                    }
                    onMouseLeave={()=> {
                      setISHovering(false);
                    }}
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
          )
        ) : (
          // Custom Design for 3rd, 4th, and 5th items
          <div className={`${openDropdown > 2 ? 'absolute right-0 border rounded-2xl bg-white ' : ''} ${openDropdown === 3 ? ' w-72' : 'w-96'}`}>
            {item.dropdown.map((dropdownItem, idx) => (
              <div key={idx} className="cursor-pointer">
                {dropdownItem.content}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  
)}

            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="">
         
          <Search className="h-6 w-6 text-gray-400" />
        </div>

        {/*Button */}
        <div className='bg-red-600 rounded-full  px-6 py-2 hover:bg-red-700 transition duration-300 ease-in-out '>     <button className=" text-white w-24 p-2 rounded-full text-[15px]">
          Try for Free
        </button></div>

      </div>
    </nav>
    </>
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
    <div className=" py-3 px-1 flex justify-between items-center">
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
  <div className=''>
    <h3 className="font-bold mb-2">Sage Application Hosting</h3>
    <div className="grid grid-cols-3 gap-4 mb-24">
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
    <div className=" mt-1 py-3 px-3 flex justify-between items-center">
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

const TaxSoftwareHostingContent = () => (
  <div>
    <h3 className="font-bold mb-2">Tax Software Hosting</h3>
    <div className=" mb-28 grid grid-cols-3 gap-4">
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

    
    <div className=" mt-1 py-3 px-3 flex justify-between items-center">
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

const PurchaseLicensesContent = () => (
  <div>
    <h3 className="font-bold mb-2">Purchase Licenses</h3>
    <p className='mb-40'>Content for Purchase Licenses...</p>
    
    <div className=" mt-3 py-3 px-3 flex justify-between items-center">
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

const CyberSecurityServicesContent = () => (
  <div className='p-2'>
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

    <div className=" py-3 px-3 flex justify-between items-center">
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


const CloudServicesContent = () => (
  <div className='p-2'>
    <h3 className="font-bold text-xl mb-4">Cyber Security Services</h3>
    <div className="grid grid-cols-4 gap-4">
      <div>
        {/* <h4 className="font-bold mb-2">Managed Security Services</h4> */}
        <ul className="space-y-1">
        <li className='font-bold'>Endpoint</li>
        <li className="text-red-600">Ransomware Protection →</li>
        <li className='font-bold'>Endpoint</li>
        <li className="text-red-600">Ransomware Protection →</li>
        <li className='font-bold'>Endpoint</li>
        <li className="text-red-600">Ransomware Protection →</li>
        <li className='font-bold'>Endpoint</li>
        <li className="text-red-600">Ransomware Protection →</li>
        <li className='font-bold'>Endpoint</li>
        <li className="text-red-600">Ransomware Protection →</li>
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
    </div>

    <div className=" py-3 px-3 flex justify-between items-center">
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
      <div className="flex items-center pr-2">
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
      
    </div>
  </div>

);


const PricingContent = () => (
  <div className=' p-2 w-full'>

    <div className="grid grid-cols-1 gap-6 mb-2">
      <div>
        {/* <h4 className="font-bold mb-2">Managed Security Services</h4> */}
        <ul className="space-y-1">
        <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>
       
        </ul>
      </div>
   
    </div>

  </div>

);



const CompanyContent = () => (
  <div className=' p-2 w-full'>

    <div className="grid grid-cols-2 gap-6 mb-2">
    <div>
        {/* <h4 className="font-bold mb-2">Managed Security Services</h4> */}
        <ul className="space-y-1">
        <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>
       
        </ul>
      </div>
      <div>
        {/* <h4 className="font-bold mb-2">Managed Security Services</h4> */}
        <ul className="space-y-1">
        <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-red-600 border border-red-600 rounded-full p-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="font-bold">Try Cloud Hosting</p>
        </div>
      </div>
       
        </ul>
      </div>
   
    </div>

  </div>

);


const ResourcesContent = () => (
  <div className=' p-2 w-full'>

    <div className="grid grid-cols-2 gap- mb-2">
      <div className='p-2  '>
         <p className="font-bold space-y-10 mb-4">Try Cloud Hosting</p>
         <p className="font-bold space-y-10 mb-4">Try Cloud Hosting</p>
         <p className="font-bold space-y-10 mb-4">Try Cloud Hosting</p>
         <p className="font-bold space-y-10 mb-4">Try Cloud Hosting</p>
         
        </div>
        <div className='p-2  '>
         <p className="font-bold space-y-10 mb-4">Try Cloud Hosting</p>
         <p className="font-bold space-y-10 mb-4">Try Cloud Hosting</p>
         <p className="font-bold space-y-10 mb-4">Try Cloud Hosting</p>
         <p className="font-bold space-y-10 mb-4">Try Cloud Hosting</p>
         
        </div>
   
    </div>

  </div>

);



export default Navbar;
