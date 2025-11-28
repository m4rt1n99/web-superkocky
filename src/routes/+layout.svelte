<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	const links: Record<string,string> = {
		"Home": "/",
		"Random": "/random",
		"Leaderboard": "/leaderboard",
		"Contact": "/contact"

	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col min-h-screen">
<header class="flex justify-between text-center px-5 py-1 w-full h-15 bg-neutral-800 font-stack-sans border-b border-white text-white">
	<div class="flex h-full items-center text-2xl">
		<img src="/logo.png" alt="" class="h-full mr-2"> <a href="/">superkocky.net</a>
	</div>
	<nav class="">
		<ul class="flex list-style-none h-full gap-x-5">
			{#each Object.entries(links) as [key, value], i (key)}
				<li class="h-full text-center"><a class="h-full flex items-center" href="{value}">{key}</a></li>
			{/each}
		</ul>
</nav>
</header>

<main class="text-white p-5 font-stack-sans font-thin flex flex-col items-center grow">
	{@render children()}
</main>
</div>