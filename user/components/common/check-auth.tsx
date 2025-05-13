'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const validAdminPaths = [
  '/admin',
  '/admin/project'
];

const publicPaths = ['/login', '/register', '/auth', '/portfolio', ];

function CheckAuth({ isAuthenticated, user, children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Skip if we're still loading auth state
    if (isAuthenticated === undefined) return;

    setIsChecking(false);

    // If on root path
    if (pathname === "/") {
      if (!isAuthenticated) {
        router.push('/');
      } else if (user?.role === "admin") {
        router.push('/admin');
      }
      return;
    }

    // If not authenticated and trying to access protected page
    if (!isAuthenticated && !publicPaths.some(p => pathname.includes(p))) {
      router.push('/auth');
      return;
    }

    // If authenticated but trying to access auth pages
    if (isAuthenticated && publicPaths.some(p => pathname.includes(p))) {
      if (user?.role === "admin") {
        router.push('/admin');
      } else {
        // Redirect regular users to home or another appropriate page
        router.push('/');
      }
      return;
    }

    // Admin path checks
    if (isAuthenticated) {
      // Non-admin trying to access admin paths
      if (pathname.includes("admin") && user?.role !== "admin") {
        router.push('/admin/un-auth');
        return;
      }

      // Admin trying to access invalid admin paths
      if (user?.role === "admin" && 
          pathname.includes('admin') && 
          !validAdminPaths.includes(pathname)) {
        router.push('/admin/un-auth');
        return;
      }

      // Admin trying to access shop - redirect to admin dashboard
      if (user?.role === "admin" && pathname.includes("shop")) {
        router.push('/admin/dashboard');
        return;
      }
    }
  }, [isAuthenticated, user, pathname, router]);

  // Show loading state or nothing while checking auth
  if (isChecking) {
    return null; // or return a loading spinner
  }

  return <>{children}</>;
}

export default CheckAuth;