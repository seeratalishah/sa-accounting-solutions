import guess from "../../assets/images/icons/guess.png";
import stand from "../../assets/images/icons/stand.png";
import filling from "../../assets/images/icons/filling.png";

import decision from "../../assets/images/icons/decision.png";
import financial from "../../assets/images/icons/financial.png";
import controls from "../../assets/images/icons/controls.png";
import cost from "../../assets/images/icons/cost.png";
import skillset from "../../assets/images/icons/decision.png";
import productivity from "../../assets/images/icons/productivity.png";

import { cloudBKSvgCard, corporateReturnsSvgCard, payrollSvgCard, personalReturnSvgCard } from "../../utilities/svgs";

export const servicesData = [
  {
    id: "1",
    title: "Payroll Services",
    link: "payroll-services",
    svg: payrollSvgCard,
  },
  {
    id: "2",
    title: "Cloud Bookkeeping",
    link: "cloud-bookkeeping",
    svg: cloudBKSvgCard,
  },
  {
    id: "3",
    title: "Corporate Returns",
    link: "corporate-returns",
    svg: corporateReturnsSvgCard,
  },
  {
    id: "4",
    title: "Personal Returns",
    link: "personal-returns",
    svg: personalReturnSvgCard,
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

export const timeBackData = [
  {
    id: 1,
    icon: guess,
    title: "No More Guessing",
    desc: "Knowing your numbers and having a clear understanding of your financial health will mean that business decisions are more accurate.",
  },
  {
    id: 2,
    icon: filling,
    title: "Focus on Important Tasks",
    desc: "We go beyond just traditional bookkeeping to make sure your finance function is running as efficiently as possible, freeing up your time to focus on your business.",
  },
  {
    id: 3,
    icon: stand,
    title: "Know Where You Stand",
    desc: "We help you keep a better pulse on your business which means you will know what is working and what is not.",
  },
];

export const cfoSerData = [
  {
    id: 1,
    icon: decision,
    title: "Enhanced Decision Making",
  },
  {
    id: 2,
    icon: financial,
    title: "Better Financial Information",
  },
  {
    id: 3,
    icon: controls,
    title: "Improved Internal Controls",
  },
  {
    id: 4,
    icon: cost,
    title: "Cost-Effective Expertise",
  },
  {
    id: 5,
    icon: skillset,
    title: "Specialist Skillset",
  },
  {
    id: 6,
    icon: productivity,
    title: "Increased Productivity and Profitability",
  },
];
