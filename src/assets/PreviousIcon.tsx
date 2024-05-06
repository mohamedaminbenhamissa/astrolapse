function PreviousIcon({
    width = 30,
    height = 30,
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
        viewBox="0 0 30 30"
      >
       <path d="M11.9625 7.4126L4.375 15.0001L11.9625 22.5876" stroke="#642182" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.6249 15L4.5874 15" stroke="#642182" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  }
  
  export default PreviousIcon;
