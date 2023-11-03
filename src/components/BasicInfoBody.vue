<template>
    <div class="form-card">
        <div class="row">
            <div class="container p-5">
                <div>
                    <p class="font-bold-title">Finanzen leicht gemacht</p>
                    <br />
                    <p class="content-text">
                        Du willst bei deinen Finanzen optimal aufgestellt sein, ohne zig Bücher zu
                        lesen oder Termine mit Beratern machen zu müssen? Dann bist du hier genau
                        richtig! Bei eFinc erfährst du innerhalb von fünf Minuten, welche
                        Versicherungen dir fehlen, wie viel du sparen solltest und welche Geldanlage
                        zu dir passt - und das völlig kostenlos und ohne deine Kontaktdaten anzugeben.
                        Klingt gut? <br /><br />
                        Dann lass uns mit ein paar Grundinformationen starten, um dir maßgeschneiderte
                        Tipps geben zu können.
                    </p>
                    <br />
                </div>
                <div class="row">
									<AgeField />
									<div class="col mb-select-style">
										<label for="inputEmail4">Wie ist deine aktuelle Arbeitssituation?</label>
										<select class="custom-select select" v-model="resultsPage.workExperience">
											<option v-for="(option, index) in resultsPage.optionsWorkExperience" :key="index">{{ option }}</option>
										</select>
									</div>
                </div>
                <br />
                <div class="box-sizing risk-bg">
                    <RiskAffinitySection />
                </div>
                <div class="box-sizing fs-bg">
                    <FinancialSituation />
                </div>
                <br /><br />
                <RetiringAgeField />
                <MoneyPerMonthField />
                <RetirementQuestion />
								<InvestmentStrategy />
                <HomeLivingSituation />

            </div>
        </div>
    </div>
		<p v-show="resultsPage.errorMessage" class="mb-0 text-danger text-left ml-4 pl-2">Füllen Sie alle erforderlichen Felder aus</p>
    <input type="submit" name="next" class="next action-button" value="Weiter" @click.prevent="resultsPage.nextStep(1), resultsPage.removedErrorMessage()" />
</template>

<script setup>
	import { useResultsPage } from '@/stores/resultsPage.js'
	// import Select2 from 'vue3-select2-component';
	import AgeField from "./AgeField.vue";
	import RiskAffinitySection from "./RiskAffinitySection.vue";
	import RetiringAgeField from "./RetiringAgeField.vue";
	import MoneyPerMonthField from "./MoneyPerMonthField.vue";
	import RetirementQuestion from "./RetirementQuestion.vue";
	import FinancialSituation from "./FinancialSituation.vue";
	import InvestmentStrategy from "./InvestmentStrategy.vue";
	import HomeLivingSituation from "./HomeLivingSituation.vue";

	const resultsPage = useResultsPage();
	
</script>

<style lang="scss" scoped>
.select {
	font-size: 18px !important;
	border: 1px solid #758190;
	border-radius: 8px;
	color: #000000 !important;
	background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjEwcHgiIHZpZXdCb3g9IjAgMCAxMjgwLjAwMDAwMCA2NDAuMDAwMDAwIj4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNjQwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTEwIDYzOTIgYzAgLTQgMTQzOCAtMTQ0NSAzMTk1IC0zMjAyIGwzMTk1IC0zMTk0IDMxOTUgMzE5NCBjMTc1NwoxNzU3IDMxOTUgMzE5OCAzMTk1IDMyMDIgMCA1IC0yODc1IDggLTYzOTAgOCAtMzUxNSAwIC02MzkwIC0zIC02MzkwIC04eiIvPgo8L2c+Cjwvc3ZnPgo=");
	&:focus {
		box-shadow: none;
		border-color: #3C94FC;
	}
}
</style>


<style>
.form-card {
    text-align: left;
}

.font-bold-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
}

.content-text {
    color: #000000;
}

.box-sizing {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 6px;
    gap: 32px;
    border: 1px solid #9e9e9e;
    border-radius: 8px;
    margin-top: 25px;
}

.risk-bg{
    background: #ffffff;
}

.fs-bg {
    background: rgba(143, 162, 185, 0.3);
}
@media only screen and (max-width: 600px) {
	.mb-select-style{
		margin-top: 40px;
	}
}
</style>
