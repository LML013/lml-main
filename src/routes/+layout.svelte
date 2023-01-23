<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	

	// export let data: LayoutData;
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
