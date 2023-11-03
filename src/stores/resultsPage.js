import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useResultsPage = defineStore('resultsPageStore', () => {

	const yourActive = ref('');
	const monthlyExpenses = ref('');
	const disposableAssets = ref('');
	const fixedDeposit = ref('');
	const obligations = ref('');
	const statePension = ref('');

	const retireAge = ref('67');
	const monthValue = ref('');
	const activePensionStep = ref(1);

	const savingMonth = ref('');
	const finalAmount = ref('');
	const depositYears = ref('');
	const checkedValuesSum = ref(0);
	const age = ref('');

	const squareMeters = ref('');
	const children = ref('');


	const workExperience = ref('Angestellt');
	const optionsWorkExperience = ref(['Angestellt', 'Student', 'Selbstständig']);

	const currentStep = ref(0);

	const errorMessage = ref(false)

	function removedErrorMessage() {
		setTimeout(() => { errorMessage.value = false }, 3000)
	}

	function numberTextIsFilled(value) {
		if (value === null) {
			return false;
		}
		if (value === undefined) {
			return false;
		}
		if (value === "") {
			return false;
		}
		return true;
	}

	const validateErrors = ref({
		age: {
			message: 'Das Alter muss zwischen 18 und 99 liegen',
			isError: false,
			validateHandler: () => age.value >= 18 && age.value <= 99
		},
		yourActive: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(yourActive.value);
			}
		},
		monthlyExpenses: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(monthlyExpenses.value);
			}
		},
		disposableAssets: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(disposableAssets.value);
			}
		},
		fixedDeposit: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(fixedDeposit.value);
			}
		},
		obligations: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(obligations.value);
			}
		},
		statePension: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(statePension.value);
			}
		},
		retireAge: {
			message: 'Das Alter muss zwischen 18 und 99 liegen',
			isError: false,
			validateHandler: () => retireAge.value >= 18 && retireAge.value <= 99
		},
		monthValue: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(monthValue.value);
			}
		},
		savingMonth: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(savingMonth.value);
			}
		},
		finalAmount: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(finalAmount.value);
			}
		},
		depositYears: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(depositYears.value);
			}
		},
		squareMeters: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(squareMeters.value);
			}
		},
		children: {
			message: 'Benötigtes Feld',
			isError: false,
			validateHandler: () => {
				return numberTextIsFilled(children.value);
			}
		},
	})

	function isCheckField(field) {
		validateErrors[field].isError = true
	}

	const nextStep = (step) => {
		Object.keys(validateErrors.value).forEach(elem => {
			const isValid = validateErrors.value[elem].validateHandler();
			// console.log(`Field ${elem}, isValid: ${isValid}`);
			if (!isValid) {
				if (activePensionStep.value === 2) {
					validateErrors.value[elem].isError = true
					validateErrors.value.finalAmount.isError = false
					validateErrors.value.depositYears.isError = false
					errorMessage.value = true
					return
				}
				if (activePensionStep.value === 3) {
					validateErrors.value[elem].isError = true
					validateErrors.value.savingMonth.isError = false
					errorMessage.value = true
					return
				}
				validateErrors.value[elem].isError = true
				validateErrors.value.savingMonth.isError = false
				validateErrors.value.finalAmount.isError = false
				validateErrors.value.depositYears.isError = false
				errorMessage.value = true
				return
			}
		})

		if (!Object.values(validateErrors.value).some(item => item.isError)) {
			currentStep.value = step
			errorMessage.value = false
		}
	}



	function updateCheckedValuesSum(sum) {
		checkedValuesSum.value = sum
	}

	// step D
	const isShowGoalD = ref(false);

	const calculatedActive = () => {
		let result = 0;
		result = yourActive.value - (monthlyExpenses.value + 380 + checkedValuesSum.value);
		return result
	}

	// step B
	const isShowGoalB = ref(false);

	const calculatedInvest = () => {
		let result = 0;
		result = yourActive.value - (monthlyExpenses.value + savingMonth.value + 380 + checkedValuesSum.value);
		console.log(result)
		return result
	}


	// step A
	const isShowGoalA = ref(true);

	// step C
	const isShowGoalC = ref(false);

	const calculatedDeposit = () => {
		let res = 0;
		let month = Math.round(depositYears.value * 12);
		res = Math.round(finalAmount.value / month);
		return res
	}

	const increaseOfYourWealth = () => {
		let result = 0;
		let month = Math.round(depositYears.value * 12);
		let summ = Math.round(finalAmount.value / month);
		result = yourActive.value - (monthlyExpenses.value + summ + 380 + checkedValuesSum.value);
		return result
	}


	return {
		yourActive,
		monthlyExpenses,
		disposableAssets,
		fixedDeposit,
		obligations,
		statePension,
		savingMonth,
		finalAmount,
		depositYears,
		isShowGoalA,
		isShowGoalB,
		isShowGoalC,
		isShowGoalD,
		calculatedActive,
		calculatedInvest,
		calculatedDeposit,
		increaseOfYourWealth,
		checkedValuesSum,
		updateCheckedValuesSum,
		age,
		workExperience,
		optionsWorkExperience,
		validateErrors,
		isCheckField,
		retireAge,
		monthValue,
		activePensionStep,
		squareMeters,
		children,
		currentStep,
		nextStep,
		errorMessage,
		removedErrorMessage
	}
})