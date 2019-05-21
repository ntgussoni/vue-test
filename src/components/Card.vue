<template>
  <div class="card" v-bind:class="{ flipped: flipCard }">
    <div class="container front padder">
      <div class="inner">
        <div class="logo">
          <span class="yellow" />
          <span class="red" />
          <div class="clearfix" />
        </div>

        <p class="card-number">{{ cardNumber }}</p>
        <div class="left_container">
          <span class="label">Card holder</span>
          <p class="info">{{ name }}</p>
        </div>
        <div class="right_container">
          <span class="label">Expires</span>
          <p class="info">{{ expiration }}</p>
        </div>
      </div>
    </div>

    <div class="container back">
      <div class="inner">
        <span class="band" />
        <span class="secret">306</span>

        <div class="logo">
          <span class="yellow" />
          <span class="red" />
          <div class="clearfix" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cardNumber", "name", "expiration", "flipCard"]
};
</script>

<style lang="scss" scoped>
@import "@/styles/pop-mixin.scss";

.card {
  width: 100%;
  padding-top: 59.35%;
  -webkit-perspective: 600px;
  -moz-perspective: 600px;
  perspective: 600px;

  .clearfix {
    clear: both;
  }

  &.flipped {
    .container {
      &.front {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        transform: rotateY(180deg);
      }

      &.back {
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        transform: rotateY(0deg);

        .secret {
          @include pop-mixin(1.2);
        }
      }
    }
  }

  .container {
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background-color: $primary;
    box-shadow: 1px 1px #aaa3a3;
    background: linear-gradient(135deg, $secondary 0%, $primary 100%);
    -webkit-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;

    &.padder {
      padding: 16px;
    }

    .logo {
      display: flex;
      flex-flow: row-reverse;

      span {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        float: left;

        &.red {
          background-color: #e9001b;
          opacity: 0.8;
        }
        &.yellow {
          margin-left: -20px;
          background-color: #f79f19;
          opacity: 0.8;
        }
      }
    }

    &.front {
      -webkit-transform: rotateY(0deg);
      -moz-transform: rotateY(0deg);
      transform: rotateY(0deg);

      .inner {
        position: relative;
        width: 100%;

        .left_container {
          position: absolute;
          bottom: 0;
          left: 0;
        }

        .right_container {
          position: absolute;
          bottom: 0;
          right: 0;
        }

        .card-number {
          font-family: "Space Mono", monospace;
          display: block;
          width: 100%;
          height: 1rem;
          word-spacing: 4px;
          font-size: 2rem;
          letter-spacing: 2px;
          color: #fff;
          text-align: center;
          position: absolute;
          top: 40%;

          @include media(">=phone") {
            font-size: 0.8rem;
          }
          @include media(">=tablet") {
            font-size: 1.8rem;
          }
        }

        .label {
          font-family: "Space Mono", monospace;
          font-size: 1rem;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 1px;

          @include media("<tablet") {
            font-size: 0.8rem;
          }
        }

        .info {
          font-family: "Space Mono", monospace;
          margin-bottom: 0;
          margin-top: 5px;
          font-size: 1rem;
          height: 1rem;
          line-height: 18px;
          color: #fff;
          letter-spacing: 1px;
          text-transform: uppercase;

          @include media("<tablet") {
            font-size: 0.8rem;
          }
        }
      }
    }

    &.back {
      -webkit-transform: rotateY(-180deg);
      -moz-transform: rotateY(-180deg);
      transform: rotateY(-180deg);

      .inner {
        flex: 1;
        padding-top: 32px;

        .band {
          display: block;
          position: absolute;
          top: 20%;
          width: 100%;
          height: 16%;
          background-color: #303030;
        }

        .logo {
          position: absolute;
          bottom: 16px;
          right: 16px;
        }

        .secret {
          display: block;
          padding: 4px 8px;
          border-radius: 4px;
          text-align: right;

          position: absolute;
          top: 44%;
          width: 100%;
          height: 16%;

          background: repeating-linear-gradient(
            45deg,
            #ededed,
            #ededed 5px,
            #f9f9f9 5px,
            #f9f9f9 10px
          );
        }
      }
    }
  }
}
</style>
