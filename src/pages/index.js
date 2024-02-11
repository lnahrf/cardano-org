import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SiteHero from "@site/src/components/Basic/sitehero";
import TitleWithText from "@site/src/components/Basic/titlewithtext";


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <SiteHero
        title='Cardano'
        description='Making the world work better for all.'
        bannerType ='default'
      />
      <main>
        <TitleWithText 
          title='Our World Is Changing. Together, We Can Change It For The Better.'
          description='Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed 
          research and developed through evidence-based methods. It combines pioneering technologies 
          to provide unparalleled security and sustainability to decentralized applications, systems, and societies.

          With a leading team of engineers, Cardano exists to redistribute power from unaccountable structures to 
          the margins – to individuals – and be an enabling force for positive change and progress.'
        />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
