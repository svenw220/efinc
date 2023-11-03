<template>
    <div class="col">
        <p>Welcher Sicherheitstyp bist du?</p>
        <div class="slidecontainer hide-slider-mb">
            <label for="" class="box-label-right">Risiko</label>
            <input type="range" min="1" max="100" class="slider" v-model="sliderVal">
            <label for="" class="box-label-left">Sicherheit</label>
        </div>
        <div class="show-slider-mb">
            <input type="range" min="1" max="100" class="slider" v-model="sliderVal">
            <div class="d-flex justify-content-between" style="margin-top: 10px;">
                <div class="box-label-right">Risiko</div>
                <div class="box-label-left">Sicherheit</div>
            </div>
        </div>
        <div v-if="sliderVal < 20" class="box-sizing-inside">
            <p class="font-bold-content">Safety first!</p>
            <div class="ul-list">
                <ul>
                    <li>Ich genieße die Sicherheit, zu wissen, dass alles so kommt, wie ich es mir wünsche</li>
                    <li>So kann ich sorgenfrei in die Zukunft gehen und habe mehr Zeit für die schönen Dinge im Leben
                    </li>
                    <li>Dafür bin ich bereit, monatlich auf einen kleinen Teil meines Geldes zu verzichten</li>
                </ul>
            </div>
        </div>
        <div v-else-if="sliderVal < 40" class="box-sizing-inside">
            <p class="font-bold-content">Rationalist</p>
            <div class="ul-list">
                <ul>
                    <li>Versicherung sind sinnvoll, alles muss ich aber nicht haben</li>
                </ul>
            </div>
        </div>
        <div v-else-if="sliderVal < 60" class="box-sizing-inside">
            <p class="font-bold-content">Durchschnitt</p>
            <div class="ul-list">
                <ul>
                    <li>Ich mache mir keine großen Sorgen, ein wenig Sicherheit schadet aber auch nicht</li>
                    <li>Wichtige Risiken möchte ich im Griff haben, kleinere Zwischenfälle reguliere ich mit meinem
                        Ersparten</li>
                </ul>
            </div>
        </div>
        <div v-else-if="sliderVal < 80" class="box-sizing-inside">
            <p class="font-bold-content">Minimalist</p>
            <div class="ul-list">
                <ul>
                    <li>Nur das allernötigste</li>
                </ul>
            </div>
        </div>
        <div v-else class="box-sizing-inside">
            <p class="font-bold-content">YOLO</p>
            <div class="ul-list">
                <ul>
                    <li>Versicherungen brauche ich nicht, ich bin noch immer mit jeder Situation fertig gewordenn</li>
                    <li>Auch vor schlimmen Risiken des Lebens habe ich keine Angst</li>
                    <li>Dafür kann ich heute mein Leben genießen und habe mehr Geld zur Verfügung</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RiskAffinitySection",
    components: {

    },
    data() {
        return {
            sliderVal: 0,
        }
    },
    props: {
    },
    watch: {
    },
}
</script>

<style>
.box-label-right {
    margin-right: 10px;
    margin-top: 9px;
    color: #8FA2B9;
}

.box-label-left {
    margin-left: 10px;
    margin-top: 9px;
    color: #8FA2B9;
}

.box-sizing-inside {
    flex-direction: row;
    justify-content: center;
    padding: 16px;
    gap: 19px;
    margin-top: 30px;
    background: rgba(143, 162, 185, 0.3);
    border-radius: 8px;
}

.show-slider-mb {
    display: none !important;
}

@media only screen and (max-width: 600px) {
    .hide-slider-mb {
        display: none !important;
    }

    .show-slider-mb {
        display: block !important;
    }
}
</style>