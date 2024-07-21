<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row justify-content-center mb-5">
      <div class="col-12 col-md-8">
        <h4 class="mb-4">訂單查詢</h4>
        <div class="input-group">
          <input type="text" class="form-control"
          placeholder="請輸入訂單號碼" v-model="orderId">
          <button class="btn btn-secondary" type="button"
          @click="getOrder">
            查詢
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center g-5"
    v-if="order !== null && order.id">
      <div class="col-12 col-md-6 col-xl-5">
        <h4 class="mb-3">訂單明細</h4>
        <ul v-for="item in order.products" :key="item.id"
        class="list-unstyled row border-bottom mb-0 py-3 align-items-center
        bg-white">
          <li class="col-5 col-xl-3">
            <div class="position-relative w-100 pt-100">
              <img :src="item.product.imageUrl" alt="商品圖片"
              class="object-fit-cover position-absolute top-0
              bottom-0 start-0 end-0 w-100 h-100">
            </div>
          </li>
          <li class="col-7 col-xl-9">
            <div class="row flex-column flex-xl-row
            justify-content-md-between">
              <p class="col-xl-6 fw-bold mb-xl-0">{{ item.product.title }}</p>
              <p class="col-xl-2 mb-xl-0">x{{ item.qty }}</p>
              <p class="col-xl-4 ps-auto mb-0 text-xl-end">
                NT${{ $filters.currency(item.final_total) }}
              </p>
            </div>
          </li>
        </ul>
        <ul v-if="couponCode" class="list-unstyled row bg-white pt-3">
          <li class="col text-success text-end">已使用優惠券</li>
          <li class="col text-success text-end">{{ couponCode }}</li>
        </ul>
        <ul class="list-unstyled row bg-white py-3">
          <li class="col text-end">總計</li>
          <li class="col text-end">NT${{ $filters.currency(order.total) }}</li>
        </ul>
      </div>
      <div class="col-12 col-md-6 col-xl-5">
        <h4 class="mb-3">寄貨資料</h4>
        <table class="table mb-4">
          <tbody>
            <tr>
              <th>訂單編號</th>
              <td>{{ order.id }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>收件人姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td v-if="!order.is_paid" class="text-danger">尚未付款</td>
              <td v-else class="text-success">付款完成</td>
            </tr>
          </tbody>
        </table>
        <div class="row flex-column flex-md-row" v-if="!order.is_paid">
          <div class="col col-md-7">
            <i class="fa-solid fa-triangle-exclamation me-2"></i>
            <span class=" fw-semibold">訂單尚未完成!</span>
            <p>確認訂單內容後，點擊付款即完成訂單!</p>
          </div>
          <div class="col col-md-5 text-end">
            <button class="btn btn-danger" type="button"
            @click="payOrder">
              確認付款
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="warning">
      <p class="h5 text-center text-danger">
        {{ warning }}
      </p>
    </div>
  </div>
</template>

<script>
import fullpathMixin from '@/mixins/fullpathMixin';

export default {
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      couponCode: '',
      isLoading: false,
      warning: '',
    };
  },
  mixins: [fullpathMixin],
  methods: {
    getOrder() {
      this.order = {};
      this.isLoading = true;
      const id = this.orderId.trim();
      if (id) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
        this.$http.get(url)
          .then((res) => {
            this.isLoading = false;
            if (res.data.order) {
              this.order = res.data.order;
              const key = Object.keys(res.data.order.products)[0];
              const productKey = res.data.order.products[key];
              if (productKey.coupon) {
                this.couponCode = productKey.coupon.code;
              }
            } else {
              this.order = res.data.order;
              this.warning = '訂單號碼輸入錯誤，請重新輸入';
            }
          });
      } else {
        this.isLoading = false;
        this.warning = '訂單號碼不可為空，請輸入訂單號碼';
      }
    },
    payOrder() {
      this.isLoading = true;
      const id = this.orderId.trim();
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`;
      this.$http.post(url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.getOrder();
            const messageTitle = '付款成功';
            this.emitter.emit('push-message', {
              style: 'success',
              title: messageTitle,
              content: '已完成付款',
            });
          }
        });
    },
  },
};
</script>
