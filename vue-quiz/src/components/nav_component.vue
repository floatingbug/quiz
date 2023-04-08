<script setup>
import {ref, reactive, watch} from 'vue'
const css_colors = reactive({
	fontColor: 'Khaki',
	activeColor: 'red',
	hoverColor: 'GoldenRod',
	backgroundColor: 'DarkGoldenRod'
});
let buttons = reactive({
	login: false,
	registration: false
});

function setButtons(e){
	//set all buttons to false.
	for(let key of Object.keys(buttons)){
		buttons[key] = false;
	}

	//set button to true.
	switch(e.target.dataset.id){
		case 'login': 
			buttons.login = true;
			break
		case 'registration': buttons.registration = true;
			break
	}
}

</script>


<template>
<nav v-on:click="setButtons">
<div class="container_right">
	<div data-id="login" v-bind:class="{buttons: buttons.login}">login</div>
	<div data-id="registration" v-bind:class="{buttons: buttons.registration}">registration</div>
</div>
</nav>
</template>

<style scoped>
nav {
	background-color: v-bind(css_colors.backgroundColor);
	color: v-bind(css_colors.fontColor);
	font-size: 1.8rem;
	border-bottom: .5vh solid LawnGreen;
	display: flex;
	justify-content: space-between;
	min-height: 10vh;
}

.container_right {
	display: flex;
	margin-left: auto;
	justify-content: space-around;
	min-width: 40vw;
	align-items: center;
}

.container_right>div:hover{
	cursor: pointer;
	color: v-bind(css_colors.hoverColor);
}

.buttons {
	color: green;
}
</style>
