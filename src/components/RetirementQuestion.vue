<template>
    <div class="row">
        <div class="col-sm-12">
            <p>Abgesehen von der Altersvorsorge möchtest du vielleicht sparen, um dir später große Wünsche (Auto, Haus,
                Sabattical, Urlaub) zu erfüllen. Welche Frage sollen wir dir beantworten?</p>
            <div class="row">
                <div class="col-md-6">
                    <p class="form-control box-tag" v-on:click="activate(1), isCheckStepA()" :class="{ box_active : resultsPage.activePensionStep == 1 }">
                        Wie viel Geld habe ich zum sparen übrig?</p>
                </div>
                <div class="col-md-6">
                    <p data-card2 class="form-control box-tag" v-on:click="activate(2), isCheckStepB()" :class="{ box_active: resultsPage.activePensionStep == 2 }">
                        Ich weiß, wie viel ich pro Monat sparen will. Wie solll ich das Geld anlegen?</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p class="form-control box-tag" v-on:click="activate(3), isCheckStepC()" :class="{ box_active: resultsPage.activePensionStep == 3 }">
                        Ich habe ein konkretes Sparziel im Kopf. Wie viel muss ich sparen, um es zu erreichen?</p>
                </div>
                <div class="col-md-6">
                    <p class="form-control box-tag" v-on:click="activate(4), isCheckStepD()" :class="{ box_active: resultsPage.activePensionStep == 4 }">
                        Keine davon</p>
                </div>
            </div>
        </div>
    </div>
    <SavingGoalSection :selectedGoal="resultsPage.activePensionStep" />
    <InvestMoneySection :selectedGoal="resultsPage.activePensionStep" />
</template>

<script setup>
import SavingGoalSection from "./SavingGoalSection.vue";
import InvestMoneySection from "./InvestMoneySection.vue";
import { useResultsPage } from '../stores/resultsPage.js'

const resultsPage = useResultsPage();

const activate = (el) => {
	console.log(resultsPage.activePensionStep)
	resultsPage.activePensionStep = el
}
// const setResultsPageProperty = (property, excludeProperties = []) => {
//   Object.keys(resultsPage).forEach(key => {
//     if (!excludeProperties.includes(key)) {
//       resultsPage[key] = (key === property);
//     }
//   });
// }

const isCheckStepD = () => {
	resultsPage.isShowGoalD = true
	resultsPage.isShowGoalA = false
	resultsPage.isShowGoalB = false
	resultsPage.isShowGoalC = false
};

const isCheckStepB = () => {
	resultsPage.isShowGoalB = true
	resultsPage.isShowGoalA = false
	resultsPage.isShowGoalD = false
	resultsPage.isShowGoalC = false
}

const isCheckStepA = () => {
	resultsPage.isShowGoalA = true
	resultsPage.isShowGoalB = false
	resultsPage.isShowGoalD = false
	resultsPage.isShowGoalC = false
}

const isCheckStepC = () => {
	resultsPage.isShowGoalC = true
	resultsPage.isShowGoalB = false
	resultsPage.isShowGoalD = false
	resultsPage.isShowGoalA = false
}
</script>

<style scoped>
.box-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95px;
    cursor: pointer;
    text-align: center;
}

.box_active {
    background-color: rgba(143, 162, 185, 0.3);
}
</style>