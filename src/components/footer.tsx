import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface QuickLink {
  text: string;
  href: string;
}

interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

interface SocialMediaLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface FooterProps {
  quickLinks: QuickLink[];
  contactInfo: ContactInfo;
  socialMedia: SocialMediaLink[];
}

const Footer: React.FC<FooterProps> = ({ quickLinks, contactInfo, socialMedia }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="container ml-96 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-80">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-gray-300">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p>{contactInfo.address}</p>
            <p>Email: {contactInfo.email}</p>
            <p>Phone: {contactInfo.phone}</p>
          </div>
          <div className='ml-32'>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialMedia.map((platform, index) => (
                <a key={index} href={platform.href} className="hover:text-gray-300">
                  <span className="sr-only">{platform.name}</span>
                  <platform.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} University Alumni Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Example usage
const Footerr = () => {
  const quickLinks: QuickLink[] = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'FAQ', href: '#' },
  ];

  const contactInfo: ContactInfo = {
    address: 'Uiet, Panjab University,Sec-25,Chandigarh',
    email: 'alumni@university.edu',
    phone: '9467556790',
  };

  const socialMedia: SocialMediaLink[] = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];

  return <Footer quickLinks={quickLinks} contactInfo={contactInfo} socialMedia={socialMedia} />;
};

export default Footerr;