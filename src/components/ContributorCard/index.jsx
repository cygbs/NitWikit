import React, { useState, useEffect } from 'react';
import './styles.css';

/**
 * 获取GitHub贡献者数据
 * @param {string} repo 仓库名称，格式为 "用户名/仓库名"
 * @returns {Promise<Array>} 贡献者数据数组
 */
async function fetchContributors(repo) {
  try {
    // 使用GitHub API获取贡献者数据
    const response = await fetch(`https://api.github.com/repos/${repo}/contributors`);
    if (!response.ok) {
      throw new Error('获取贡献者数据失败');
    }
    return await response.json();
  } catch (error) {
    console.error('获取贡献者数据出错:', error);
    return [];
  }
}

/**
 * 获取贡献者详细统计信息
 * @param {string} repo 仓库名称，格式为 "用户名/仓库名"
 * @param {string} username 贡献者用户名
 * @returns {Promise<Object>} 贡献者统计数据
 */
async function fetchContributorStats(repo, username) {
  try {
    // 使用GitHub API获取贡献者统计数据
    const response = await fetch(`https://api.github.com/repos/${repo}/stats/contributors`);
    if (!response.ok) {
      throw new Error('获取贡献者统计数据失败');
    }
    const stats = await response.json();
    
    // 查找特定用户的统计数据
    const userStats = stats.find(stat => stat.author.login === username);
    if (!userStats) {
      return { additions: 0, deletions: 0 };
    }
    
    // 计算总添加和删除行数
    let additions = 0;
    let deletions = 0;
    userStats.weeks.forEach(week => {
      additions += week.a;
      deletions += week.d;
    });
    
    return { additions, deletions };
  } catch (error) {
    console.error('获取贡献者统计数据出错:', error);
    return { additions: 0, deletions: 0 };
  }
}

/**
 * 单个贡献者卡片组件
 */
export function ContributorCardItem({ contributor, repo }) {
  const [stats, setStats] = useState({ additions: 0, deletions: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      const contributorStats = await fetchContributorStats(repo, contributor.login);
      setStats(contributorStats);
      setLoading(false);
    }
    
    loadStats();
  }, [contributor, repo]);

  return (
    <div className="contributor-card">
      <div className="contributor-avatar-wrapper">
        <img 
          src={contributor.avatar_url} 
          alt={`${contributor.login} 的头像`} 
          className="contributor-avatar"
        />
      </div>
      <div className="contributor-info">
        <div className="contributor-name">
          <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
            {contributor.login}
          </a>
        </div>
        {!loading && (
          <div className="contributor-stats">
            <span className="additions">+{stats.additions}</span>
            <span className="deletions">-{stats.deletions}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 贡献者卡片列表组件
 */
export default function ContributorCard({ repo = "8aka-Team/NitWikit" }) {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadContributors() {
      try {
        setLoading(true);
        const data = await fetchContributors(repo);
        setContributors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    loadContributors();
  }, [repo]);

  if (loading) {
    return <div className="contributor-loading">正在加载贡献者数据...</div>;
  }

  if (error) {
    return <div className="contributor-error">获取贡献者数据出错: {error}</div>;
  }

  if (!contributors || contributors.length === 0) {
    return <div className="contributor-empty">暂无贡献者数据</div>;
  }

  return (
    <div className="contributor-container">
      {contributors.map((contributor) => (
        <ContributorCardItem
          key={contributor.id}
          contributor={contributor}
          repo={repo}
        />
      ))}
    </div>
  );
} 