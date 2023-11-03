<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpenProp: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.isOpenProp,
    };
  },
  watch: {
    isOpenProp(newVal) {
      this.isOpen = newVal;
    },
  },
  methods: {
    closeModal() {
      this.isOpen = false;
      this.$emit("update:isOpenProp", false);
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
}
</style>