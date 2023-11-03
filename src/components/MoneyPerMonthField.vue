<template>
    <div class="row">
        <div class="col-sm-12">
            <label for="monthValue">Wie viel Geld brauchst du im Alter pro Monat, um glücklich leben zu können? (netto)</label>
            <div class="row">
                <div class="col-sm-6">
                    <input
                      v-model="resultsPage.monthValue"
                      class="form-control"
											:class="{ 'error-border': resultsPage.validateErrors.monthValue.isError }"
                      min="0"
                      placeholder="2.500"
                      step="any"
                      type="number"
											@input="watchInput()"
											
                    />
										<p class="text-danger" v-if="resultsPage.validateErrors.monthValue.isError">{{ resultsPage.validateErrors.monthValue.message }}</p>
                </div>
            </div>
        </div>
    </div>
    <br /><br />
</template>

<script setup>
import { useResultsPage } from '@/stores/resultsPage.js'

const resultsPage = useResultsPage();

const watchInput = () => {
	if (resultsPage.validateErrors.monthValue.isError) {
		resultsPage.validateErrors.monthValue.isError = false
	}
}

</script>