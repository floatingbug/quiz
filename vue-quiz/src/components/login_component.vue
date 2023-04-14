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
	background-color: grey;
}

form {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border: solid .2rem LawnGreen;
	height: 50%;
	width:60%;
	font-size: 1.5rem;
}

form>div {
	display: flex;
	flex-wrap: wrap;
}

form>div * {
	flex:1;
}

form>div>label {
	flex-basis: 100px;
	margin-left: 10%;
}

form>div>input {
	flex: 8;
	max-width: 100%;
	min-width: 45%;
	margin-left: 10%;
	margin-right: 10%;
}

form>div>input[type="submit"] {
	color: red; 
}

@media(max-width: 720px){
	form{
		min-width: 100%;
	}
}

@media(min-width: 1040px){
	form{
		width: 42%;
		height: 60%;
	}
}
</style>
