import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	// 用作 meta 属性 (src/components/BaseHead.astro L:31 + L:49) & 生成的 satori 图片 (src/pages/og-image/[slug].png.ts)
	author: "8199", // 请将这里替换为你自己的名字或昵称
	// Date.prototype.toLocaleDateString() 的参数，位于 src/utils/date.ts
	date: {
		locale: "zh-CN", // 修改为中文 locale
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// 用作默认的 description meta 属性和 webmanifest 的 description
	description: "一个风格鲜明的 Astro 入门主题", // 翻译网站描述
	// HTML lang 属性, 位于 src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "zh-CN", // 修改为中文 lang
	// Meta 属性, 位于 src/components/BaseHead.astro L:42
	ogLocale: "zh_CN", // 修改为中文 Open Graph locale
	// 用于构建 meta title 属性 (src/components/BaseHead.astro L:11) 和 webmanifest name (astro.config.ts L:42)
	title: "8199的博客", // 翻译网站标题，你可以修改为你的博客名
	// ! 请记得将下面的 site 属性替换为你自己的域名 (用于 astro.config.ts)
	// ! Please remember to replace the following site property with your own domain, used in astro.config.ts
	url: "https://blog.108199.xyz/", // 保留你自己的 URL
};

// 用于在 Header 和 Footer 中生成链接
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "主页", // 已是中文，保留
	},
	{
		path: "/about/",
		title: "关于", // 已是中文，保留
	},
	{
		path: "/posts/",
		title: "博客", // 已是中文，保留
	},
	{
		path: "/notes/",
		title: "笔记", // 已是中文，保留
	},
];

// https://expressive-code.com/reference/configuration/
// 这部分是代码高亮配置，通常不需要翻译
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
