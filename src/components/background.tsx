import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  return (
    <div className="w-1/3 h-[500px] p-3 bg-secondaryDark space-y-3">
      {children}
    </div>
  );
};

export default Background;
