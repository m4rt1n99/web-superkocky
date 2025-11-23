<script lang="ts">
	const { data } = $props<{ data: string }>();
	var url = $state(data.url);
	import { ChevronsUp, ChevronsDown, Minus } from 'lucide-svelte';

	const renewImage = async () => {
		const res = await fetch('/img/random');
		const json = await res.json();
		url = json.url;
	};
</script>

<h1 class="text-2xl">Tvůj náhodný kočičák</h1>
<img id="cat-img" src={url} alt="Náhodný kočičák" class="mt-5 h-[50vh]" />

<div class="mt-5 flex w-[30%] items-center justify-between">
	<button
		><ChevronsUp
			class="h-20 w-20 rounded-xl border border-neutral-700 p-3 transition duration-150 hover:cursor-pointer hover:bg-amber-700"
		/></button
	>
	<button onclick={renewImage}
		><Minus
			class="h-20 w-20 rounded-xl border border-neutral-700 p-3 transition duration-150 hover:cursor-pointer hover:bg-neutral-500"
		/></button
	>
	<button
		><ChevronsDown
			class="h-20 w-20 rounded-xl border border-neutral-700 p-3 transition duration-150 hover:cursor-pointer hover:bg-blue-800"
		/></button
	>
</div>
