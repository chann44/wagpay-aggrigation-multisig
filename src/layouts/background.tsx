import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  return (
    <div className="w-full md:w-1/2  lg:w-1/3  lg:h-[500px] p-3 bg-primaryDark lg:bg-secondaryDark space-y-3">
      {children}
    </div>
  );
};

export default Background;
