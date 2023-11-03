<template>
    <div>
        <div class="main-bg">
            <nav-bar />
            <div class="bg-main-div"> 
                <div class="row justify-content-center">
                    <div class="form-width">
                        <form id="msform">

                            <progress-bar />

                            <div class="slider-mobile" style="display:none;">
                                <div class="icon-class" @click="decreaseIndex">
                                    <img src="../src/assets/icon_greater.svg" alt="" />&nbsp;&nbsp;&nbsp;
                                </div>
                                
                                <div class="icon-class">
                                    <span style="color:#3991FF;"><span id="count"></span>{{ resultsPage.currentStep + 1 }} / 5 <span
                                        id="name"></span></span>&nbsp;&nbsp;
                                </div>

                                <div class="icon-class" @click="increaseIndex">
                                    <img src="../src/assets/icon_less.svg" alt="" />
                                </div>
                            </div>


                            <hr>

                            <form @submit.prevent="checkForm" method="post">
                                <div class="card container second-container">
                                    <fieldset>
                                        <BasicInfoBody v-if="resultsPage.currentStep === 0" />
                                        <InsuranceBody v-if="resultsPage.currentStep === 1" />
                                        <RetirementProvisionBody v-if="resultsPage.currentStep === 2" />
                                        <InvestmentBody v-if="resultsPage.currentStep === 3" />
																				<RetirementProvisionResultBody v-if="resultsPage.currentStep === 4"  />
                                    </fieldset>
                                </div>
                            </form>
                        </form>
                    </div>
                </div>
                <footer-page /> 
            </div>
        </div>
    </div>
</template>

<script setup>
import { useResultsPage } from '../stores/resultsPage.js'
import { ref } from 'vue';
import NavBar from './NavBar.vue';
import ProgressBar from './ProgressBar.vue';
import BasicInfoBody from './BasicInfoBody.vue';
import InsuranceBody from './InsuranceBody.vue';
import RetirementProvisionBody from './RetirementProvisionBody.vue';
import InvestmentBody from './InvestmentBody.vue';
import RetirementProvisionResultBody from './RetirementProvisionResultBody.vue';
import FooterPage from './FooterPage.vue';

const resultsPage = useResultsPage();


const itemCount = ref(5);

function increaseIndex() {
	if (resultsPage.currentStep >= (itemCount.value - 1)) {
		console.log('Stop ++')
		return
	}
	resultsPage.nextStep(resultsPage.currentStep + 1)
}
function decreaseIndex() {
	if (resultsPage.currentStep  <= 0) {
		return;
	}
	resultsPage.nextStep(resultsPage.currentStep - 1)
}

</script>

<style>
@import '../assets/css/custom.css';

body,
html {
    height: 100%;
    overflow-x: hidden;
    background-color: #8FA2B9
}

* {
    margin: 0;
    padding: 0
}

p {
    color: rgb(4, 4, 4)
}

strong {
    font-size: 14px;
    margin-left: 0px;
    font-weight: 400;
}

.main-bg {
    background-color: #8FA2B9;
    height: 100%;
}

.form-width {
    width: 850px;
    height: auto;
    /* height: 2145px; */
}

.font-bold-content {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
}

.form-control {
    font-size: 18px !important;
    border: 1px solid #758190;
    border-radius: 8px;
    color: #000000 !important;
}

.form-control:focus {
    color: #000000;
}

.purple-text {
    color: #3C94FC;
    font-weight: normal
}

.steps {
    font-size: 25px;
    color: #E6ECF4;
    margin-bottom: 10px;
    font-weight: normal;
    text-align: right
}

.fieldlabels {
    color: #E6ECF4;
    text-align: left
}

.progress {
    height: 20px
}

.progress-bar {
    background-color: #3C94FC
}

.fit-image {
    width: 100%;
    object-fit: cover
}

.ul-list {
    margin-left: 27px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
}

hr {
    display: none;
    margin: 0rem 0;
}

.second-container {
    background: #F6F7F9;
    border-radius: 8px;
    padding: 10px;
    margin-top: 35px
}


@media only screen and (max-width: 600px) {
    .col {
        flex: auto;
    }

    body {
        background-color: #F6F7F9 !important;
    }

    .bg-main-div {
        background: #F6F7F9;
    }

    .main-bg {
        background-color: #ffffff !important;
    }

    .slider-mobile {
        display: block !important;
        color: #3991FF;
        white-space: nowrap;
    }

    hr {
        border: block;
        display: block;
        margin: 1rem 0;
    }

    option {
        position: relative;
        width: auto;
    }

    .second-container {
        padding: 0px;
        margin-top: 0px
    }

    i {
        color: #3C94FC;
        font-weight: bold;
    }

    .icon-class{
        cursor: pointer;
        display: inline-block;
    }
}
</style>