import { LinkPreset, type NavBarLink } from "@/types/config";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.About]: {
		name: "About", //i18n(I18nKey.home),
		url: "/",
	},
	[LinkPreset.Experiences]: {
		name: "Experiences",//i18n(I18nKey.about),
		url: "/experiences/",
	},
	[LinkPreset.Projects]: {
		name: "Projects",//i18n(I18nKey.archive),
		url: "/projects/",
	},
};
