<template>
    <div class="box-goal" v-if="selectedGoal == 2">
        <div class="col-sm-6">
            <label for="">Wie viel möchtest du pro Monat sparen?</label>
            <input
              v-model="resultsPage.savingMonth"
              class="form-control"
							:class="{ 'error-border': resultsPage.validateErrors.savingMonth.isError }"
              min="0"
              placeholder="300"
              step="any"
              type="number"
              data-sparen
							@input="watchInput()"
            />
						<p class="text-danger" v-if="resultsPage.validateErrors.savingMonth.isError">{{ resultsPage.validateErrors.savingMonth.message }}</p>
        </div>
    </div>
</template>

<script setup>
import { useResultsPage } from '../stores/resultsPage.js'

const resultsPage = useResultsPage()

const watchInput = () => {
	if (resultsPage.validateErrors.savingMonth.isError) {
		resultsPage.validateErrors.savingMonth.isError = false
	}
}


</script>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "InvestMoneySection",
    components: {

    },
    props: ['selectedGoal'],
    data() {
        return {

        }
    },



})
</script>

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