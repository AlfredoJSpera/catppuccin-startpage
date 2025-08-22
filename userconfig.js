// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
	// Whether to override localStorage with config values
	overrideStorage: true,
	temperature: {
		location: "Napoli",
		// Temperature scale: C for Celsius, F for Fahrenheit
		scale: "C",
	},
	// https://github.com/AlfredoJSpera/catppuccin-startpage/blob/main/docs/CLOCK.md
	clock: {
		format: "H:i, A, e B Y",
		icon_color: palette.maroon,
	},
	// Extra clocks to display alongside main clock
	additionalClocks: [],
	search: {
		// Search engine shortcuts and their URLs
		engines: {
			d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
		},
		default: "d",
	},
	// Keyboard shortcuts for actions
	keybindings: {
		s: "search-bar",
	},
	// List of disabled components
	disabled: [],
	// Whether to use local fonts instead of Google Fonts CDN
	localIcons: true,
	// Whether to use local fonts instead of Google Fonts CDN
	localFonts: true,
	// Link bottom left
	fastlink: "https://www.github.com",
	// Whether to restore last active tab on load
	openLastVisitedTab: true,
	tabs: [
		{
			name: "main",
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
	],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
