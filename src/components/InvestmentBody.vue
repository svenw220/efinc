<template>
    <div class="form-card">
        <div class="row">
            <div class="container p-5">
                <div>
                    <p class="font-bold-title">Geldanlage</p>
                    <br />
                    <p class="content-text">
                        Work in progress
                    </p>
                    <br />
                </div>
            </div>
        </div>
    </div>
    <input type="submit" name="next" class="action-button" value="Weiter" @click="resultsPage.nextStep(4)" />
</template>

<script setup>
import { useResultsPage } from '../stores/resultsPage.js'

const resultsPage = useResultsPage()
</script>

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
