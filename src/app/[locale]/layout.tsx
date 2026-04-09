import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import { navigationData } from "@/data/db";
import Footer from "@/components/layouts/Footer";
import { Skiper89 } from "@/components/ui/skiper-ui/skiper89";
import { ThemeProvider } from "@/providers/ThemeProvider";
import HeadAdsServer from "@/components/layouts/HeadAds/HeadAdsServer";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YouTurkey Tech - Your Gateway to a Frontend Career",
  description:
    "YouTurkey Tech is a comprehensive hands-on program designed to take you from beginner to professional in frontend development. With real-world projects, modern tools, and industry best practices, we prepare you for a successful career in tech.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "en" ? "ltr" : "rtl"}
      suppressHydrationWarning
      className={cn("h-full", cairo.variable)}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <HeadAdsServer />
            <Header navigationData={navigationData} />
            {children}
            <Toaster />
            <Skiper89 />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
