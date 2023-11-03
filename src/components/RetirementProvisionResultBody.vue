
<template>
	<div class="form-card">
			<div class="row">
					<div class="container p-5">
						<div class="mb-3">
							<div class="description">
								<h3 class="font-bold-title mb-4">Ergebnis</h3>
								<p>Dies ist dein persönlicher Finanz-Fahrplan, sieh ihn dir in Ruhe an. Es ist wichtig, dass tu die Schritte nicht nur liest und verstehst, sondern auch tatsächlich umsetzt.</p>
							</div>
						</div>

						<div class="row mb-5">
							<div class="col-12">
								<FinancialCardResultGoalA v-if="resultsPage.isShowGoalA" />
								<FinancialCardResultGoalB v-if="resultsPage.isShowGoalB" />
								<FinancialCardResultGoalC v-if="resultsPage.isShowGoalC" />
								<FinancialCardResultGoalD v-if="resultsPage.isShowGoalD" />
							</div>
						</div>

						<div class="row">
							<div class="col-12 mb-4">
								<button type="submit" name="next" class="button">Schick mir die Unterlagen</button>
							</div>
							<div class="col-12">
								<p class="text-left">Oder hast du vorher noch eine Frage? Schreib uns gerne unter frage@efinc.de</p>
							</div>
						</div>
					</div>

			</div>
	</div>
</template>


<script setup>
import { useResultsPage } from '@/stores/resultsPage.js';
import FinancialCardResultGoalA from './retirementProvisionResult/FinancialCardResultGoalA.vue'
import FinancialCardResultGoalB from './retirementProvisionResult/FinancialCardResultGoalB.vue'
import FinancialCardResultGoalC from './retirementProvisionResult/FinancialCardResultGoalC.vue'
import FinancialCardResultGoalD from './retirementProvisionResult/FinancialCardResultGoalD.vue'

const resultsPage = useResultsPage();
</script>

<style lang="scss" scoped>
.button {
	background: #3C94FC;
	font-weight: 600;
	font-size: 22px;
	color: #FFFFFF;
	border: none;
	border-radius: 12px;
	cursor: pointer;
	padding: 10px 5px;
	max-width: 373px;
	width: 100%;
	height: 64px;

	&:focus, &:hover {
		background-color: #311B92
	}
}
</style>

