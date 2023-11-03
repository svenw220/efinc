<template>
    <div class="mt-3">
        <p>Wie ist deine Wohnsituation?</p>
        <div class="row">
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <div class="box-selection" v-on:click="activateSelection(1)" :class="{ box_active : select_active_class == 1 }">
                    <div>
                        <img class="logo" src="../assets/Icon_one_person.svg">
                    </div>
                    <div class="mt-2">
                        <p class="mb-0">Alleine</p>
                    </div>
                </div><br>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <div class="box-selection" v-on:click="activateSelection(2)" :class="{ box_active : select_active_class == 2 }">
                    <div>
                        <img class="logo" src="../assets/Icon_two_people.svg">
                    </div>
                    <div class="mt-2">
                        <p class="mb-0">Mit Partner*in</p>
                    </div>
                </div><br>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <div class="box-selection" v-on:click="activateSelection(3)" :class="{ box_active : select_active_class == 3 }">
                    <div>
                        <img class="logo" src="../assets/Icon_many_people.svg">
                    </div>
                    <div class="mt-2">
                        <p class="mb-0">In einer WG</p>
                    </div>
                </div><br>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <div class="box-selection" v-on:click="activateSelection(4)" :class="{ box_active : select_active_class == 4 }">
                    <div>
                        <img class="logo" src="../assets/Icon_family.svg">
                    </div>
                    <div class="mt-2">
                        <p class="mb-0">Bei den Eltern</p>
                    </div>
                </div>
            </div><br>
        </div>
    </div>
    <div class="mt-3">
        <p>Besitzt du Wohneigentum?</p>
        <div class="row">
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <p class="form-control box-tag" v-on:click="activate(1)" :class="{ box_active : active_goal == 1 }">Ja</p>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <p class="form-control box-tag" v-on:click="activate(2)" :class="{ box_active : active_goal == 2 }">Nein</p>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-lg-6">
            <label for="">Auf wie viel m² wohnst du?</label>
            <input
							v-model="resultsPage.squareMeters"
              class="form-control"
							:class="{ 'error-border': resultsPage.validateErrors.squareMeters.isError }"
              placeholder="71"
              type="number"
							@input="watchInput('squareMeters')"
            />
						<p class="text-danger" v-if="resultsPage.validateErrors.squareMeters.isError">{{ resultsPage.validateErrors.squareMeters.message }}</p>
        </div>
        <div class="col-lg-6 mb-top-margin">
            <label for="">Wie viele Kinder hast du?</label>
            <input
							v-model="resultsPage.children"
              class="form-control"
							:class="{ 'error-border': resultsPage.validateErrors.children.isError }"
              placeholder="2"
              type="number"
							@input="watchInput('children')"
            />
						<p class="text-danger" v-if="resultsPage.validateErrors.children.isError">{{ resultsPage.validateErrors.children.message }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useResultsPage } from '../stores/resultsPage.js'

const resultsPage = useResultsPage()

function watchInput(key) {
	if (resultsPage.validateErrors[key].isError) {
		resultsPage.validateErrors[key].isError = false
	}
}

const active_goal = ref(1)
const select_active_class = ref(1)

function activate(el) {
	active_goal.value = el
}

function activateSelection(el) {
	select_active_class.value = el
}


</script>

<style scoped>
.box-selection{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 120px;
    background: #FFFFFF;
    border: 1px solid #758190;
    border-radius: 8px;
    cursor: pointer;
}
.box-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    cursor: pointer;
}
.box_active {
    background: rgba(143, 162, 185, 0.4)
}

@media only screen and (max-width: 600px) {

.row {
  display: flex;
}
.mb-top-margin{
    margin-top: 15px;
}

}
</style>