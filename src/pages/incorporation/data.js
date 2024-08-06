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
    title: "CFO Services",
    svg: cfoSvgCard,
    link: "CFO-services",
  },
  {
    id: "4",
    title: "Personal Returns",
    svg: personalReturnSvgCard,
    link: "personal-returns",
  },
  {
    id: "5",
    title: "Forecasting and budgeting",
    svg: payrollSvgCard,
    link: "/forecasting-and-budgeting",
  },
  {
    id: "6",
    title: "Incorporation",
    svg: cloudBKSvgCard,
    link: "incorporation",
  },
  {
    id: "7",
    title: "Professional Corporations",
    svg: cfoSvgCard,
    link: "professional-corporations",
  },
  {
    id: "8",
    title: "Corporate Returns",
    svg: corporateReturnsSvgCard,
    link: "corporate-returns",
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
    title: "test",
    desc: "Guiding you through the incorporation process step-by-step",
  },
  {
    id: 1,
    icon: integrity,
    title: "test",
    desc: "Providing expert advice on the requirements and regulations",
  },
  {
    id: 1,
    icon: integrity,
    title: "test",
    desc: "Assisting with the establishment of professional corporations",
  },
  {
    id: 1,
    icon: integrity,
    title: "test",
    desc: "Offering tax planning strategies to maximize the benefits of incorporation",
  },
];
