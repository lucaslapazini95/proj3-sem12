interface GeneralButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const GeneralButton: React.FC<GeneralButtonProps> = ({
  children,
  onClick,
  width = 222,
  height = 74,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ width: `${width}px`, height: `${height}px` }}
      className="bg-[#B88E2F] text-white text-base font-bold rounded-md border-none cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#B88E2F] hover:border hover:border-[#B88E2F]"
    >
      {children}
    </button>
  );
};

export default GeneralButton;
