<template>
	<div class="count d-flex align-items-center justify-content-center">
		<p class="count-circle mb-0 mr-3" @click="handleMinus"></p>
		<p class="count-percent mb-0">{{ count }}%</p>
		<p class="count-circle count-plus mb-0 ml-2" @click="handlePlus"></p>
	</div>
</template>

<script>
export default {
  name: "CounterComponent",
  props: {
    count: Number,
  },
  emits: ["plus", "minus"],
  methods: {
    handlePlus() {
      this.$emit("plus");
    },
    handleMinus() {
      this.$emit("minus");
    },
  },
};
</script>

<style scoped>
.count-percent {
	font-size: 42px;
	line-height: 49px;
	color: #3C94FC;
	width: 105px;
	text-align: center;
}
.count-circle {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid #1c1b1f;
	position: relative;
	cursor: pointer;
}
.count-circle:before {
	content: '-';
	position: absolute;
	top: 5px;
	left: 1.5px;
	font-size: 26px;
	line-height: 2px;
}
.count-plus::before {
	content: '+';
	font-size: 22px;
	top: 7px;
}
</style>