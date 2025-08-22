// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
	overrideStorage: true,
	temperature: {
		location: "Napoli",
		scale: "C",
	},
	clock: {
		format: "H:i, A B Y",
		icon_color: palette.maroon,
	},
	additionalClocks: [],
	search: {
		engines: {
			d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
		},
		default: "d",
	},
	keybindings: {
		s: "search-bar",
	},
	disabled: [],
	localIcons: true,
	localFonts: true,
	fastlink: "https://www.github.com",
	openLastVisitedTab: true,
	tabs: [
		{
			name: "Start",
			background_url: "src/img/banners/new/blue.gif",
			categories: [
				{
					name: "google workspace",
					links: [
						{
							name: "Gmail",
							url: "https://mail.google.com",
							icon: "brand-gmail",
							icon_color: palette.green,
						},
						{
							name: "Calendar",
							url: "https://calendar.google.com",
							icon: "calendar-filled",
							icon_color: palette.peach,
						},
						{
							name: "Drive",
							url: "https://drive.google.com/drive/home",
							icon: "brand-google-drive",
							icon_color: palette.blue,
						},
						{
							name: "Maps",
							url: "https://www.google.it/maps/",
							icon: "brand-google-maps",
							icon_color: palette.red,
						},
					],
				},
				{
					name: "media",
					links: [
						{
							name: "YouTube",
							url: "https://www.youtube.com",
							icon: "brand-youtube",
							icon_color: palette.green,
						},
						{
							name: "Twitch",
							url: "https://www.twitch.tv/",
							icon: "brand-twitch",
							icon_color: palette.peach,
						},
					],
				},
				{
					name: "socials",
					links: [
						{
							name: "Twitter",
							url: "https://www.x.com",
							icon: "brand-twitter",
							icon_color: palette.green,
						},
						{
							name: "Reddit",
							url: "https://www.reddit.com",
							icon: "brand-reddit",
							icon_color: palette.peach,
						},
					],
				},
			],
		},
		{
			name: "dev",
			background_url: "src/img/banners/banner_07.gif",
			categories: [
				{
					name: "development",
					links: [
						{
							name: "github",
							url: "https://github.com",
							icon: "brand-github",
							icon_color: palette.green,
						},
						{
							name: "stackoverflow",
							url: "https://stackoverflow.com",
							icon: "brand-stackoverflow",
							icon_color: palette.red,
						},
					],
				},
			],
		},
		{
			name: "chi ll",
			background_url: "src/img/banners/banner_08.gif",
			categories: [
				{
					name: "social media",
					links: [
						{
							name: "telegram",
							url: "https://web.telegram.org",
							icon: "brand-telegram",
							icon_color: palette.green,
						},
						{
							name: "facebook",
							url: "https://www.facebook.com",
							icon: "brand-facebook",
							icon_color: palette.peach,
						},
						{
							name: "reddit",
							url: "https://www.reddit.com",
							icon: "brand-reddit",
							icon_color: palette.red,
						},
					],
				},
				{
					name: "video",
					links: [
						{
							name: "anilist",
							url: "https://anilist.co/home",
							icon: "brand-funimation",
							icon_color: palette.green,
						},
						{
							name: "youtube",
							url: "https://www.youtube.com",
							icon: "brand-youtube",
							icon_color: palette.peach,
						},
						{
							name: "patreon",
							url: "https://www.patreon.com",
							icon: "brand-patreon",
							icon_color: palette.red,
						},
						{
							name: "kyivstar",
							url: "https://tv.kyivstar.ua",
							icon: "star-filled",
							icon_color: palette.blue,
						},
					],
				},
			],
		},
	],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
