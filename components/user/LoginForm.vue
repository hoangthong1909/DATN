<template>
  <div
    class="layer-auth flex items-center justify-center"
    :style="{ background: `url(${backgroundImage})` }"
  >
    <div class="layer-auth-form layer-content flex items-center justify-center">
      <a-form-model
        ref="createForm"
        :model="form"
        :rules="rules"
        class="layer-form auth-form"
      >
        <div class="flex flex-col items-center justify-center layer-form-row">
          <div class="auth-logo mb-5">
            <!--            <img src="@/assets/images/auth/logo.png" alt="" />-->
          </div>
          <div class="auth-title">
            {{ $t('auth.sign_in') }}
          </div>
          <div class="auth-description">
            {{ $t('auth.sign_in_description') }}
          </div>
        </div>
        <div class="flex layer-form-row gap-4 mt-5">
          <a-form-model-item class="flex-1" prop="username">
            <label for="" class="form-label">
              {{ $t('auth.username') }}
              <span class="required">*</span>
            </label>
            <a-input
              ref="username"
              v-model="form.username"
              :max-length="150"
              name="username"
              :placeholder="$t('auth.placeholder.username')"
            >
            </a-input>
          </a-form-model-item>
        </div>
        <div class="flex layer-form-row gap-4">
          <a-form-model-item class="flex-1" prop="password">
            <label for="" class="form-label">
              {{ $t('auth.password') }}
              <span class="required">*</span>
            </label>
            <a-input-password
              ref="password"
              v-model="form.password"
              :max-length="150"
              name="password"
              :placeholder="$t('auth.placeholder.password')"
            >
            </a-input-password>
          </a-form-model-item>
        </div>
        <div class="flex justify-end layer-form-row gap-4 mb-10">
          <router-link :to="localePath(`/user/forgot-password`)">
            <div class="flex items-center justify-center">
              <span class="color-blue-1">
                {{ $t('auth.forgot_password') }}?</span
              >
            </div>
          </router-link>
        </div>
        <div class="flex flex-col layer-form-row gap-4">
          <a-button
            type="primary"
            class="auth-btn bg-red-600"
            @click="handleSignIn"
          >
            {{ $t('auth.sign_in') }}
          </a-button>
          <a-button class="auth-btn">
            <router-link :to="localePath(`/user/sign-up`)">
              <div class="flex items-center justify-center">
                <span class=""> {{ $t('auth.sign_up_account') }}</span>
              </div>
            </router-link>
          </a-button>

          <div class="mt-3 mb-3 w-100 text-center">
            {{ $t('auth.social_account') }}
          </div>

          <div class="w-100 flex items-center justify-center gap-4">
            <div class="social-items cursor-pointer">
              <img src="~/assets/images/auth/fb.png" alt="" />
            </div>
            <div class="social-items cursor-pointer">
              <img src="~/assets/images/auth/gg.png" alt="" />
            </div>
          </div>
        </div>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import backgroundImage from '~/assets/images/auth/bg2.png'

export default {
  name: 'LoginForm',
  layout: 'user',
  requiredProject: false,
  data() {
    return {
      backgroundImage,
      rules: {
        username: [
          {
            required: true,
            message: this.$t('required_message'),
            trigger: ['change', 'blur'],
          },
        ],
        password: [
          {
            required: true,
            message: this.$t('required_message'),
            trigger: ['change', 'blur'],
          },
        ],
      },
      form: {},
    }
  },
  // auth: false,
  mounted() {
    // this.$auth.login()
  },
  methods: {
    handleSignIn() {
      this.$refs.createForm.validate((valid) => {
        if (valid) {
          // this.apiCreate()
          this.$notification.success({
            message: 'Đăng nhập thành công',
            placement: 'bottomRight',
          })
        } else {
          return false
        }
      })
    },
  },
}
</script>
