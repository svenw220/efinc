<template>
    <div class="form-card">
        <div class="row">
            <div class="container p-5">
                <div class="mb-3">
                    <p class="font-bold-title mb-4">Altersvorsorge</p>
                    <br />
                    <p class="content-text mb-5">
											Ziel der Altersvorsorge ist es, dir einen hohen Lebensstandard nach Renteneintritt zu ermöglichen. Lass uns herausfinden, was dir dabei wichtig ist.
                    </p>
                </div>
								<div class="row">
									<!-- first -->
									<div class="col-12 mb-5 pb-2">
										<p class="mb-2">Wie wichtig ist es dir, schon vor der Rente  an das Geld heranzukommen?</p>
										<RadioButtonComponent
											v-for="item in optionsImportantMoney"
											:key="item.id"
											:value="item.name"
											:id="item.id"
											name="importantMoney"
											v-model:checked-value="selectedImportantMoney"
											:checked="item.name === selectedImportantMoney"
										/>
									</div>
									<div class="col-12 mb-5 pb-2">
										<p class="mb-2">Willst du dein angespartes Geld auf jeden Fall als monatliche Rente auszahlen lassen, oder möglicherweise auch als Einmalbetrag?</p>
										<RadioButtonComponent
											v-for="item in optionsMonthlyPension"
											:key="item.id"
											:value="item.name"
											:id="item.id"
											name="MonthlyPension"
											v-model:checked-value="selectedMonthlyPension"
											:checked="item.name === selectedMonthlyPension"
										/>
									</div>
									<div class="col-12 mb-5 pb-2">
										<p class="mb-2">Es ist sinnvoll, deine Altersvorsorge auf einer Basisrente und eine einer privaten Rentenversicherung aufzubauen. Wir haben einen optimalen Mix basierend auf deinen Angaben ausrechnet, du kannst diesen aber auch manuell verändern.</p>
										<p @click="showModal = true" class="mb-3 open-pop-up">Mehr über die verschiedenen Renten erfahren</p>
										<vue-final-modal v-model="showModal">
											<DialogPensionProvision @handlerClose="showModal = false" />
										</vue-final-modal>
									</div>
									<div class="col-12 mb-5 pb-2">
										<input step="10" type="range" min="0" max="100" class="slider" v-model="sliderVal">
										<div class="d-flex justify-content-between" style="margin-top: 10px;">
											<div class="box-label-right">{{ basisrentePercent }} % <br> Basisrente</div>
											<div class="box-label-left text-right">{{ rvPercent }} % <br> priv. RV</div>
										</div>
									</div>
									<div class="col-12">
										<p>Wir empfehlen dir, deine Altersvorsorge über den Kapitalmarkt abzubilden. Dabei gehören Kursschwankungen dazu - ist es sogar möglich (wenn er auch sehr unwahrscheinlich), dass am Ende weniger Geld da ist, als vorher. Du kannst dir vom Anbieter einen bestimmten Prozentsatz deiner Beiträge garantieren lassen, was dazu führt, dass er diesen Teil nur bedingt anlegen darf. Das führt allerdings zu deutlich geringerem Kapital am Ende der Laufzeit. Wir haben einen sinnvollen Wert für dich ausgerechnet, du kannst ihn aber natürlich ändern:</p>
										<CounterComponent :count="count" @plus="handlePlus" @minus="handleMinus" />
										<div v-if="count > 70" class="box-sizing-inside p-2 mt-1 lh-sm mb-5 pb-2">
											Bei einer Garantie von über 70% verringert sich die Rendite deutlich! Du musst sehr viel mehr einzahlen, um dein Rentenziel zu erreichen.
										</div>
										<br v-else>
									</div>
									<div class="col-12">
										<p class="mb-2">Möchtest du, dass dein Geld eher in nachhaltigen Unternehmen angelegt wird?</p>
										<RadioButtonComponent
											v-for="item in optionsInvestmentCompany"
											:key="item.id"
											:value="item.name"
											:id="item.id"
											name="investmentCompany"
											v-model:checked-value="selectedInvestmentCompany"
											:checked="item.name === selectedInvestmentCompany"
										/>
									</div>
								</div>
            </div>
        </div>
    </div>
    <input type="submit" name="next" class="next action-button" value="Weiter" @click="resultsPage.nextStep(3)" />
    <!-- <input type="submit" name="previous" class="previous action-button" value="prev" /> -->
</template>

<script setup>
import { useResultsPage } from '../stores/resultsPage.js'

const resultsPage = useResultsPage()
</script>

<script>
import RadioButtonComponent from './RadioButtonComponent.vue';
import DialogPensionProvision from './modals/DialogPensionProvision.vue';
import { VueFinalModal } from 'vue-final-modal';
import CounterComponent from './CounterComponent.vue';


export default {
    name: "RetirementProvisionBody",
    components: {
    RadioButtonComponent,
		DialogPensionProvision,
		VueFinalModal,
    CounterComponent
},
	data() {
		return {
			sliderVal: 0,
      basisrentePercent: 0,
      basisrenteAmount: 0,
      rvPercent: 100,
      rvAmount: 1000,
			count: 70,
			showModal: false,
			selectedImportantMoney: 'Egal',
			optionsImportantMoney: [
				{ id: 'option_1', name: 'Nicht so wichtig' },
				{	id: 'option_2', name: 'Egal'},
				{	id: 'option_3', name: 'Sehr wichtig'},
			],
			selectedMonthlyPension: 'Weiß ich noch nicht',
			optionsMonthlyPension: [
				{	id: 'pension_1', name: 'Als monatliche Rente' },
				{	id: 'pension_2', name: 'Weiß ich noch nicht' },
				{	id: 'pension_3', name: 'Ja, zumindest einen Teil' },
			],
			selectedInvestmentCompany: 'Nein',
			optionsInvestmentCompany: [
				{	id: 'yes', name: 'Ja' },
				{	id: 'no', name: 'Nein' },
				{	id: 'egal', name: 'Egal' },
			]
		};
	},
	methods: {
    openModal() {
      this.isModalOpen = true;
    },
		handlePlus() {
			this.count === 100 ? this.count = 100 : this.count += 10
    },
    handleMinus() {
      this.count === 60 ? this.count = 60 : this.count -= 10
    },
  },
	watch: {
    sliderVal(newVal) {
      this.basisrentePercent = newVal;
      this.basisrenteAmount = newVal * 1000 / 100;
      this.rvPercent = 100 - newVal;
      this.rvAmount = (100 - newVal) * 1000 / 100;
    },
  },
};
</script>

<style scoped>
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
.open-pop-up {
	color: #2FAED7;
	text-decoration: underline;
	cursor: pointer;
}
</style>
