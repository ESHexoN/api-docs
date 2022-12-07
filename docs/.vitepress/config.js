export default {
    title: 'ESHexoN',
    description: 'ESHexoN 是一款简洁、强大的 Hexo 在线编辑器，可以方便的实现在线修改文章，管理 Hexo 等功能。',
    themeConfig: {
        sidebar: [
            {
            text: '开始',
            items: [
            { text: '开始使用', link: '/start.html' },
                { text: '环境变量', link: '/deploy/env.html' },
            ]},
            {
                text: 'API',
                items: [
                { text: 'API', link: '/api/' },
                ]},
        ],
        editLink: {
          pattern: 'https://github.com/ESHexoN/api-docs/edit/master/docs/:path',
          text: "在 GitHub 上编辑此页"
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 CKY'
        }
    }
}
