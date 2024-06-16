import { useRouter } from 'next/router';
import Image from 'next/image';

import logo from '@/shared/assets/common/logo.svg';

const LogoApp = () => {
  const { reload } = useRouter();
  return (
    <Image
      alt="Логотип"
      width={67}
      height={27}
      src={logo}
      onClick={reload}
      className="cursor-pointer"
    />
  );
};

export default LogoApp;
