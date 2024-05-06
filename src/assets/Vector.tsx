function Vector({
    width = 24,
    height = 31,
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
        viewBox="0 0 33 31"
      >
       <path d="M17.3451 15.6385L13.3659 19.6177C11.1588 21.8248 11.1588 25.3851 13.3659 27.5922C15.573 29.7992 19.1333 29.7992 21.3404 27.5922L27.6072 21.3254C32.0052 16.9273 32.0052 9.77446 27.6072 5.37641C23.2091 0.97837 16.0563 0.97837 11.6582 5.37641L4.82756 12.2071C1.05781 15.9768 1.05781 22.0986 4.82756 25.8845" stroke="#C4D0E8" stroke-width="2.41651" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  }
  
  export default Vector;