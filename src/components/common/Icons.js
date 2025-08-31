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

export const CalenderIcon = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"
    />
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
