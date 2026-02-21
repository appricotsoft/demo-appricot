'use client';

import Link from 'next/link';

const footerLinks = {
  pages: {
    title: 'Pages',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
  utility: {
    title: 'Utility',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Partners', href: '#' },
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: 'X' },
  { name: 'LinkedIn', href: '#', icon: 'in' },
  { name: 'Instagram', href: '#', icon: 'IG' },
  { name: 'Facebook', href: '#', icon: 'f' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <svg width="107" height="24" viewBox="0 0 107 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="20" fontFamily="system-ui" fontSize="24" fontWeight="600" fill="white">aoi</text>
              </svg>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Customer service software that enables you to build better customer relationships.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm font-medium transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Aoi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
