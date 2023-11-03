<template>
	<div class="radio">
		<input
			type="radio"
			class="radio__input"
			:id="id"
			:name="name"
			:value="value"
			:checked="checked"
			@input="handleClick($event)"
		>
		<label :for="id" class="radio__label mb-0">{{ value }}</label>
	</div>
</template>

<script>
export default {
	name: 'RadioButtonComponent',
	props: {
		name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
	},
	methods: {
		handleClick(event) {
      this.$emit('update:checkedValue', event.target.value)
    }
	}
}
</script>

<style scoped>

	.radio__input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.radio__input + .radio__label {
		padding: 6px 5px 6px 30px;
		display: inline-block;
		position: relative;
	}
	.radio__input:checked + .radio__label {
		color: #3C94FC;
	}
	.radio__input + .radio__label::before {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		width: 24px;
		height: 24px;
		border: 2px solid #1C1B1F;
		border-radius: 50%;
	}

	.radio__input:checked + .radio__label::before {
		background: #3C94FC;
		box-shadow: inset 0 0 0 3.5px white;
		border-color: #3C94FC;
	}


	.radio__label {
		color: #1C1B1F;
		cursor: pointer;
	}

</style>