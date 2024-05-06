function FilterIcon({
    width = 25,
    height = 24,
    fill = "none",
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
        fill={fill}
        viewBox="0 0 25 24"
      >
        
        <path d="M4 7H22" stroke="#C4D0E8" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M7 12H19" stroke="#C4D0E8" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M11 17H15" stroke="#C4D0E8" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    );
  }
  
  export default FilterIcon;

