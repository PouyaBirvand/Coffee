import { useNavigate } from "react-router-dom";

const Others = () => {
    const navigate = useNavigate();
  
    const Other_icons = [
      {
        text: "orders",
        icon: (
          <svg
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#412f26 "
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5"
                stroke="#412f26 "
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H14.5"
                stroke="#412f26 "
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M14.1787 14.5H11.1376C9.85836 14.5 9.21875 14.5 8.71781 14.1697C8.21687 13.8394 7.96492 13.2515 7.461 12.0757L7.29218 11.6818C6.48269 9.79294 6.07794 8.84853 6.52255 8.17426C6.96715 7.5 7.99464 7.5 10.0496 7.5H15.3305C17.6295 7.5 18.779 7.5 19.2126 8.24711C19.6462 8.99422 19.0758 9.99229 17.9352 11.9884L17.6517 12.4846C17.0897 13.4679 16.8088 13.9596 16.3432 14.2298C15.8776 14.5 15.3113 14.5 14.1787 14.5Z"
                stroke="#412f26 "
                strokeLinecap="round"
              ></path>{" "}
              <circle cx="17" cy="20" r="1" fill="#412f26 "></circle>{" "}
              <circle cx="9" cy="20" r="1" fill="#412f26 "></circle>{" "}
            </g>
          </svg>
        ),
        onclick: () => {
          navigate("/cart");
        },
      },
      {
        text: "about us",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#412f26"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
        ),
      },
    ];
  
    return (
      <>
        <p className="mt-1 pt-1 text-sm">Others</p>
        <ul className="flex gap-1 flex-col pl-5 border-b border-opacity-30 pb-2 mt-1 border-dark-cocoa">
          {Other_icons.map((item, index) => (
            <li key={index}>
              <a
                className="text-dark-cocoa text-[1.1rem] flex items-center cursor-pointer"
                onClick={item.onclick}
              >
                <span className="w-[2rem] h-[2rem] mr-2 flex items-center justify-center">
                  {item.icon}
                </span>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  };

  export default Others;