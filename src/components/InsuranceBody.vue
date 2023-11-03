<template>
    <div class="form-card">
        <div class="row">
            <!-- <p v-if="errors.length">
                <ul><span v-for="(error, index) in errors"  :key="index">{{ error }}</span></ul>
            </p> -->
            <div class="container p-5">
                <div class="mb-4 pb-3">
                    <p class="font-bold-title mb-0">Versicherungen</p>
                </div>
								<div class="row">
									<div class="col-12 mb-5 pb-2">
										eFinc hat die für dich sinnvollen Versicherungen bereits ausgewählt. Hier kannst du sie nach deinen Bedürfnissen anpassen. Hinter dem Namen der Versicherung siehst du den erwarteten Preis pro Monat.
									</div>
									<div class="col-12 mb-5">
										<div class="mb-4 modal-sm">
											<div v-for="(item, index) in arrayChecked" :key="index">
												<InsuranceCheckboxComponent :id="item.id" v-model:checked="item.checked" :label="item.label" :value="item.value" @click="item.showModal = true" />
												<vue-final-modal :escToClose="false" :clickToClose="false" content-class="modal-sm" v-model="item.showModal" v-if="item.defaultInsurance">
												<div v-if="!isShowSecondModal">
													<p class="mb-5 font-weight-bold text-center">Warum möchtest du die Versicherung abwählen?</p>
													<button class="mb-2" @click="item.showModal = false, item.defaultInsurance = false">
														Brauche ich nicht
													</button>
													<button @click="isShowSecondModal = true">
														Habe ich schon
													</button>
												</div>
												<div v-else>
													<p class="mb-5 text-center">In den meisten Fällen findet der eFinC eine bessere und günstigere Alternative. Empfehlung: Schaue dir die Alternative an und entscheide später, welche besser für dich passt.</p>
													<button class="mb-2" @click="item.showModal = false, item.defaultInsurance = true, isShowSecondModal = false, item.checked = true">
														OK, erstmal drin lassen
													</button>
													<button @click="item.showModal = false, item.defaultInsurance = false">
														Nein, trotzdem abwählen
													</button>
												</div>
											</vue-final-modal>
											</div>
										</div>
										<p class="font-weight-bold">Summe: {{ checkedValuesSum }} €</p>
									</div>
									<div class="col-12">
										<p>Wie möchtest du weitermachen?</p>
									</div>
								</div>
								<div class="row no-gutters mx-n2">
									<div class="col-12 col-md-6 px-2 mb-3 mb-md-0">
										<div class="card" @click="activate(1)" :class="{ 'active' : active === 1 }">
											<p class="text-center font-weight-bold mb-2 card-title">Fast Lane</p>
											<ul class="card-list">
												<li>Du bist mit dem Vorschlag einverstanden</li>
												<li>Du sparst Zeit</li>
												<li>Es geht direkt weiter</li>
											</ul>
										</div>
									</div>
									<div class="col-12 col-md-6 px-2">
										<div class="card" @click="activate(2)" :class="{ 'active' : active === 2 }">
											<p class="text-center font-weight-bold mb-2 card-title">Detail Lane</p>
											<ul class="card-list">
												<li>Du beantwortest noch ein paar Fragen</li>
												<li>Individueller Vorschlag</li>
												<li>Günstigere Prämien</li>
											</ul>
										</div>
									</div>
								</div>
            </div>
        </div>
    </div>
    <input type="submit" name="next" class="next action-button" value="Weiter" @click="resultsPage.nextStep(2)" />
</template>

<script setup>
import { useResultsPage } from '@/stores/resultsPage.js';
import InsuranceCheckboxComponent from './InsuranceCheckboxComponent.vue';
import { VueFinalModal } from 'vue-final-modal';
import { ref, computed, watch } from 'vue';

const resultsPage = useResultsPage()

const isShowSecondModal = ref(false)

const arrayChecked = ref([
	{ id: 'responsibility', label: 'Haftpflicht', value: 6, checked: true, showModal: false, defaultInsurance: true },
	{ id:'disability', label: 'Berufsunfähigkeit', value: 96, checked: true, showModal: false, defaultInsurance: true  },
	{ id:'legalProtection', label: 'Rechtsschutz', value: 22, checked: true, showModal: false, defaultInsurance: true  },
	{ id:'accident', label: 'Unfall ', value: 10, checked: true, showModal: false, defaultInsurance: true },
	{ id: 'householdGoods', label: 'Hausrat', value: 9, checked: false, showModal: false, defaultInsurance: false  },
	{ id: 'withState', label: 'amb/stat', value: 20, checked: false, showModal: false, defaultInsurance: false },
	{ id: 'toothSupplement', label: 'Zahnzusatz ', value: 19, checked: false, showModal: false, defaultInsurance: false  },
	{ id: 'sickPay', label: 'Krankentagegeld ', value: 4, checked: true, showModal: false, defaultInsurance: true  },
	{ id: 'careSupplement', label: 'Pflegezusatz', value: 20, checked: false, showModal: false, defaultInsurance: false  },
	{ id: 'car', label: 'KFZ', value: 11, checked: false, showModal: false, defaultInsurance: false },
	{ id: 'residentialBuilding', label: 'Wohngebäude', value: 14, checked: false, showModal: false, defaultInsurance: false }
])

const checkedValuesSum = computed(() => {
	let sum = 0
	for (const item of arrayChecked.value) {
		if (item.checked) {
			sum += item.value
		}
	}
	return sum
})

resultsPage.checkedValuesSum = checkedValuesSum.value

watch(checkedValuesSum, (newVal) => {
	resultsPage.updateCheckedValuesSum(newVal)
})

const active = ref(1)

const activate = (el) => {
    active.value = el;
}

</script>
<style lang="scss">
	.vfm__content {
		font-family: 'Work Sans';
		&.modal-sm {
			max-width: 400px;
			padding: 27px 16px;

			button {
				border: 1px solid #758190;
				border-radius: 8px;
				width: 100%;
				padding: 10px;
				outline: none;
				background: #fff;
				transition: .2s ease;

				&:hover {
					background: rgba(117, 129, 144, 0.1);
				}
			}
		}
	}
</style>

<style lang="scss" scoped>
.card {
	cursor: pointer;
	border: 1px solid #758190;
	border-radius: 8px;
	padding: 33px 16px;
	height: 100%;
	&.active {
		background: rgba(143, 162, 185, 0.4);
	}
}
.card-title {
	font-size: 20px;
}
.card-list {
	padding-left: 15px;
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
</style>
