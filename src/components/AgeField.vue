<template>
    <div class="col">
        <label for="age">Wie alt bist du?</label>
        <!-- <input
					type="number"
					class="form-control"
					name="age"
					min="18"
					max="99"
					:value="age"
					placeholder="24"
					required
					@input="$emit('update:age', $event.target.value)"
				/> -->
				<input
					type="number"
					class="form-control"
					:class="{ 'error-border': resultsPage.validateErrors.age.isError }"
					name="age"
					min="18"
					max="99"
					v-model="resultsPage.age"
					placeholder="24"
					required
					@input="watchInput()"
				/>
				<p class="text-danger" v-if="resultsPage.validateErrors.age.isError">{{ resultsPage.validateErrors.age.message }}</p>
    </div>
</template>

<script setup>
import { useResultsPage } from '@/stores/resultsPage.js'

const resultsPage = useResultsPage()

const watchInput = () => {
	if (resultsPage.validateErrors.age.isError) {
		resultsPage.validateErrors.age.isError = false
	}
}

// const isCheckError = () => {

// }
// import { defineEmits, defineProps, computed } from "vue";


// const props = defineProps({
// 	modelValue: {
// 		type: [String, Number],
// 		required: true
// 	}
// })

// const model = computed({
//   get() {
//     return props.modelValue
//   },
//   set(value) {
//     emit('update:modelValue', value)
//   }
// })

// const emit = defineEmits(['update:modelValue'])
</script>