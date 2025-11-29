<script lang="ts">
	const { data } = $props<{ data: { data: { id: number; rating: number; url: string }[] } }>();
</script>

{#each data.data as entry}
	<div class="mb-10 flex w-fit flex-col justify-center">
		<div class="flex w-full items-center justify-end gap-5">
			<span class="text-xl">Rank: #{data.data.indexOf(entry) + 1}</span>
			<span class="text-xl">Score: {entry.rating}</span>
			<span class="text-sm">ID: #{entry.id}</span>
		</div>
		<img src={entry.url} alt="Cat {entry.id}" class="w-[50vh] object-contain" />
	</div>
{/each}
