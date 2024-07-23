const HeartIcon = ({ stroke = "black", fill = "none" }: { stroke?: string; fill?: string }) => {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="41" height="41" rx="4.5" stroke="black" strokeOpacity="0.5" />
      <path
        d="M16 12C13.239 12 11 14.216 11 16.95C11 19.157 11.875 24.395 20.488 29.69C20.6423 29.7839 20.8194 29.8335 21 29.8335C21.1806 29.8335 21.3577 29.7839 21.512 29.69C30.125 24.395 31 19.157 31 16.95C31 14.216 28.761 12 26 12C23.239 12 21 15 21 15C21 15 18.761 12 16 12Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill}
      />
    </svg>
  );
};

export default HeartIcon;
