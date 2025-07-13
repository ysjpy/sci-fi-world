// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // 示例：动态加载新闻/博客
    const newsSection = document.getElementById('news');
    const newsItems = [
        { title: '未来科技的革新', content: '最新的科技革新正在改变我们的世界...' },
        { title: '星际探索的新进展', content: '人类对宇宙的探索从未停止...' }
    ];

    newsItems.forEach(item => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h2.textContent = item.title;
        p.textContent = item.content;
        article.appendChild(h2);
        article.appendChild(p);
        newsSection.appendChild(article);
    });
});
