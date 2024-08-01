import accuracy from "../../assets/images/icons/accuracy.png";
import efficiency from "../../assets/images/icons/efficiency.png";
import compliance from "../../assets/images/icons/compliance.png";
import access from "../../assets/images/icons/access.png";
import operation from "../../assets/images/icons/opration.png";
import collaborate from "../../assets/images/icons/collaboration.png";

import { cfoSvgCard, corporateReturnsSvgCard, payrollSvgCard, personalReturnSvgCard } from "../../utilities/svgs";

export const servicesData = [
  {
    id: "1",
    title: "Corporate Returns",
    link: "corporate-returns",
    svg: corporateReturnsSvgCard,
  },
  {
    id: "2",
    title: "Payroll Services",
    link: "payroll-services",
    svg: payrollSvgCard,
  },
  {
    id: "3",
    title: "CFO Services",
    link: "CFO-services",
    svg: cfoSvgCard,
  },
  {
    id: "4",
    title: "Personal Returns",
    link: "personal-returns",
    svg: personalReturnSvgCard,
  },
];

export const cloudBKData = [
  {
    id: 1,
    icon: accuracy,
    title: "Improved Accuracy",
  },
  {
    id: 2,
    icon: efficiency,
    title: "Greater Efficiency",
  },
  {
    id: 3,
    icon: compliance,
    title: "Enhanced Compliance",
  },
  {
    id: 4,
    icon: access,
    title: "Better Accessibility",
  },
  {
    id: 5,
    icon: operation,
    title: "Operational Synergy",
  },
  {
    id: 6,
    icon: collaborate,
    title: "Stronger Collaboration",
  },
];
