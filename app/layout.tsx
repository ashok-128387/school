import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'RNR Global Academy - JSS Karnataka Open School Study Center',
  description: 'Professional education center offering SSLC, PUC, graduation, and post-graduation programs. 100% result-oriented guidance with expert teaching staff.',
  keywords: 'SSLC, PUC, education, Karnataka, open school, graduation programs',
  generator: 'v0.app',
  openGraph: {
    title: 'RNR Global Academy - Your Future Begins Here',
    description: 'Quality education with 100% success rate. Admissions open for SSLC, PUC, and graduation programs.',
    type: 'website',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RNR Global Academy",
              "url": "https://www.rnrglobalacademy.com/",
              "logo": "https://www.rnrglobalacademy.com/images/logo.png",
              "description": "Professional education center offering SSLC, PUC, graduation, and post-graduation programs under JSS Karnataka Open School.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2nd Floor, Uttarahalli Main Rd",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560061",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9113676485",
                "contactType": "Admissions",
                "email": "info@rnrglobalacademy.com"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
