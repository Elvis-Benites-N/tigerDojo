// Banner
import Atlassian from "../assets/images/banner/atlassian.svg";
import AWS from "../assets/images/banner/aws.svg";
import Azure from "../assets/images/banner/azure.svg";
import GCloud from "../assets/images/banner/gcloud.svg";
import SNYK from "../assets/images/banner/snyk.svg";
import Logo from "../assets/images/logo.svg";
import MainBackground from "../assets/images/banner/principalWallpaper.svg";
// About Us
import PadlockA from "../assets/images/about/padlock.svg";
import WrapperA from "../assets/images/about/wrapper.png";

// What we do?
import Magnifying from "../assets/images/work/magnifying.svg";
import PadlockW from "../assets/images/work/padlock.svg";
import Shield from "../assets/images/work/shield.svg";

//Contact us
import WrapperC from "../assets/images/contact/wrapper.png";

export const banner = {
  Items: [SNYK, Atlassian, AWS, GCloud, Azure],
  MainBackground,
  title: "Empower your Development Team",
  subtitle:
    "Our expert advisory and consulting services provide your organization with tailored strategies for application security.",
  button: "Contact Us",
};

export const about = {
  PadlockA,
  WrapperA,
  title: "Building secure software is essential of any organization.",
  subtitle:
    "Application security requires a holistic approach that incorporates security at every stage of the software development lifecycle. A successful application security advisory practice should promote the integration of security into the design, development, testing, and deployment processes. This involves conducting thorough security assessments, performing secure code reviews, promoting secure coding practices, implementing secure configurations, and fostering a culture of security awareness among development teams. By addressing security comprehensively, the practice can help clients build robust and resilient software systems.",
};

export const work = {
  title: "What we do",
  subtitle:
    "As your partner, you can be confident that your software development practices are at the forefront of security and innovation",
  items: [
    {
      title: "Holistic Approach to Security",
      image: PadlockW,
      text: "Our approach begins with understanding your business needs and risk profile. We seamlessly integrate security into existing processes and developer workflows to improve overall security posture. Our methodology provides you with thorough risk assessments and strategies which help you identify vulnerabilities and prioritize remediation resulting in optimization of your security investments and reducing potential risks.",
    },
    {
      title: "Tailored and Risk-based Solutions",
      image: Shield,
      text: "Every organization is unique. We provide application security advisory that’s tailored to your specific profile and guide you every step of the way. This involves conducting thorough security assessments, performing secure code reviews, promoting secure coding practices, implementing secure configurations, and fostering a culture of security awareness among development teams. Our comprehensive approach will allow you to build robust and resilient systems with confidence.",
    },
    {
      title: "Continuous Education and Research",
      image: Magnifying,
      text: "The field of software security is constantly evolving, with new vulnerabilities, attack techniques, and defense mechanisms emerging regularly. We invest in continuous education by staying up to date with the latest security threats, technologies, and best practices to provide our clients with the most current and effective security recommendations.",
    },
  ],
};

export const contact = {
  WrapperC,
  title: "Contact us",
  fields: ["Name", "Email", "Message"],
  button: "Submit",
  alert: "Your request was sent!",
};

export const footer = {
  logo: Logo,
  title: "Veteran Owned Business",
  copyright: "@2024 Tiger Dojo Technology Group, LLC. All rights reserved.",
};

export const navbarContent = {
  Logo,
  Buttons: {
    item1: "About us",
    item2: "Services",
  },
};

export const modalInfo = {
  titleM: "Privacy Policy",
  date: "Last Updated: 24 January 2024",
  buttontext: "Close",
  introduction:
    "Tiger Dojo Technology Group, LLC ('us', 'we', or 'our') operates the tigerdojo.io website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.",
  sections: [
    {
      id: 1,
      title: "Information Collection and Use",
      content:
        "We collect certain personal information, including names and email addresses, when you solicit our services through the contact form on our website. We use this information solely for the purpose of responding to your inquiry.",
    },
    {
      id: 2,
      title: "Security",
      content:
        "The security of your personal information is important to us. We have implemented measures to safeguard the information we collect and ensure its confidentiality.",
    },
    {
      id: 3,
      title: "Third-Party Disclosure",
      content:
        "We do not share your personal information with third parties. Your data is only accessible to us and is used exclusively for the purpose stated in Section 1.",
    },
    {
      id: 4,
      title: "Your Rights",
      content:
        "You have the right to request information about the personal data we hold about you, and you may also request to correct, update, or delete this information.",
    },
    {
      id: 5,
      title: "Governing Law",
      content:
        "This Privacy Policy is governed by the laws of the United States. By using our service, you agree to the collection and use of information in accordance with this policy.",
    },
    {
      id: 6,
      title: "Changes to This Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. Any changes will be effective upon posting the revised policy on this page.",
    },
    {
      id: 7,
      title: "Contact Us",
      content:
        "If you have any questions or concerns about this Privacy Policy, please contact us at hello@tigerdojo.io.",
    },
  ],
};
