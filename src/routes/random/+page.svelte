<script lang="ts">
	const { data } = $props<{ data: string }>();
	var url = $state(data.url);
	var id = $state(data.id);
	import { ChevronsUp, ChevronsDown, Minus } from 'lucide-svelte';

	const renewImage = async () => {
		const res = await fetch('/img/random');
		const json = await res.json();
		url = json.url;
		id = json.id
	};

	const rating = async (action: string, id: number) => {
		const res = await fetch('/api/rating', {
			method: 'POST',
			body: JSON.stringify({'action': action, 'arg_id': id})
		});
		await renewImage()
		return;
	}
</script>

<h1 class="text-2xl">Tvůj náhodný kočičák</h1>
<img id="cat-img" src={url} alt="Náhodný kočičák" class="mt-5 h-[50vh]" />

<div class="mt-5 flex w-[30%] items-center justify-center gap-15">
	<button onclick={() => rating("add", id)}
		><ChevronsUp
			class="h-20 w-20 rounded-xl border border-neutral-700 p-3 transition duration-150 hover:cursor-pointer hover:bg-sky-700"
		/></button
	>
	<button onclick={renewImage}
		><Minus
			class="h-20 w-20 rounded-xl border border-neutral-700 p-3 transition duration-150 hover:cursor-pointer hover:bg-neutral-500"
		/></button
	>
	<button onclick={() => rating("subtract", id)}
		><ChevronsDown
			class="h-20 w-20 rounded-xl border border-neutral-700 p-3 transition duration-150 hover:cursor-pointer hover:bg-red-700"
		/></button
	>
</div>
