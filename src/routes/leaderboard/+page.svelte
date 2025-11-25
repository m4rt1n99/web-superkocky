<script lang="ts">
	const { data } = $props<{ data: { data: { id: number; rating: number; url: string }[] } }>();
</script>

{#each data.data as entry}
    <div class="w-fit flex justify-center flex-col mb-10">
        <div class="w-full flex gap-5 justify-end items-center">
            <span class="text-xl">Rank: #{data.data.indexOf(entry)+1}</span>
            <span class="text-xl">Score: {entry.rating}</span>
            <span class="text-sm">ID: #{entry.id}</span>
        </div>
        <img src={entry.url} alt="Cat {entry.id}" class="w-[50vh] object-contain">
    </div>
{/each}