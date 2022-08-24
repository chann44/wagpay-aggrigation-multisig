import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Badge = ({ children }: Props) => {
  return (
    <>
      <div className="text-center bg-terceryDark p-3 w-full text-white">
        {children}
      </div>
    </>
  );
};

export default Badge;
