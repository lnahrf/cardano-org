import clsx from "clsx";
import Link from "@docusaurus/Link";
import React, { useState } from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import SiteHero from "@site/src/components/Layout/SiteHero";
import Heading from "@theme/Heading";
import BoundaryBox from "@site/src/components/Layout/BoundaryBox";
import Divider from "@site/src/components/Layout/Divider";
import TitleWithText from "@site/src/components/Layout/TitleWithText";
import ContactFormHS from "@site/src/components/ContactFormHS";


function HomepageHeader() {
  const { siteTitle } = "useDocusaurusContext()";
  return (
    <SiteHero
      title="Contact Cardano"
      description="Cardano is supported by the Cardano Foundation, IOHK, and EMURGO. Fill out the contact form below and we will put you in touch with the team best placed to assist you."
      bannerType="fluid"
    />
  );
}

function PartnershipForm() {
  return (
    <div>
      <TitleWithText
        title = "Connect With Our Partnership Team"    
        description={[
          "Have an exciting project you’d like to discuss with us? Looking for ways to unlock the potential of Cardano for a new venture? \
          Fill in the form below and we’ll connect you with our partnership team.",
        ]}
        titleType="black"
        headingDot={false}
      />
      <br />
      <Link
        className="button button--primary button--lg"
        href="https://cardanocommunity.typeform.com/partnerships"
      >
        Partnership Form
      </Link>
    </div>
  );
}


function TechnicalIssueForm() {
  return (
    <div>
      <TitleWithText
        title = "Report a technical issue"    
        description={[
          "To get help for one of the following wallets, please raise a support ticket.",
          {
            list: [
              "Daedalus",
              "Nami",
              "Lace",
            ],
          }
        ]}
        titleType="black"
        headingDot={false}
      />
      <br />
      <Link
        className="button button--primary button--lg"
        href="https://iohk.zendesk.com/hc/en-us"
      >
        Raise Ticket
      </Link>
    </div>
  );
}

function SponsorshipForm() {
  return (
    <div>
      <TitleWithText
        title = "Cardano Summit Sponsorship"    
        description={[
          "Thank you for your interest in sponsoring our annual Cardano Summit! Your support is crucial to the success of our summit, \
          and we're excited about the possibility of partnering with you. Sponsorship opportunities provide significant exposure \
          and can be tailored to meet your organization's needs and goals.",

          "Please fill out the form below to express your interest and provide us with more details about your organization and \
          sponsorship preferences. Our team will review your submission and get in touch with you to discuss potential sponsorship \
          packages and how we can best collaborate for the upcoming event.",
        ]}
        titleType="black"
        headingDot={false}
      />
      <br />
      <Link
        className="button button--primary button--lg"
        href="#fixme"
      >
        Sponsorship Request
      </Link>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [selectedTopic, setSelectedTopic] = useState(null); // Step 1: State for the topic

  const handleTopicChange = (event) => { // Step 4: Event handler for topic selection
    setSelectedTopic(event.target.value);
  };

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <BoundaryBox>
          <Divider text="Here to help" />
          <TitleWithText 
            title="What Can We Help You With?" 
            headingDot={true}
          />
          {/* Topic Selection, each topic will render a different component */}
          I have  
          <select className={clsx("selectField", "selectFieldArrow")} onChange={handleTopicChange} value={selectedTopic}>
            <option value="">not yet decided (please select)</option>
            <option value="iog">a technical issue with Daedalus, Nami or Lace</option>
            <option value="partnership">a partnership request</option>
            <option value="sponsor">the desire to sponsor the Cardano Summit</option>
            <option value="different">another inquiry</option>
           
          </select>
          <br />
          <br />
          {/* Conditional rendering based on user selection */}
          {selectedTopic === 'iog' && <TechnicalIssueForm />} 
          {selectedTopic === 'partnership' && <PartnershipForm />}  
          {selectedTopic === 'sponsor' && <SponsorshipForm />}
          {selectedTopic === 'different' && <ContactFormHS />}
          
          {/* ... */}
        </BoundaryBox>
        <br />
        <br />
      </main>
    </Layout>
  );
}
