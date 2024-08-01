import guess from "../../assets/images/icons/guess.png";
import stand from "../../assets/images/icons/stand.png";
import filling from "../../assets/images/icons/filling.png";
import user from "../../assets/images/icons/user.png";
import money from "../../assets/images/icons/money.png";
import ecommerce from "../../assets/images/icons/ecommerce.png";
import earning from "../../assets/images/icons/earning.png";
import { cfoSvgCard, cloudBKSvgCard, corporateReturnsSvgCard, payrollSvgCard } from "../../utilities/svgs";

export const servicesData = [
  {
    id: "1",
    title: "Payroll Services",
    svg: payrollSvgCard,
    link: "payroll-services",
  },
  {
    id: "2",
    title: "Cloud Bookkeeping",
    svg: cloudBKSvgCard,
    link: "cloud-bookkeeping",
  },
  {
    id: "3",
    title: "Corporate Returns",
    svg: corporateReturnsSvgCard,
    link: "corporate-returns",
  },
  {
    id: "4",
    title: "CFO Services",
    svg: cfoSvgCard,
    link: "CFO-services",
  },
];

export const payrollData = [
  {
    id: 1,
    title: "Digital Onboarding",
  },
  {
    id: 2,
    title: "Direct Deposit",
  },
  {
    id: 3,
    title: "A cloud portal for employees to access their pay slips & T4s",
  },
  {
    id: 4,
    title: "Up-to-date tax codes as the employee’s profile changes",
  },
  {
    id: 5,
    title: "Accurate deductions to make sure you aren’t over/underpaying",
  },
  {
    id: 6,
    title: "Automated taxable benefit calculations",
  },
  {
    id: 7,
    title:
      "Convenient management of pension deductions, insurance payments, and other benefits",
  },
  {
    id: 8,
    title: "Hassle free expense claims",
  },
  {
    id: 9,
    title:
      "Simple tracking of vacation time, sick days, and any rollovers from year to year",
  },
];

export const whyPTSData = [
  {
    id: 1,
    icon: guess,
    title: "Simple & Convenient",
    desc: "With just a few clicks, we make it super easy and convenient to connect with a tax specialist who will assist in preparing and filing your tax return, all from the comfort of your home.",
  },
  {
    id: 2,
    icon: stand,
    title: "100% Online",
    desc: "We do everything online, so you don't have to worry about dropping off any paperwork or standing in line. Everything you need can be done right from your phone.",
  },
  {
    id: 3,
    icon: filling,
    title: "Affordable",
    desc: "Our pricing is based on the complexity of your return. We'll also make sure we maximize your tax credits to get as much money back as possible.",
  },
];

export const PTSQuestData = [
  {
    id: 1,
    icon: user,
    title: "Sole Proprietors",
    desc: "Whether you’re a contractor, consultant or running a home business, we’ll show you a ton of write offs that most solopreneurs don’t know about.",
  },
  {
    id: 2,
    icon: money,
    title: "Side Hustlers",
    desc: "Working a day-job and earning a little extra on the side? We can make sure everything is filed properly and make sure you’re getting your maximum deductions.",
  },
  {
    id: 3,
    icon: ecommerce,
    title: "eCommerce Pros",
    desc: "CRA has special rules for e-Commerce businesses. We make sure you’re compliant and reporting in the right regions.",
  },
  {
    id: 4,
    icon: earning,
    title: "Pensioners",
    desc: "Tax rules are always changing. We’ll work with you to make sure you keep as much of your hard-earned income as possible.",
  },
];
