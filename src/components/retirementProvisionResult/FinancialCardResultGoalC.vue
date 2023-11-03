<template>
	<div class="insurance">
		<div class="insurance__box">
			<div class="d-md-flex align-items-center mb-4 insurance__card">
				<div class="text-center insurance__card-box d-flex d-md-block align-items-center mb-3 mb-md-0">
					<svg class="insurance__card-icon">
						<use href="../../assets/images/sprites.svg#health"></use>
					</svg>
					<p class="insurance__card-title mb-0 ml-3 ml-md-0">Versicherungen</p>
				</div>
				<div>Du brauchst Versicherungen für die Bereiche Haftpflicht, KFZ und Berufsunfähigkeit, welche zusammen {{ resultsPage.checkedValuesSum }} € pro Monat kosten.</div>
			</div>
			<div class="d-md-flex align-items-center mb-4 insurance__card">
				<div class="text-center insurance__card-box d-flex d-md-block align-items-center mb-3 mb-md-0">
					<svg class="insurance__card-icon">
						<use href="../../assets/images/sprites.svg#elderly"></use>
					</svg>
					<p class="insurance__card-title mb-0 ml-3 ml-md-0">Altersvorsorge</p>
				</div>
				<div>Um deinen Lebensstandard im Alter zu sichern, solltest du 380 € pro Monat in deine Altersvorsorge investieren. Davon entfallen 180 € auf eine Basisrente und 200 € auf eine private Rentenversicherung.</div>
			</div>
			<div class="d-md-flex align-items-center mb-4 insurance__card">
				<div class="text-center insurance__card-box d-flex d-md-block align-items-center mb-3 mb-md-0">
					<svg class="insurance__card-icon">
						<use href="../../assets/images/sprites.svg#currency_exchange"></use>
					</svg>
					<p class="insurance__card-title mb-0 ml-3 ml-md-0">Sparen</p>
				</div>
				<div>Um dein Sparziel von {{ resultsPage.finalAmount }} € in {{ resultsPage.depositYears }} Jahren zu erreichen, solltest du {{ resultsPage.calculatedDeposit() }} € pro Monat sparen. Nutze hierzu ein Tagesgeldkonto.</div>
			</div>
		</div>
		<p class="mb-5">Daraus ergibt sich für dich folgende Haushaltsrechnung:</p>

		<div class="insurance__table mb-5">
			<div class="insurance__table-row bold-line d-flex">
				<p class="bold py-2 mb-0 flex-grow-1 font-weight-bold">Einkommen</p>
				<p class="py-2 mb-0 font-weight-bold">{{ resultsPage.yourActive }} €</p>
			</div>
			<div class="insurance__table-row small-line d-flex">
				<p class="bold py-2 mb-0 flex-grow-1">Versicherungen</p>
				<p class="py-2 mb-0">-{{ resultsPage.checkedValuesSum }} €</p>
			</div>
			<div class="insurance__table-row small-line d-flex">
				<p class="bold py-2 mb-0 flex-grow-1">Altersvorsorge</p>
				<p class="py-2 mb-0">-380 €</p>
			</div>
			<div class="insurance__table-row small-line d-flex">
				<p class="bold py-2 mb-0 flex-grow-1">Sparen</p>
				<p class="py-2 mb-0">-{{ resultsPage.calculatedDeposit() }} €</p>
			</div>
			<div class="insurance__table-row d-flex">
				<p class="bold py-2 mb-0 flex-grow-1">Konsum</p>
				<p class="py-2 mb-0">-{{ resultsPage.monthlyExpenses }} €</p>
			</div>
			<div class="insurance__table-row d-flex">
				<p class="bold py-2 mb-0 flex-grow-1 font-weight-bold">Überschuss</p>
				<p class="py-2 mb-0 font-weight-bold" :class="{'success': resultsPage.increaseOfYourWealth() > 0, 'danger': resultsPage.increaseOfYourWealth() <= 0}">{{ resultsPage.increaseOfYourWealth() }} €</p>
			</div>
		</div>
		<div v-if="resultsPage.increaseOfYourWealth() > 0">
			<p class="mb-4 pb-3">Du hast einen Überschuss von {{ resultsPage.increaseOfYourWealth() }} €. Du könntest deine Sparrate noch weiter erhöhen.</p>
			<p class="font-weight-bold mb-4 pb-3">Vermögensentwicklung</p>
			<p class="mb-4 pb-3">Du investierst monatlich {{ resultsPage.calculatedDeposit() }} € in einen ETF-Sparplan. Der Wert wird natürlich schwanken, langfristig ist aber von einer durchschnittlichen Steigung von 5 % auszugehen. So wird sich dein Vermögen entwickeln:</p>

			<ChartComponent class="mb-5" :summ="diagramCalculetedOnYear()" :deposit="resultsPage.depositYears"/>

			<p class="font-weight-bold mb-2">Wie geht es nun weiter?</p>
			<p class="mb-0">Willst du deinen persönlichen Finanz-Fahrplan direkt um die Tat umsetzen? Wenn du möchtest, schicken wir dir die nötigen Unterlagen kostenlos per E-Mail zu. Klicke dazu hier:</p>
	</div>
	<div v-else>
			<p class="mb-4">Dir fehlen monatlich {{ Math.abs(resultsPage.increaseOfYourWealth()) }} €, um dein Sparziel zu erreichen. Es gibt einige Änderungen, die du vornehmen kannst, um die Rechnung auszugleichen, z.B.:</p>
			<ul class="pl-3">
				<li>Passe deine Anlagestrategie an</li>
				<li>Senke deine gewünschte Rente</li>
				<li>Verringere deinen Konsum</li>
				<li>Gehe bei Versicherungen mehr ins Detail, um den Beitrag zu verringern</li>
			</ul>
			<div class="clearfix mb-4 pb-3">
				<button class="action-button ml-0">Zurück zu den Eingaben</button>
			</div>
			<p class="mb-4 pb-3">Du kannst auch alles so beibehalten und mit einer kleineren Sparrate starten. Dein Sparziel wird sich dadurch etwas in die Zukunft verschieben</p>
			<p class="font-weight-bold mb-2">Wie geht es nun weiter?</p>
			<p class="mb-0">Willst du deinen persönlichen Finanz-Fahrplan direkt um die Tat umsetzen? Wenn du möchtest, schicken wir dir die nötigen Unterlagen kostenlos per E-Mail zu. Klicke dazu hier:</p>
		</div>

	</div>
