<script lang="ts">
	import type { PageData } from './$types';
	import { getToastStore } from '@skeletonlabs/skeleton';

	export let data: PageData;
	const toastStore = getToastStore();
</script>

<div class="flex items-center justify-center w-full">
	<div class="max-w-prose w-full p-10">
		{#each data.hosts as item}
			<button
				class="card p-4 w-full cursor-pointer flex justify-between items-end"
				on:click={() => {
					navigator.clipboard.writeText(item.ip.toString());
					toastStore.trigger({
						message: 'Copied',
						timeout: 2000,
						hideDismiss: true
					});
				}}
			>
				<div class="flex gap-4 items-end">
					<span class="h2 opacity-50">{item.hostname}</span>
					<span class="h3">{item.ip}</span>
				</div>
				<div><span class="text-xs">{new Date(item.updated).toLocaleString()}</span></div>
			</button>
		{/each}
	</div>
</div>
