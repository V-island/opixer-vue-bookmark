<template>
  <transition name="vodal-fade">
  <div v-show="show" tabindex="-1" :style="style" :class="['vodal', className]" @keyup.esc="onEsc">
    <div class="vodal-mask" v-if="mask" @click="$emit('hide')" />
    <transition :name="`vodal-${animation}`">
      <div class="vodal-dialog" v-show="show" :style="dialogStyle">
        <slot></slot>
      </div>
    </transition>
    </div>
  </div>
  </transition>
</template>

<script>
export default {

  name: 'book-modal',

  props: {
    show: {
        type: Boolean,
        required: true
    },
    width: {
        type: Number,
        default: 400
    },
    height: {
        type: Number,
        default: 240
    },
    duration: {
        type: Number,
        default: 300
    },
    measure: {
        type: String,
        default: 'px'
    },
    animation: {
        type: String,
        default: 'zoom'
    },
    mask: {
        type: Boolean,
        default: true
    },
    closeButton: {
        type: Boolean,
        default: true
    },
    className: {
        type: String,
        default: ''
    }
  },
  computed: {
    style() {
        return {
            animationDuration: `${this.duration}ms`,
            webkitAnimationDuration: `${this.duration}ms`
        };
    },
    dialogStyle() {
        return {
            ...this.style,
            width: `${this.width + this.measure}`,
            height: `${this.height + this.measure}`
        }
    }
  },
  methods: {
    onEsc() {
        this.show && this.$emit('hide');
    }
  },
  watch: {
    show(show) {
        show && this.$nextTick(() => {
            this.$el.focus();
        })
    }
  }
};
</script>
<style lang="less" scoped>
	/* -- common -- */
	.vodal,
	.vodal-mask {
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 100;
	}
	.vodal {
	    position: fixed;
	}
	.vodal-mask {
	    position: absolute;
	    background: rgba(0, 0, 0, .12);
	}
	.vodal-dialog {
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    margin: auto;
	    z-index: 101;
	    padding: 32px;
	    background: #fff;
	    border-radius: 3px;
	    box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.4);

	}
	.vodal-close {
	    position: absolute;
	    cursor: pointer;
	    top: 16px;
	    right: 16px;
	    width: 16px;
	    height: 16px;
	}
	.vodal-close:before,
	.vodal-close:after {
	    position: absolute;
	    content: '';
	    height: 2px;
	    width: 100%;
	    top: 50%;
	    left: 0;
	    margin-top: -1px;
	    background: #999;
	    border-radius: 100%;
	    -webkit-transition: background .2s;
	    transition: background .2s;
	}
	.vodal-close:before {
	    -webkit-transform: rotate(45deg);
	    transform: rotate(45deg);
	}
	.vodal-close:after {
	    -webkit-transform: rotate(-45deg);
	    transform: rotate(-45deg);
	}
	.vodal-close:hover:before,
	.vodal-close:hover:after {
	    background: #333;
	}
	/* -- fade -- */
	@-webkit-keyframes vodal-fade-enter {
	    from {
	        opacity: 0;
	    }
	}
	@keyframes vodal-fade-enter {
	    from {
	        opacity: 0;
	    }
	}
	.vodal-fade-enter-active {
	    -webkit-animation: vodal-fade-enter both ease-in;
	    animation: vodal-fade-enter both ease-in;
	}
	@-webkit-keyframes vodal-fade-leave {
	    to {
	        opacity: 0
	    }
	}
	@keyframes vodal-fade-leave {
	    to {
	        opacity: 0
	    }
	}
	.vodal-fade-leave-active {
	    -webkit-animation: vodal-fade-leave both ease-out;
	    animation: vodal-fade-leave both ease-out;
	}
	/* -- rotate -- */
	@-webkit-keyframes vodal-rotate-enter {
	    from {
	        -webkit-transform: rotate3d(0, 0, 1, -180deg) scale3d(.3, .3, .3);
	        transform: rotate3d(0, 0, 1, -180deg) scale3d(.3, .3, .3);
	    }
	}
	@keyframes vodal-rotate-enter {
	    from {
	        -webkit-transform: rotate3d(0, 0, 1, -180deg) scale3d(.3, .3, .3);
	        transform: rotate3d(0, 0, 1, -180deg) scale3d(.3, .3, .3);
	    }
	}
	.vodal-rotate-enter-active {
	    -webkit-animation: vodal-rotate-enter both;
	    animation: vodal-rotate-enter both;
	    -webkit-transform-origin: center;
	    transform-origin: center;
	}
	@-webkit-keyframes vodal-rotate-leave {
	    to {
	        -webkit-transform: rotate3d(0, 0, 1, 180deg) scale3d(.3, .3, .3);
	        transform: rotate3d(0, 0, 1, 180deg) scale3d(.3, .3, .3);
	    }
	}
	@keyframes vodal-rotate-leave {
	    to {
	        -webkit-transform: rotate3d(0, 0, 1, 180deg) scale3d(.3, .3, .3);
	        transform: rotate3d(0, 0, 1, 180deg) scale3d(.3, .3, .3);
	    }
	}
	.vodal-rotate-leave-active {
	    -webkit-animation: vodal-rotate-leave both;
	    animation: vodal-rotate-leave both;
	    -webkit-transform-origin: center;
	    transform-origin: center;
	}
</style>