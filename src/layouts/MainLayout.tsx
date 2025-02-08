import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const hideSidebarRoutes = ['/portal/product/new'];
  const isSidebarHidden = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1 w-full">
        {/* Left Sidebar */}
        {!isSidebarHidden && <LeftSidebar />}

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-100 overflow-auto">
          {children}
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout;
