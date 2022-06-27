/// <reference types="@sveltejs/kit" />

declare namespace Aguipo {
	type Article = {
		title: string;
		author: string;
		link: string;
		startingPage: string;
		doi?: string;
	};
}
