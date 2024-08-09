import owe from "../../assets/images/icons/owe.png";
import taxLev from "../../assets/images/icons/tax-lev.png";
import filling from "../../assets/images/icons/filling.png";
import {
  cfoSvgCard,
  cloudBKSvgCard,
  corporateReturnsSvgCard,
  payrollSvgCard,
  personalReturnSvgCard,
} from "../../utilities/svgs";
import { PiUsersFill } from "react-icons/pi";
import { HiShieldCheck } from "react-icons/hi";
import { GiFreedomDove } from "react-icons/gi";
import { GrSettingsOption } from "react-icons/gr";
import integrity from "../../assets/images/icons/integrity.png";

import cb from "../../assets/service-icons/cb-service.png";
import payroll from "../../assets/service-icons/payroll-service.png";
import cr from "../../assets/service-icons/cr-service.png";
import cfo from "../../assets/service-icons/cfo-service.png";
import pr from "../../assets/service-icons/pr-service.png";
import fb from "../../assets/service-icons/fb-service.png";
import ass from "../../assets/service-icons/ass-service.png";
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
    title: "Corporate Returns",
    icon: cr,
    link: "corporate-returns",
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
    title: "Assurance Services",
    icon: ass,
    link: "assurance-services",
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

export const pcBenfits = [
  {
    id: 1,
    icon: PiUsersFill,
    title: "Lower Corporate Income Tax Rates",
    desc: "Corporations benefit from more favorable tax rates compared to individual tax rates, leaving more funds available for business growth.",
  },
  {
    id: 2,
    icon: HiShieldCheck,
    title: "Income Splitting",
    desc: "Corporations allow for income splitting among family members, such as spouses, parents, and children, which can result in substantial tax savings by utilizing lower tax brackets.",
  },
];

export const FAQsData = [
  {
    id: 1,
    title: "What are the different levels of assurance?",
    desc: "There are three types of reports produced Notice To Reader – does not provide any level of assurance to the user of the statements Review Engagement – provides a limited level of assurances to the user of the statements Audit engagement – provides the highest level of assurance of the user of the statements Usually, the use of assurance engagements are a result of bank financing requests, owners who may not be actively involved in the business or for businesses who might potentially be looking to be sold in the near future.",
  },
  {
    id: 2,
    title: "What is the highest level of assurance?",
    desc: "An Audit Engagement is the highest level of assurance of the user of the statements.",
  },
  {
    id: 3,
    title: "Why should your business have a quarterly review of it's business results?",
    desc: "Working with a professional can help you interpret what the numbers mean and where they are going. This can be invaluable for the business owner to ensure they have a correct understanding to be able to assess their future strategies. In addition, the quarterly review provides a great opportunity to discuss upcoming plans and be able to get input from your professional advisor",
  },
  {
    id: 4,
    title: "My company is very profitable, but I never seem to have cash in the bank.",
    desc: "An analysis would need to be done to determine the relationship between net profits, profitability, and cashflow. An examination of how cash is used in the business can reveal how the cash flow cycle could be improved to benefit your company.",
  },
  {
    id: 5,
    title: "What is budgeting & forecasting?",
    desc: "Budgeting is a part of a planning process that you undertake in advance of your next business year. It is where you plan for the results of the company’s activities for the next year. Budgeting is important because it provides a target for management to strive for in its operations. Forecasting is performed at different times over the year to provide a best estimate to as to where the company results will end up at the end of the year. Forecasting has more relevance as the year progresses since this process can take into account changes in the business environment that management might not been able to identify at the beginning of the year (e.g. economic downturn or change in interest rates).",
  },
  {
    id: 6,
    title: "How can a CPA benefit a business owner with their strategic planning?",
    desc: "A CPA can provide input on your strategic plans regarding how they can affect profitability of the business and taxation. This information may change the strategic plan to better maximize profitability for the business.",
  },
];

export const incorporateServicesData = [
  {
    id: 1,
    icon: integrity,
    title: "Incorporation Guide",
    desc: "Guiding you through the incorporation process step-by-step",
  },
  {
    id: 1,
    icon: integrity,
    title: "Incorporation Requirements",
    desc: "Providing expert advice on the requirements and regulations",
  },
  {
    id: 1,
    icon: integrity,
    title: "Professional Corporation Setup",
    desc: "Assisting with the establishment of professional corporations",
  },
  {
    id: 1,
    icon: integrity,
    title: "Incorporation Tax Strategies",
    desc: "Offering tax planning strategies to maximize the benefits of incorporation",
  },
];
