<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Menu } from 'lucide-svelte';

	let { children } = $props();

	const links: Record<string,string> = {
		"Home": "/",
		"Random": "/random",
		"Leaderboard": "/leaderboard",
		"Contact": "/contact"

	}

	let open = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col min-h-screen">
<header class="flex items-center justify-between px-5 py-1 w-full bg-neutral-800 font-stack-sans border-b border-white text-white">
  <div class="flex h-full items-center text-2xl">
    <img src="/logo.png" alt="" class="h-10 mr-2" />
    <a href="/">superkocky.net</a>
  </div>

  <nav class="hidden md:block">
    <ul class="flex list-none h-full gap-x-5">
      {#each Object.entries(links) as [key, value], i (key)}
        <li class="h-full text-center">
          <a class="h-full flex items-center" href={value}>{key}</a>
        </li>
      {/each}
    </ul>
  </nav>

  <button
    class="md:hidden inline-flex items-center justify-center"
    type="button"
    onclick={() => (open = !open)}>
    <Menu />
  </button>
</header>

{#if open}
  <nav class="md:hidden bg-neutral-800 border-b border-white font-stack-sans">
    <ul class="flex flex-col list-none h-full gap-x-5 text-white px-2">
      {#each Object.entries(links) as [key, value], i (key)}
        <li class="h-full text-center leading-relaxed my-1">
          <a class="h-full flex items-center" href={value} onclick={() => (open = false)}>{key}</a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<main class="text-white p-5 font-stack-sans font-thin flex flex-col items-center grow">
	{@render children()}
</main>
</div>