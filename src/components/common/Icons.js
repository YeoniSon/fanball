// Centralized SVG icon components

export const LocationIcon = ({ width = 15, height = 15, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 21s7.5-3 7.5-10.5S16.142 3 12 3 4.5 6.358 4.5 10.5 12 21 12 21Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 12.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
  </svg>
);

export const TimeIcon = ({ width = 15, height = 15, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 6v6l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

export const ChatIcon = ({ width = 15, height = 15, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M3 7.8C3 6.12 3 5.28 3.327 4.638c.287-.564.746-1.023 1.31-1.31C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327.565.287 1.024.746 1.311 1.31C21 5.28 21 6.12 21 7.8v5.4c0 1.68 0 2.52-.327 3.162-.287.564-.746 1.024-1.31 1.311C18.72 18 17.88 18 16.2 18H9.684c-.624 0-.936 0-1.234.061-.265.054-.521.144-.762.267-.271.139-.514.334-1.001.724L4.3 20.96c-.416.333-.624.499-.799.499a.5.5 0 0 1-.391-.188C3 21.135 3 20.868 3 20.335V7.8Z"
    />
  </svg>
);

export const SendIcon = ({
  width = 25,
  height = 25,
  strokeWidth = 2,
  viewBox = "0 0 25 25",
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox={viewBox}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m3.5 5.5 17 6.5-17 6.5 4.5-6.5-4.5-6.5Zm4.5 6.5 12.5 0"
    />
  </svg>
);

export const MessageIcon = ({ width = 20, height = 20, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9.163 5h6.675c2.038.015 3.677 1.679 3.662 3.717v4.513a3.74 3.74 0 0 1-1.062 2.617A3.73 3.73 0 0 1 15.837 16.947H9.163L5.5 19V8.717c-.007-.978.375-1.919 1.062-2.616A3.73 3.73 0 0 1 9.163 5Z"
    />
  </svg>
);

export const MailIcon = ({
  width = 20,
  height = 20,
  strokeWidth = 2,
  color = "#000000",
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);

export const PersonIcon = ({
  width = 230,
  height = 230,
  strokeWidth = 0.6,
}) => (
  <svg
    width={`${width}px`}
    height={`${height}px`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M4 20c0-4 4-6 8-6s8 2 8 6"
    />
  </svg>
);

export const TicketIcon = ({ width = 20, height = 20, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 0 0-2 2v3a2 2 0 1 1 0 4v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 1 1 0-4V7a2 2 0 0 0-2-2H5Z"
    />
  </svg>
);

export const PlusIcon = ({ width = 25, height = 25, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M6 12H18M12 6V18"
    />
  </svg>
);

export const ArrowLeftIcon = ({ width = 15, height = 15, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M21 12H3M3 12L10 19M3 12L10 5"
    />
  </svg>
);

export const ExclamationMarkIcon = ({
  width = 15,
  height = 15,
  strokeWidth = 2,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 7h1v7h-1zm1.5 9.5a1 1 0 1 0-1 1 1.002 1.002 0 0 0 1-1zm9.3-4A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"
    />
  </svg>
);

export const CalenderIcon = ({
  width = 20,
  height = 20,
  strokeWidth = 2,
  color = "#000000",
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    <path
      d="M3 10H21"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    <path
      d="M16 2V6"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    <path
      d="M8 2V6"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
  </svg>
);

export const ClockIcon = ({ width = 15, height = 15, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    />
  </svg>
);

export const LikesIcon = ({ width = 15, height = 15, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M7.3,11.4,10.1,3a.6.6,0,0,1,.8-.3l1,.5a2.6,2.6,0,0,1,1.4,2.3V9.4h6.4a2,2,0,0,1,1.9,2.5l-2,8a2,2,0,0,1-1.9,1.5H4.3a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2h3v10"
    />
  </svg>
);

export const ViewsIcon = ({ width = 15, height = 15, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
    />

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
    />
  </svg>
);

export const SaveIcon = ({ width = 15, height = 15, strokeWidth = 2 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
    />
  </svg>
);

export const IdCardIcon = ({
  width = 15,
  height = 15,
  strokeWidth = 2,
  fill = "#000000",
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M19 18.75H5C4.53668 18.7474 4.09309 18.5622 3.76546 18.2345C3.43784 17.9069 3.25263 17.4633 3.25 17V7C3.25263 6.53668 3.43784 6.09309 3.76546 5.76546C4.09309 5.43784 4.53668 5.25263 5 5.25H19C19.4633 5.25263 19.9069 5.43784 20.2345 5.76546C20.5622 6.09309 20.7474 6.53668 20.75 7V17C20.7474 17.4633 20.5622 17.9069 20.2345 18.2345C19.9069 18.5622 19.4633 18.7474 19 18.75ZM5 6.75C4.9337 6.75 4.87011 6.77634 4.82322 6.82322C4.77634 6.87011 4.75 6.9337 4.75 7V17C4.75 17.0663 4.77634 17.1299 4.82322 17.1768C4.87011 17.2237 4.9337 17.25 5 17.25H19C19.0663 17.25 19.1299 17.2237 19.1768 17.1768C19.2237 17.1299 19.25 17.0663 19.25 17V7C19.25 6.9337 19.2237 6.87011 19.1768 6.82322C19.1299 6.77634 19.0663 6.75 19 6.75H5Z"
      fill={fill}
    ></path>{" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 11.75C8.60444 11.75 8.21776 11.6327 7.88886 11.4129C7.55996 11.1932 7.30362 10.8808 7.15224 10.5154C7.00087 10.1499 6.96126 9.74778 7.03843 9.35982C7.1156 8.97186 7.30608 8.61549 7.58579 8.33579C7.86549 8.05608 8.22186 7.8656 8.60982 7.78843C8.99778 7.71126 9.39992 7.75087 9.76537 7.90224C10.1308 8.05362 10.4432 8.30996 10.6629 8.63886C10.8827 8.96776 11 9.35444 11 9.75C11 10.2804 10.7893 10.7891 10.4142 11.1642C10.0391 11.5393 9.53043 11.75 9 11.75ZM9 9.25C8.90111 9.25 8.80444 9.27933 8.72222 9.33427C8.63999 9.38921 8.57591 9.4673 8.53806 9.55866C8.50022 9.65002 8.49032 9.75056 8.50961 9.84755C8.5289 9.94454 8.57652 10.0336 8.64645 10.1036C8.71637 10.1735 8.80546 10.2211 8.90246 10.2404C8.99945 10.2597 9.09998 10.2498 9.19134 10.2119C9.28271 10.1741 9.3608 10.11 9.41574 10.0278C9.47068 9.94556 9.5 9.84889 9.5 9.75C9.5 9.61739 9.44732 9.49022 9.35355 9.39645C9.25979 9.30268 9.13261 9.25 9 9.25Z"
      fill={fill}
    ></path>{" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 15.75C11.8019 15.7474 11.6126 15.6676 11.4725 15.5275C11.3324 15.3874 11.2526 15.1981 11.25 15C11.25 14.32 11.08 13.75 9 13.75C6.92 13.75 6.75 14.32 6.75 15C6.75 15.1989 6.67098 15.3897 6.53033 15.5303C6.38968 15.671 6.19891 15.75 6 15.75C5.80109 15.75 5.61032 15.671 5.46967 15.5303C5.32902 15.3897 5.25 15.1989 5.25 15C5.25 12.25 8.07 12.25 9 12.25C9.93 12.25 12.75 12.25 12.75 15C12.7474 15.1981 12.6676 15.3874 12.5275 15.5275C12.3874 15.6676 12.1981 15.7474 12 15.75Z"
      fill={fill}
    ></path>{" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M17 10.75H14C13.8011 10.75 13.6103 10.671 13.4697 10.5303C13.329 10.3897 13.25 10.1989 13.25 10C13.25 9.80109 13.329 9.61032 13.4697 9.46967C13.6103 9.32902 13.8011 9.25 14 9.25H17C17.1989 9.25 17.3897 9.32902 17.5303 9.46967C17.671 9.61032 17.75 9.80109 17.75 10C17.75 10.1989 17.671 10.3897 17.5303 10.5303C17.3897 10.671 17.1989 10.75 17 10.75Z"
      fill={fill}
    ></path>{" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M16 13.75H14C13.8011 13.75 13.6103 13.671 13.4697 13.5303C13.329 13.3897 13.25 13.1989 13.25 13C13.25 12.8011 13.329 12.6103 13.4697 12.4697C13.6103 12.329 13.8011 12.25 14 12.25H16C16.1989 12.25 16.3897 12.329 16.5303 12.4697C16.671 12.6103 16.75 12.8011 16.75 13C16.75 13.1989 16.671 13.3897 16.5303 13.5303C16.3897 13.671 16.1989 13.75 16 13.75Z"
      fill={fill}
    ></path>
  </svg>
);

export const CheckPersonIcon = ({
  width = 15,
  height = 15,
  strokeWidth = 2,
  color = "#000000",
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="7"
      r="5"
      stroke={color}
      stroke-width={strokeWidth}
    ></circle>{" "}
    <path
      d="M17 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    <path
      d="M16 16L18.25 18L22 14"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>{" "}
  </svg>
);
