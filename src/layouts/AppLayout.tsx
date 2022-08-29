import React from "react";
import dynamic from "next/dynamic";

interface PropTypes {
  children: React.ReactNode;
}

const ModalHolder = dynamic(() => import("@/components/modals/ModalHolder"), { ssr: false });

const AppLayout = ({ children }: PropTypes) => {
  return (
    <div>
      <ModalHolder />
      <div className="">{children}</div>
    </div>
  )
}

export default AppLayout;