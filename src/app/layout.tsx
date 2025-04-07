import Head from "next/head";
import './globals.css'

export const metadata = {
  title: 'مراکز روانشناسی',
  description: 'توضیحات سایت مرکز روانشناسی و مشاوره آنلاین ریسلو در اینجا قرار می گیرد و این یک توضیحات تستی است',
  keywords: 'سرویس روان‌شناسی, سرویس اتوماسیون روان‌شناسی, سرویس نوبت‌دهی کلینیک‌های روان‌شناسی, سرویس نوبت‌دهی مطلب‌های روان‌شناسی, سرویس نوبت‌دهی مراکز روان‌شناسی',
  author: 'ریسلو',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <Head>

        <meta name="description" content="توضیحات سایت مرکز روانشناسی و مشاوره آنلاین ریسلو در اینجا قرار می گیرد و این یک توضیحات تستی است" />
        <meta name="keywords" content="سرویس روان‌شناسی, سرویس اتوماسیون روان‌شناسی, سرویس نوبت‌دهی کلینیک‌های روان‌شناسی, سرویس نوبت‌دهی مطلب‌های روان‌شناسی, سرویس نوبت‌دهی مراکز روان‌شناسی" />
        <meta name="author" content="ریسلو" />
        
        {/* ------ open graph tags */}
         <meta property="og:title" content="مراکز روانشناسی" />
        <meta property="og:description" content="توضیحات سایت مرکز روانشناسی و مشاوره آنلاین ریسلو در اینجا قرار می گیرد و این یک توضیحات تستی است" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="https://risloo.ir/" />

        {/* ---- tweeter tags */}
        <meta name="twitter:title" content="مراکز روانشناسی ریسلو" />
        <meta name="twitter:description" content="توضیحات سایت مرکز روانشناسی و مشاوره آنلاین ریسلو در اینجا قرار می گیرد و این یک توضیحات تستی است" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="" />

        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap" rel="stylesheet" />
      </Head>

      <body>
        {children}
      </body>
    </html>
  );
}
