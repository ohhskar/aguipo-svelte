export interface IArticle {
	abstract?: string;
	title: string;
	authors: string[];
	link: string;
	file: string;
	doi: string;
}

type Header = string;

export type TVolume = Record<Header, IArticle[]>;
