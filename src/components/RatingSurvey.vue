<template>
  <base-card>
    <div class="star">
      <img src="@/assets/icon-star.svg" alt="" />
    </div>
    <h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
    <form @submit.prevent="subRating">
      <div class="rating">
        <input
          type="radio"
          id="rating1"
          v-model="rate"
          name="rating"
          value="1"
        />
        <label for="rating1">1</label>
        <input
          type="radio"
          id="rating2"
          v-model="rate"
          name="rating"
          value="2"
        />
        <label for="rating2">2</label>
        <input
          type="radio"
          id="rating3"
          v-model="rate"
          name="rating"
          value="3"
        />
        <label for="rating3">3</label>
        <input
          type="radio"
          id="rating4"
          v-model="rate"
          name="rating"
          value="4"
        />
        <label for="rating4">4</label>
        <input
          type="radio"
          id="rating5"
          v-model="rate"
          name="rating"
          value="5"
        />
        <label for="rating5">5</label>
      </div>
      <button>SUBMIT</button>
      <p v-if="valid" class="error">Please enter your rating.</p>
    </form>
  </base-card>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  name: "RatingSurvey",
  components: {
    BaseCard,
  },
  data() {
    return {
      rate: "",
      valid:false
    };
  },
  methods: {
    subRating() {
      if (this.rate !== "") {
        const res = this.rate;
        this.$router.push({
          name: "response",
          params: {
            rating: res,
          },
        });
      }else{
        return this.valid = !this.valid
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
.star {
  @include circle;
}
h1 {
  color: $color-white;
  font-size: $font-size-l;
  margin: 0;
  text-align: left;
  font-weight: 700;
}
p {
  @include paragraph;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.rating {
  display: flex;
  justify-content: space-between;
  input {
    appearance: none;
    opacity: 0;
    position: fixed;
    width: 0;
    transition: $transition;
  }
  input[type="radio"]:focus + label {
    color: $color-white;
    background-color: $color-light-grey;
  }
  label {
    @include circle;
    color: $color-light-grey;
    font-weight: 700;
    cursor: pointer;
    transition: $transition;
    &:hover {
      color: $color-white;
      background-color: $color-orange;
    }
  }
}
button {
  width: 100%;
  background-color: $color-orange;
  color: $color-white;
  border-radius: 99px;
  padding: 15px 5px;
  border: 0;
  font-weight: 700;
  white-space: 5px;
  letter-spacing: 2px;
  font-family: inherit;
  cursor: pointer;
  transition: $transition;
  &:hover {
    color: $color-orange;
    background-color: $color-white;
  }
}
.error{
   @include paragraph;
   color:red;
}
</style>
