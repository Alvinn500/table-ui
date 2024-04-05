import React from "react";

interface Icons {
  color?: string;
  height: string;
  width: string;
}

const RefreshIcon: React.FC<Icons> = ({ color, width, height }) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   height={`${height || "24"}`}
    //   viewBox="0 -960 960 960"
    //   fill={`${color}`}
    //   width={`${width || "24"}`}
    //   // className={`${className}`}
    // >
    //   <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={`${color}`}
      height={`${height || "24"}`}
      width={`${width || "24"}`}
      viewBox="0 0 512 512"
    >
      {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
    </svg>
  );
};

export default RefreshIcon;
