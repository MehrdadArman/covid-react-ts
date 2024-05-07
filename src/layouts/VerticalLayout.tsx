import { FC, ReactNode } from "react";

interface VerticalLayoutPropsIF {
  children: ReactNode;
}

const VerticalLayout: FC<VerticalLayoutPropsIF> = ({ children }) => {
  return (
    <div className="flex" id="vertical-layout">
      <main className="flex-1  dark:bg-black bg-dark-grey/25">{children}</main>
    </div>
  );
};

export default VerticalLayout;
