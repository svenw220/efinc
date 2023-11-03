<template>
    <div class="col-sm-12">
        <p class="title-class">Finanzielle Ist-Situation</p>
        <div class="row">
            <div class="col-md-6 mb-top-margin">
                <label for="">Wie hoch sind deine regelmäßigen Einnahmen pro Monat?</label>
                <p class="label-text">Einkommen, Gewinn, Mieteinnahmen, ...</p>
                <input data-income v-model="resultsPage.yourActive" @input="watchInput('yourActive')" type="number"
                    class="form-control" step="any" min="0" placeholder="3.400"
                    :class="{ 'error-border': resultsPage.validateErrors.yourActive.isError }" />
                <p class="text-danger" v-if="resultsPage.validateErrors.yourActive.isError">{{
                    resultsPage.validateErrors.yourActive.message }}</p>
            </div>
            <div class="col-md-6 mb-top-margin">
                <label for="">Wie hoch sind deine regelmäßigen Ausgaben pro Monat?</label>
                <p class="label-text">Miete, Essen, Urlaub, Hobby, Versicherungen, ...</p>
                <input data-consumption v-model="resultsPage.monthlyExpenses" @input="watchInput('monthlyExpenses')"
                    type="number" class="form-control" step="any" min="0" placeholder="2.200"
                    :class="{ 'error-border': resultsPage.validateErrors.monthlyExpenses.isError }" />
                <p class="text-danger" v-if="resultsPage.validateErrors.monthlyExpenses.isError">{{
                    resultsPage.validateErrors.monthlyExpenses.message }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-top-margin">
                <label for="">Wie hoch ist dein frei verfügbares Vermögen?</label>
                <p class="label-text">Girokonto, Tagesgeld, ...</p>
                <input @input="watchInput('disposableAssets')" v-model="resultsPage.disposableAssets" type="number"
                    class="form-control" step="any" min="0" placeholder="2.000"
                    :class="{ 'error-border': resultsPage.validateErrors.disposableAssets.isError }" />
                <p class="text-danger" v-if="resultsPage.validateErrors.disposableAssets.isError">{{
                    resultsPage.validateErrors.disposableAssets.message }}</p>
            </div>
            <div class="col-md-6 mb-top-margin">
                <label for="">Wie hoch ist dein eher gebundenes Vermögen?</label>
                <p class="label-text">Depot, Festgeld, ...</p>
                <input @input="watchInput('fixedDeposit')" v-model="resultsPage.fixedDeposit" type="number"
                    class="form-control" step="any" min="0" placeholder="10.000"
                    :class="{ 'error-border': resultsPage.validateErrors.fixedDeposit.isError }" />
                <p class="text-danger" v-if="resultsPage.validateErrors.fixedDeposit.isError">{{
                    resultsPage.validateErrors.fixedDeposit.message }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-top-margin">
                <label for="">Wie hoch sind deine Verbindlichkeiten?</label>
                <p class="label-text">Kredit, BaFöG,...</p>
                <input @input="watchInput('obligations')" v-model="resultsPage.obligations" type="number"
                    class="form-control" step="any" min="0" placeholder="7.000"
                    :class="{ 'error-border': resultsPage.validateErrors.obligations.isError }" />
                <p class="text-danger" v-if="resultsPage.validateErrors.obligations.isError">{{
                    resultsPage.validateErrors.obligations.message }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mb-top-margin">
                <label for="">Wie hoch sind deine hochgerechneten Rentenansprüche?</label>
                <p class="label-text">Gesetzliche und private Rente, Pension, ...</p>
                <input @input="watchInput('statePension')" v-model="resultsPage.statePension" type="number"
                    class="form-control" step="any" min="0" placeholder="2.300"
                    :class="{ 'error-border': resultsPage.validateErrors.statePension.isError }" />
                <p class="text-danger" v-if="resultsPage.validateErrors.statePension.isError">{{
                    resultsPage.validateErrors.statePension.message }}</p>
            </div>
        </div>
        <div class="mt-2">
            <a target="_blank" class="link-class"><u> Weiß ich nicht auswendig</u></a>
        </div>
    </div>
</template>

<script setup>
import { useResultsPage } from '../stores/resultsPage.js'

const resultsPage = useResultsPage();

function watchInput(key) {
    if (resultsPage.validateErrors[key].isError) {
        resultsPage.validateErrors[key].isError = false
    }
}

</script>


<style scoped>
.title-class {
    color: #000000;
    font-weight: 700;
    font-size: 16px;
}

label {
    line-height: 19px;
}

.label-text {
    font-size: 14px;
    line-height: 16px;
    color: #6F6F6F;
}

.link-class {
    color: #2FAED7;
}

.mb-top-margin {
    margin-top: 15px;
}

@media only screen and (max-width: 600px) {
    .row {
        display: flex;
    }


}</style>