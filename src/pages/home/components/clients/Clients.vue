<template>
    <div class="content">
      <div class="tag-list">
        <div class="loop-slider" :style="{ '--duration': `5000ms`, '--direction': 'normal' }">
          <div className='inner'>
            <Tag v-for="name in names" :key="name" :link="name" />
            <Tag v-for="name in names" :key="name" :link="name" />
            <Tag v-for="name in names" :key="name" :link="name" />
            <Tag v-for="name in names" :key="name" :link="name" />
          </div>
        </div>
        <!-- <div class="fade"></div> -->
      </div>
    </div>
</template>

<script>
import Tag from '@/components/tag/Tag.vue';
const ROWS = 5;

export default {
  data() {
    return {
      names: ['minex.png', 'safeexpress.png', 'pix.png', 'neco.png', 'jsw.png', 'elkem.png', 'eicher.png', 'caterpillar.png', 'asianpaints.png'],
      rows: Array.from({ length: ROWS }),
    };
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    shuffle(arr) {
      return [...arr].sort(() => 0.5 - Math.random());
    },
  },
  components: {
    Tag
  },
};

</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.content {
  z-index: 1;
  height: 30vh;
  background: linear-gradient(to bottom, #DFE5E9 60%, #c2cfd7 100%);
  overflow: hidden;
}

.tag-list {
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
}

  .inner {
    display: flex;
    align-items: center;
    width: fit-content;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-duration: 29000ms;
  }

.fade {
  pointer-events: none;
  background: linear-gradient(90deg, #c2cfd7, transparent 30%, transparent 70%, #c2cfd7);
  position: absolute;
  inset: 0;
}

@keyframes loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
