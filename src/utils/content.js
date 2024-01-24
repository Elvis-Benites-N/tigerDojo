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
  title: "Contact us",
  field1: "Name",
  field2: "Email",
  field3: "Message",
  button: "Submit",
};

export const footer = {
  logo: Logo,
  title: "Veteran Owned Business",
  subtitle: "@2024 Tiger Dojo Technology Group, LLC. All rights reserved.",
};

export const navbarContent = {
  Logo,
  Buttons: {
    item1: "About us",
    item2: "Services",
  },
};
