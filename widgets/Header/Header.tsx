import { LogoApp } from '@/entities/common';
import { MenuBar } from '@/shared/ui';

const Header = () => {
  return (
    <header className="flex-1 bg-black25 place-content-center border-b border-b-grey38">
      <div className="min-h-16 flex items-center max-w-screen-lg m-auto">
        <LogoApp />
        <MenuBar />
      </div>
    </header>
  );
};

export default Header;
