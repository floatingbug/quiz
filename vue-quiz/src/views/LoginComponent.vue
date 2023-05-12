<script setup>
import {reactive} from 'vue'
import axios from 'axios'
const credentials = {
	name: "",
	password: ""
}
  
async function login(e){
  e.preventDefault()
	const result = await axios({
		method: 'post',
		url: 'http://localhost:8000/login',
        data: credentials
	});

  console.log(result)
}
</script>

<template>
	<Login ref="refLogin"></Login>
	<div class="container">
		<form method="post">
			<div id="name">
				<label for="name">Name</label>
				<input type="text" v-model="credentials.name">
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" v-model="credentials.password">
			</div>
			<div>
<<<<<<< HEAD:vue-quiz/src/components/login_component.vue
				<input type="submit" value="login" v-on:click="login">
=======
				<input type="submit" value="login" v-on:click="submitLogin">
>>>>>>> refs/remotes/origin/main:vue-quiz/src/views/LoginComponent.vue
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
	justify-content: space-around;
	border: solid .2rem LawnGreen;
	height: 50%;
	width:60%;
	font-size: 1.5rem;
	background: DarkGoldenrod;
	color: Khaki;
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
	color: Khaki; 
	font-size: 1.3rem;
	font-weight: bold;
	background: DarkGoldenRod;
	margin: auto;
	min-width: 10px;
	max-width: 120px;
	height: 1.8rem;
}

@media(max-width: 720px){
	form{
		min-width: 100%;
	}
}

@media(min-width: 1040px){
	form{
		width: 42%;
		height: 80%;
	}
}
</style>
