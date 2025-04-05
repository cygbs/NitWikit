import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.decorationDot + ' ' + styles.dot1}></div>
      <div className={styles.decorationDot + ' ' + styles.dot2}></div>
      <div className="container">
        <img 
          src="/img/smooth-nitwikit-banner.png"
          alt={siteConfig.title} 
          className={styles.heroImage}
        />
        <Heading as="h1" className={styles.heroTitle} style={{color: 'white'}}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle} style={{color: 'white'}}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button', styles.primaryButton)}
            to="/intro">
            {siteConfig.customFields.start || '开始阅读'}
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomeFooterCTA() {
  return (
    <section className={styles.footerCta}>
      <div className="container">
        <Heading as="h2" className={styles.footerCtaTitle}>
          准备好开始你的 <span className={styles.textHighlight}>Minecraft</span> 服务器旅程了吗？
        </Heading>
        <p className={styles.footerCtaSubtitle}>
          我们提供从零开始的详细教程，帮助你轻松搭建和管理自己的服务器。
        </p>
        <div>
          <Link
            className={clsx('button button--primary button--lg')}
            to="/intro">
            开始使用教程
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.customFields.titlePrefix || siteConfig.title}
      description={siteConfig.tagline}
      wrapperClassName="homepage">
      <HomepageHeader />
      <main className={styles.homeMain}>
        <HomepageFeatures />
        <HomeFooterCTA />
      </main>
    </Layout>
  );
}