</template>

<script setup>
import ChartComponent from './ChartComponent.vue';
import { useResultsPage } from '../../stores/resultsPage.js'

// store
const resultsPage = useResultsPage();

const diagramCalculetedOnYear = () => {
		let currentWealth = 0;
		let increaseOfYourMonth = resultsPage.calculatedDeposit();
		for (let i = 1; i <= resultsPage.depositYears; i++) {
			currentWealth += increaseOfYourMonth *12;
			currentWealth *= 1.05;
		}
		return currentWealth.toFixed(0)
	}

</script>

<style lang="scss" scoped>
.insurance {
	margin-top: 50px;

	&__box {
		margin-bottom: 60px;
	}

	&__card {
		gap: 24px;
		&:first-child {
			svg {
				width: 33px;
			}
		}
		&:nth-child(2) {
			svg {
				width: 27px;
			}
		}
	}

	&__card-box {
		flex: 0 0 130px;
	}

	&__card-icon {
		width: 40px;
		height: 40px;
	}

	&__card-title {
		color: #3C94FC;
	}

	&__table-row {
		&:last-child {
			border-top: 1px solid #9E9E9E;
		}
	}
}

.bold-line {
	border-bottom: 1px solid #9E9E9E;
}
.small-line {
	border-bottom: 1px solid rgba(158, 158, 158, 0.2);
}
.success {
	color: #13C82F;
}
.danger {
	color: #FE0000;
}

</style>