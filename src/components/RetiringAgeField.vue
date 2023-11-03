<template>
    <div class="row">
        <div class="col-sm-12">
            <label for="retireAge">In welchem Alter möchtest du in Rente gehen?</label>
            <div class="row">
                <div class="col-sm-6">
                    <input
											type="number"
											class="form-control"
											:class="{ 'error-border': resultsPage.validateErrors.retireAge.isError }"
											min="0"
											v-model="resultsPage.retireAge"
											placeholder="67"
											@input="watchInput()" />
											<p class="text-danger" v-if="resultsPage.validateErrors.retireAge.isError">{{ resultsPage.validateErrors.retireAge.message }}</p>
                </div>
            </div>
        </div>
    </div><br /><br />
</template>

<script setup>
import { useResultsPage } from '@/stores/resultsPage.js'

const resultsPage = useResultsPage();

const watchInput = () => {
	if (resultsPage.validateErrors.retireAge.isError) {
		resultsPage.validateErrors.retireAge.isError = false
	}
}

</script>