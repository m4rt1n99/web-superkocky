<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Menu } from 'lucide-svelte';

	let { children } = $props();

	const links: Record<string, string> = {
		Home: '/',
		Random: '/random',
		Leaderboard: '/leaderboard',
		Contact: '/contact'
	};

	let open = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<header
		class="flex w-full items-center justify-between border-b border-white bg-neutral-800 px-5 py-1 font-stack-sans text-white"
	>
		<div class="flex h-full items-center text-2xl">
			<img src="/logo.png" alt="" class="mr-2 h-10" />
			<a href="/">superkocky.net</a>
		</div>

		<nav class="hidden md:block">
			<ul class="flex h-full list-none gap-x-5">
				{#each Object.entries(links) as [key, value], i (key)}
					<li class="h-full text-center">
						<a class="flex h-full items-center" href={value}>{key}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<button
			class="inline-flex items-center justify-center md:hidden"
			type="button"
			onclick={() => (open = !open)}
		>
			<Menu />
		</button>
	</header>

	{#if open}
		<nav class="border-b border-white bg-neutral-800 font-stack-sans md:hidden">
			<ul class="flex h-full list-none flex-col gap-x-5 px-2 text-white">
				{#each Object.entries(links) as [key, value], i (key)}
					<li class="my-1 h-full text-center leading-relaxed">
						<a class="flex h-full items-center" href={value} onclick={() => (open = false)}>{key}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}

	<main class="flex grow flex-col items-center p-5 font-stack-sans font-thin text-white">
		{@render children()}
	</main>
</div>
