<template>
  <va-card
    class="horizontal-bars"
    :title="$t('progressBars.horizontal')"
  >
    <div class="row">
      <div class="flex md4 xs12">
        <va-progress-bar :value="value / 3"/>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar :value="bufferValues.value" :buffer="bufferValues.buffer"/>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar indeterminate/>
      </div>
    </div>
    <div class="row">
      <div class="flex md4 xs12">
        <va-progress-bar :value="value * 2 / 3">66%</va-progress-bar>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar
          :value="bufferValues.value"
          :buffer="bufferValues.buffer"
        >Buffering
        </va-progress-bar>
      </div>
      <div class="flex md4 xs12">
        <va-progress-bar indeterminate>Loading...</va-progress-bar>
      </div>
    </div>
  </va-card>
</template>

<script>
export default {
  name: 'horizontal-bars',
  data () {
    return {
      value: 0,
      bufferValues: {
        value: 0,
        buffer: 0
      }
    }
  },
  mounted () {
    this.animateValue()
    this.animateBufferValues()
  },
  methods: {
    animateValue () {
      setTimeout(() => {
        this.value = 100
      })
    },
    animateBufferValues () {
      const interval = setInterval(() => {
        this.bufferValues.value += 2 + Math.floor(Math.random() * 2)
        this.bufferValues.buffer += 2 + Math.floor(Math.random() * 4)

        if (this.bufferValues.value >= 100) {
          clearInterval(interval)
        }
      }, 400)
    }
  }
}
</script>
