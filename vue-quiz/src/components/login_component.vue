<script setup>
</script>

<template>
	<div class="container">
		<form method="post">
			<div id="name">
				<label for="name">Name</label>
				<input type="text">
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password">
			</div>
			<div>
				<input type="submit" value="login">
			</div>
		</form>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh; 
}

form {
	display: flex;
	flex-direction: column;
	border: solid .2rem LawnGreen;
	height: 50%;
	width: 50%;
}

form>div {
	display: flex;
	flex-direction: row;
}

form>div * {
	flex:1;
}

</style>
