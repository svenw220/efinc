<template>
    <div class="box-goal" v-if="selectedGoal == 3">
        <div class="col-sm-12">
            <p>Erzähl uns mehr über dein Sparziel: Wie viel Geld brauchst du in wie vielen Jahren?</p>
            <div class="row">
                <div class="col-sm-6">
                    <label for="">Welcher Betrag (in €)?</label>
                    <input
                      v-model="resultsPage.finalAmount"
                      class="form-control"
											:class="{ 'error-border': resultsPage.validateErrors.finalAmount.isError }"
                      min="0"
                      placeholder="100.000"
                      step="any"
                      type="number"
											@input="watchInput('finalAmount')"
                    />
										<p class="text-danger" v-if="resultsPage.validateErrors.finalAmount.isError">{{ resultsPage.validateErrors.finalAmount.message }}</p>
                </div>
                <div class="col-sm-6 mb-margin">
                    <label for="">In wie vielen Jahren?</label>
                    <input
                      v-model="resultsPage.depositYears"
                      class="form-control"
											:class="{ 'error-border': resultsPage.validateErrors.depositYears.isError }"
                      max="10"
                      min="0"
                      placeholder="10"
                      step="any"
                      type="number"
											@input="watchInput('depositYears')"
                    />
										<p class="text-danger" v-if="resultsPage.validateErrors.depositYears.isError">{{ resultsPage.validateErrors.depositYears.message }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useResultsPage } from '@/stores/resultsPage.js';

const resultsPage = useResultsPage()

defineProps(['selectedGoal'])

function watchInput(key) {
	if (resultsPage.validateErrors[key].isError) {
		resultsPage.validateErrors[key].isError = false
	}
}
</script>

<!-- <script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "SavingGoalSection",
    props: ['selectedGoal'],
})
</script> -->

<style scoped>
.box-goal {
    box-sizing: border-box;
    padding: 32px 6px;
    background: rgba(143, 162, 185, 0.3);
    border: 1px solid #9e9e9e;
    border-radius: 8px;
    margin-top: 25px;
}

@media only screen and (max-width: 600px) {
    .mb-margin {
        margin-top: 16px;
    }
}
</style>  