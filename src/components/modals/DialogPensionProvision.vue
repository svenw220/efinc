<template>
	<div class="dialog">
		<p class="dialog__text text-md-center">Bei der Altersvorsorge baut eFinc auf zwei Säulen: Der Basisrente und der privaten Rentenversicherung. Beide Varianten haben ihre Vor- und Nachteile. eFinC hat aufgrund deiner bisherigen Angaben eine erste Aufteilung vorgenommen, die steuerlich am besten für dich ist. Im Folgenden gehen wir auf die Unterschiede ein, sodass du die Aufteilung noch nach deinen Wünschen verändern kannst.</p>
		<div class="dialog__box d-flex flex-wrap">
			<div class="dialog__inner col-12 col-lg-6 px-md-5">
				<h3 class="dialog__inner-title mb-4">Basisrente</h3>
				<p class="dialog__inner-text mb-0">Vorteile:</p>
				<ul class="dialog__inner-list">
					<li class="dialog__inner-item">Absetzbare Beiträge</li>
					<li class="dialog__inner-item">Geschütztes Kapital (zB bei Arbeitslosigkeit)</li>
				</ul>
			</div>
			<div class="dialog__inner col-12 col-lg-6 px-md-5">
				<h3 class="dialog__inner-title mb-4">Private Rentenversicherung</h3>
				<p class="dialog__inner-text mb-0">Vorteile:</p>
				<ul class="dialog__inner-list">
					<li class="dialog__inner-item">Fast steuerfreie Rente</li>
					<li class="dialog__inner-item">Entnahme möglich</li>
					<li class="dialog__inner-item">Als Sicherheit (z.B. für Immobilienkredit) einsetzbar</li>
					<li class="dialog__inner-item">Flexible Auszahlung als Rente, Einmalzahlung oder beides</li>
				</ul>

				<p class="dialog__inner-text mb-0">Nachteile:</p>
				<ul class="dialog__inner-list">
					<li class="dialog__inner-item">Beiträge sind nicht Absetzbar</li>
					<li class="dialog__inner-item">Wird z.B. bei Arbeitslosigkeit dem Vermögen zugerechnet</li>
				</ul>
			</div>
		</div>
		<button @click="$emit('handlerClose')" class="action-button">Verstanden</button>
	</div>
</template>

<script>
export default {
	name: 'DialogPensionProvision',
	emits: ['handlerClose']
}
</script>

<style scoped>
	.dialog {
		padding: 32px;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
	}
	.dialog__text {
		margin-bottom: 36px;
	}
	.dialog__inner {
		margin-bottom: 36px;
	}
	.dialog__inner:first-child {
		border-right: 1px solid #9e9e9e;
	}
	@media screen and (max-width: 991px) {
		.dialog__inner:first-child {
			border-right: none;
		}
}
	.dialog__inner-title {
		font-weight: 700;
		font-size: 16px;
	}
	.dialog__inner-list {
		padding-left: 15px;
		list-style: none;
	}
	.dialog__inner-item {
		position: relative;
		padding-left: 10px;
	}
	.dialog__inner-item::before {
		content: '';
		position: absolute;
		top: 9px;
		left: 0;
		width: 4px;
		height: 4px;
		background: #000;
		border-radius: 50%;
	}
	.action-button {
		display: block;
    background: #3C94FC;
    font-weight: 600;
    font-size: 22px;
    color: #FFFFFF;
    border: 0 none;
    border-radius: 12px;
    cursor: pointer;
    padding: 10px 5px;
    max-width: 373px;
		width: 100%;
		margin: 0 auto;
    height: 64px;
    line-height: 24px;
}

.action-button:hover,
.action-button:focus {
  background-color: #311B92
}
</style>