function DownIcon({
    width = 28,
    height = 28,
    
  }: {
    width?: number;
    height?: number;
    fill?: string;
  }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          stroke="#C4D0E8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 10.5L14 17.5L7 10.5"
        ></path>
      </svg>
    );
  }
  
  export default DownIcon;




