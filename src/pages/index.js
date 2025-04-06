import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const headerRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  
  // 鼠标跟随效果
  useEffect(() => {
    const header = headerRef.current;
    const blob1 = blob1Ref.current;
    const blob2 = blob2Ref.current;
    const blob3 = blob3Ref.current;
    
    if (!header || !blob1 || !blob2 || !blob3) return;
    
    let animationActive = false;
    
    const handleMouseMove = (e) => {
      if (!animationActive) {
        animationActive = true;
        requestAnimationFrame(updateBlobs);
      }
      
      const { clientX, clientY } = e;
      const rect = header.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;
      
      // 计算鼠标和中心点的距离
      const offsetX = (mouseX - centerX) / centerX;
      const offsetY = (mouseY - centerY) / centerY;
      
      // 保存当前鼠标位置用于动画帧
      lastOffsetX = offsetX;
      lastOffsetY = offsetY;
    };
    
    let lastOffsetX = 0;
    let lastOffsetY = 0;
    
    const updateBlobs = () => {
      // 右下角的绿色光圈 - 反向移动效果
      const blob1Transform = getComputedStyle(blob1).transform;
      const newBlob1Transform = `translate(${lastOffsetX * -40}px, ${lastOffsetY * -40}px)`;
      blob1.style.transform = newBlob1Transform;
      
      // 左上角的蓝色光圈 - 同向移动效果
      const blob2Transform = getComputedStyle(blob2).transform;
      const newBlob2Transform = `translate(${lastOffsetX * 40}px, ${lastOffsetY * 40}px)`;
      blob2.style.transform = newBlob2Transform;
      
      // 中心的黄色光圈 - 增强移动效果
      const blob3Transform = getComputedStyle(blob3).transform;
      const newBlob3Transform = `translate(calc(-50% + ${lastOffsetX * 60}px), calc(-50% + ${lastOffsetY * 60}px))`;
      blob3.style.transform = newBlob3Transform;
      
      animationActive = false;
    };
    
    const handleMouseLeave = () => {
      // 鼠标离开时，恢复原位
      blob1.style.transform = '';
      blob2.style.transform = '';
      blob3.style.transform = 'translate(-50%, -50%)';
    };
    
    header.addEventListener('mousemove', handleMouseMove);
    header.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      header.removeEventListener('mousemove', handleMouseMove);
      header.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <header className={styles.heroBanner} ref={headerRef}>
      {/* 简化背景，只保留渐变光圈效果 */}
      <div className={styles.heroBlob + ' ' + styles.blob1} ref={blob1Ref}></div>
      <div className={styles.heroBlob + ' ' + styles.blob2} ref={blob2Ref}></div>
      <div className={styles.heroBlob + ' ' + styles.blob3} ref={blob3Ref}></div>
      
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeadline}>一即全，全即一</div>
          <Heading as="h1" className={styles.heroTitle}>
            笨蛋 <span className={styles.highlightText}>文档</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            一群笨蛋编写的 Minecraft 开服教程，从零开始，简单易懂，让你轻松搭建属于自己的服务器世界。无论你是新手还是有经验的玩家，都能在这里找到有用的知识。
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button', styles.primaryButton)}
              to="/intro">
              开始探索 🚀
            </Link>
          </div>
        </div>
        
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageBg}></div>
          <div className={styles.heroImageContainer}>
            <img 
              src="/img/smooth-nitwikit-banner.png"
              alt="Minecraft 服务器教程" 
              className={styles.heroImage}
            />
          </div>
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
          我们提供从零开始的详细教程，帮助你轻松搭建和管理自己的服务器。无论你是新手还是有经验的玩家，这里都有适合你的内容。
        </p>
        <div>
          <Link
            className={clsx('button button--primary button--lg')}
            to="/intro">
            立即开始
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
