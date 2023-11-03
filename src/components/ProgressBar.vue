
<template>

    <div>
        <div class="card container first-container">
            <div class="progress-width">
                <ul id="progressbar" class="navbar-right">
                    <li :class="getClass(0)" @click="resultsPage.currentStep = 0" id="account"><strong>Grundinformationen</strong>
                    </li>
                    <li :class="getClass(1)" @click="resultsPage.nextStep(1)" id="personal"><strong>Versicherungen</strong>
                    </li>
                    <li :class="getClass(2)" @click="resultsPage.nextStep(2)" id="payment"><strong>Altersvorsorge</strong>
                    </li>
                    <li :class="getClass(3)" @click="resultsPage.nextStep(3)" id="confirm"><strong>Geldanlage</strong></li>
										<li :class="getClass(4)" @click="resultsPage.nextStep(4)" id="results"><strong>Ergebnis</strong></li>
                </ul>
            </div>
        </div>
        <hr class="mb-hr">
    </div>
</template>

<script setup>
import { useResultsPage } from '@/stores/resultsPage.js'

const resultsPage = useResultsPage();


function getClass(index) {
	if (index === resultsPage.currentStep ) {
		return "active";
	}
	return "inactive";
} 


</script>

<!-- <script  lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: "ProgressBar",
    props: {
        currentIndex: {
            type: Number,
            required: true
        }
    },
    emits: ["set-index"],
    methods: {
        setIndex(index: Number): void {
            this.$emit("set-index", index);
        },
        getClass(index: Number) {

            if (index === this.currentIndex) {
                return "active";
            }
            return "inactive";
        }
    }

})
</script> -->

<style>
.first-container {
    background: #F6F7F9;
    border-radius: 8px;
    padding: 10px;
    margin-top: 35px
}

.card {
    z-index: 0;
    border: none;
    position: relative
}

.progress-width {
    width: 70%;
    align-self: center;
}


#progressbar {
    margin: revert;
    overflow: hidden;
    color: #758190
}

#progressbar .active {
    color: #3C94FC
}

#progressbar li {
    list-style-type: none;
    font-size: 15px;
    width: 20%;
    float: left;
    position: relative;
    font-weight: 400;
    cursor: pointer;
}

#progressbar #account:before {
    content: "1"
}

#progressbar #personal:before {
    content: "2"
}

#progressbar #payment:before {
    content: "3"
}

#progressbar #confirm:before {
    content: "4"
}

#progressbar #results:before {
    content: "5"
}

#progressbar #results:after {
    background: #E6ECF4;
    left: -50% !important;
}

#progressbar #account:after {
    background: #E6ECF4;
}

#progressbar #personal:after {
    background: #E6ECF4;
}

#progressbar #payment:after {
    background: #E6ECF4;
}

#progressbar li:before {
    width: 50px;
    height: 50px;
    line-height: 45px;
    display: block;
    font-size: 20px;
    color: #758190;
    background: #E6ECF4;
    border-radius: 50%;
    margin: 0 auto 10px auto;
    padding: 2px
}

#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: #E6ECF4;
    position: absolute;
    left: 50%;
    right: 0;
    top: 25px;
    z-index: -1
}

#progressbar li.active:before,
#progressbar li.active:after {
    background: #3C94FC;
    color: white;
}

@media only screen and (max-width: 600px) {
    .first-container {
        display: none;
    }

    .mb-hr {
        margin-top: 0;
    }
}
</style>