function DashboardIcon({
    width = 30,
    height = 30,
    fill = "#642182",
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
        viewBox="0 0 30 30"
      >
        <path d="M6 12.2222H11.7778V5H6V12.2222ZM6 18H11.7778V13.6667H6V18ZM13.2222 18H19V10.7778H13.2222V18ZM13.2222 5V9.33333H19V5H13.2222Z" fill={fill}/>
      </svg>
    );
  }
  
  export default DashboardIcon;

