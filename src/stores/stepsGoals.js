import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStepsGoals = defineStore('stepsGoals', () => {

	const isShowGoalA = ref(true);
	const isShowGoalB = ref(false);
	const isShowGoalC = ref(false);
	const isShowGoalD = ref(false);

	return {
		isShowGoalA,
		isShowGoalB,
		isShowGoalC,
		isShowGoalD
	}
})