import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardLayout = ({ children }: Props) => {
  return (
    <>
      <div className="h-[80vh] overflow-hidden w-full flex justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default CardLayout;
