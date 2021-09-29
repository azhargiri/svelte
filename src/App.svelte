<script>
  import { onMount } from "svelte";
  export let dates = [];

  onMount(async () => {
    const res = await fetch("/api/date");
    const newDates = await res.json();
    dates = newDates;
  });
</script>

<style>
	h1 {
		margin-top: -80px;
		margin-bottom: 10px;
	}
	h2 {
		margin-top: 5px;
	}
	p.datetime {
		margin: 0;
	}
</style>

<main>
  <h1>p.e.m.u.d.a</h1>
  <h2>
	  <img src="/logo.png" alt="Logo Pemuda" />
  </h2>
  <br />
  <hr>
  {#each dates as _date}
	<p class="datetime"><strong>{ _date.timezone }</strong>  { _date.date }</p>
  {:else} 
	<p>Loading...</p>
  {/each}
  
</main>
