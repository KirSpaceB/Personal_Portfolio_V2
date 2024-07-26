export const ArrowUpComponent = ({ classname }: { classname: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <circle cx="12" cy="12" r="12" fill="white" />
      <path
        d="M12 6V18M12 6L7 11M12 6L17 11"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};