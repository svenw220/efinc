<template>
	<div class="row my-5 py-md-2">
		<div class="col-12 col-md-6">
			<div class="description">
				<h3 class="title">Anlagestrategie</h3>
				<p>Je nach dem, mit welcher Risikobereitschaft du dein Geld anlegst, verändert sich deine erwartete Rendite. Verschiebe den Regler, um zu sehen, wie sich 100 € innerhalb von 10 Jahren entwickeln können.</p>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="charts-container">
				<svg v-if="sliderVal < 20" class="svg-chart">
					<use href="../assets/images/charts/chartSprite.svg#chart_1"></use>
				</svg>
				<svg v-else-if="sliderVal < 40" class="svg-chart">
					<use href="../assets/images/charts/chartSprite.svg#chart_2"></use>
				</svg>
				<svg v-else-if="sliderVal < 60" class="svg-chart">
					<use href="../assets/images/charts/chartSprite.svg#chart_3"></use>
				</svg>
				<svg v-else-if="sliderVal < 80" class="svg-chart">
					<use href="../assets/images/charts/chartSprite.svg#chart_4"></use>
				</svg>
				<svg v-else class="svg-chart">
					<use href="../assets/images/charts/chartSprite.svg#chart_5"></use>
				</svg>
			</div>
			<div>
				<input type="range" min="1" max="100" class="slider" v-model="sliderVal">
				<div class="d-flex justify-content-between" style="margin-top: 10px;">
					<div class="box-label-right">Minimales <br> Risiko</div>
					<div class="box-label-left">Maximale <br> Rendite</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InvestmentStrategy',
	data() {
    return {
			sliderVal: 0,
		};
  },
}
</script>

<style scoped>
	.title {
		font-size: 16px;
		line-height: 24px;
		font-weight: 700;
	}
	.description {
		max-width: 295px;
		line-height: 24px;
		font-weight: 400;
	}
	.svg-chart {
		width: 333px;
	}
	.charts-container {
		min-height: 175px;
	}
</style>