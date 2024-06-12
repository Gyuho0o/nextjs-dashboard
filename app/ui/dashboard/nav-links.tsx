'use client';
// 이 코드는 이 파일이 클라이언트 컴포넌트임을 명시합니다. 클라이언트 컴포넌트에서는 React 훅이나 브라우저 API를 사용할 수 있습니다.

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
// 이 부분은 usePathname 훅을 next/navigation 모듈에서 가져오는 것입니다. usePathname 훅은 Next.js 13부터 도입된 next/navigation 모듈에서 제공하는 훅으로, 현재 URL의 경로(pathname)를 가져오는 데 사용됩니다. 이 훅을 사용하면 클라이언트 측에서 현재 페이지의 경로를 쉽게 추적하고 반응할 수 있습니다.

import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
