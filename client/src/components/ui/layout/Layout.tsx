import { FC, PropsWithChildren } from "react";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="grid" style={{ gridTemplateColumns: '1fr 4fr'}}>
        <Sidebar />
        <main className="p-12">{children}</main>
      </div>
      {/* <footer className="bg-secondary w-full py-7 px-6 text-center">
        <p className="text-white text-sm">©2023 Amazon | The site created by me</p>
      </footer> */}
    </div>
  );
};

export default Layout;
