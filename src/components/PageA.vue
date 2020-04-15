<template>
	<div>	<!-- obligatoire pour afficher le contenu de la page -->
		<h1>Page A</h1>

		<!-- <p>{{ $route.params.id}}</p> -->

		<ul>
			<router-link :to="{name: 'a.b'}">vu B</router-link>
			<router-link :to="{name: 'a.c'}">vu C</router-link>
		</ul>

		<router-view/>
	</div>
</template>

<script>
	export default {}
</script>