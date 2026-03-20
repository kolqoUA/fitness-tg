type IconProps = {
  isChosen: boolean;
};

const Profile = (props: IconProps) => {
  const color = props.isChosen
    ? "var(--theme-primary-color)"
    : "var(--theme-text-color)";
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <circle
            cx="12"
            cy="6"
            r="4"
            stroke={color}
            strokeWidth="1.5"
          ></circle>
          <path
            d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    </>
  );
};

export default Profile;
