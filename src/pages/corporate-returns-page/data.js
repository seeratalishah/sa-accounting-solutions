import owe from "../../assets/images/icons/owe.png";
import taxLev from "../../assets/images/icons/tax-lev.png";
import filling from "../../assets/images/icons/filling.png";
import {
  cfoSvgCard,
  cloudBKSvgCard,
  payrollSvgCard,
  personalReturnSvgCard,
} from "../../utilities/svgs";

import cb from "../../assets/service-icons/cb-service.png";
import payroll from "../../assets/service-icons/payroll-service.png";
import ass from "../../assets/service-icons/ass-service.png";
import cfo from "../../assets/service-icons/cfo-service.png";
import pr from "../../assets/service-icons/pr-service.png";
import fb from "../../assets/service-icons/fb-service.png";
import ic from "../../assets/service-icons/ic-service.png";
import cor from "../../assets/service-icons/cor-service.png";
import sr from "../../assets/service-icons/sr-service.png";

export const servicesData = [
  {
    id: "1",
    title: "Cloud Bookkeeping",
    icon: cb,
    link: "cloud-bookkeeping",
  },
  {
    id: "2",
    title: "Payroll Services",
    icon: payroll,
    link: "payroll-services",
  },
  {
    id: "3",
    title: "Assurance Services",
    icon: ass,
    link: "assurance-services",
  },
  {
    id: "4",
    title: "CFO Services",
    icon: cfo,
    link: "CFO-services",
  },
  {
    id: "5",
    title: "Personal Returns",
    icon: pr,
    link: "personal-returns",
  },
  {
    id: "6",
    title: "Forecasting and budgeting",
    icon: fb,
    link: "/forecasting-and-budgeting",
  },
  {
    id: "7",
    title: "Incorporation",
    icon: ic,
    link: "incorporation",
  },
  {
    id: "8",
    title: "Professional Corporations",
    icon: cor,
    link: "professional-corporations",
  },
  {
    id: "9",
    title: "SR & ED services",
    icon: sr,
    link: "SR-&-ED-services",
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

export const corTaxSerData = [
  {
    id: 1,
    icon: owe,
    title: "Know What You Owe",
    desc: "Don’t make spending decisions based on what you think you owe. With Ledgerly, you will have a plan so you know what you will owe.",
  },
  {
    id: 2,
    icon: taxLev,
    title: "Leverage Every Tax Advantage",
    desc: "From a sole proprietorship to a corporation, there are many different ways to structure your company. Our Tax Professionals help you build a structure that works for you.",
  },
  {
    id: 3,
    icon: filling,
    title: "Painless Filing",
    desc: "We get everything you need, prepare your year-end financial statements and file your return. One package, done right.",
  },
];
