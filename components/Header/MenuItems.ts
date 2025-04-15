import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const navItems = [
  { 
    name: "Services",
    subMenuHeading: ["Tax Services", "Business Services", "Accounting Services"],
    subMenu: [
      {
        name: "Tax Planning",
        href: "/services/tax-planning",
        desc: "Tax planning and preparation services to minimize tax liabilities.",
        
      },
      {
        name: "Bookkeeping",
        href: "/services/bookkeeping",
        desc: "Accurate bookkeeping services to keep your financial records in order.",
        
      },
      {
        name: "Payroll",
        href: "/services/payroll",
        desc: "Comprehensive payroll services for businesses of all sizes.",
        
      },
    ], 
  },
  { 
    name: "Industries",
    subMenuHeading: ["Small Business", "Self Employed"],
    subMenu: [
      {
        name: "Small Business",
        href: "/industries/small-business",
        desc: "Tailored accounting solutions for small businesses.",
      },
      {
        name: "Self Employed",
        href: "/industries/self-employed",
        desc: "Accounting services designed for self-employed individuals.",
      },
    ],
  },
  { 
    name: "Bookkeeping", 
    subMenuHeading: [
      "Bookkeeping Services", "Franchises",
      "Law Firms",
      "Consultants",
      "Startups",
      "Self-Employed"],
    subMenu: [
      {
        name: "Bookkeeping Services",
        href: "/bookkeeping/bookkeeping-services",
        desc: "Professional bookkeeping services for businesses.",
      },
      {
        name: "Franchises",
        href: "/bookkeeping/franchises",
        desc: "Accounting solutions for franchise businesses.",
      },
      {
        name: "Law Firms",
        href: "/bookkeeping/law-firms",
        desc: "Specialized accounting services for law firms.",
      },
      {
        name: "Consultants",
        href: "/bookkeeping/consultants",
        desc: "Accounting services for consultants and freelancers.",
      },
      {
        name: "Startups",
        href: "/bookkeeping/startups",
        desc: "Financial management solutions for startups.",
      },
      {
        name: "Self-Employed",
        href: "/bookkeeping/self-employed",
        desc: "Bookkeeping services for self-employed individuals.",
      },
    ],
  },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export type MenuItemType = {
  name: string;
  href?: string;
  subMenuHeading?: string[] | undefined;
  subMenu?: {
    name: string;
    href: string;
    desc: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }[];
  gridCols?: number;
};

export type SubMenuItemType = {
  name: string;
  href: string;
  desc: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
