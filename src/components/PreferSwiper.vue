<template>
  <swiper :navigation="true" :modules="modules"
    class="products-list prefer-swiper mySwiper"
    :slidesPerView="2"
    :spaceBetween="20"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :loop="true"
    :option="swiperOption"
    :breakpoints="{
      768: {slidesPerView: 3},
      992: {slidesPerView: 4},
    }"
    >
    <swiper-slide v-for="item in preferProducts" :key="item.id">
      <div class="card product-card mx-auto h-100"
        @click.stop="getProduct(item.id)">
        <div class="overflow-hidden position-relative">
          <div class="more-text text-dark text-center bg-secondary py-1
            position-absolute bottom-0">
            查看更多
          </div>
          <span class="sale badge bg-pink position-absolute text-white
          top-0 end-0 rounded-0 fs-6"
            v-if="item.origin_price != item.price">
            sale
          </span>
          <img :src="item.imageUrl" class="card-img-top object-fit-cover w-100"
            alt="圖片">
        </div>
        <div class="card-body">
          <p class="fs-14 mb-1 text-start">#{{ item.category }}</p>
          <h5 class="card-title text-start">{{ item.title }}</h5>
          <div class="d-flex justify-content-between align-items-center">
            <p class="price fw-semibold mb-0 text-pink p-0" v-if="item.price">
              NT${{ $filters.currency(item.price) }}
            </p>
            <p class="price fw-semibold mb-0 text-pink p-0" v-else>
              NT${{ $filters.currency(item.origin_price) }}
            </p>
            <del v-if="item.origin_price != item.price">
              NT${{ $filters.currency(item.origin_price) }}
            </del>
          </div>
        </div>
        <div class="card-foot p-0">
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-info rounded-0 py-2"
              type="button"
              @click.stop="addtoCart(item)"
              :disabled="item.id === this.btnLoading">
              <div class="spinner-border spinner-border-sm"
                role="status"
                v-if="item.id === this.btnLoading">
                <span class="visually-hidden">Loading...</span>
              </div>
              <i class="fa-solid fa-cart-shopping me-1"
                v-else></i>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>

</template>

<script>
// Import Swiper Vue.js components
import getCartMixin from '@/mixins/getCartMixin';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  inject: ['emitter'],
  mixins: [getCartMixin],
  data() {
    return {
      btnLoading: '',
      modules: [Autoplay, Navigation, Pagination],
      preferProducts: [],
      favorited: JSON.parse(localStorage.getItem('favorite')) || [],
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          clickable: true,
        },
        breakpoints: {
          1: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides: false,
          },
        },
      },
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url)
        .then((res) => {
          this.preferProducts = res.data.products;
        });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
