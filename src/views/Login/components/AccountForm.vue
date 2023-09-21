<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useSaveUser } from '../composable/accound'
import type { AccoundFormType } from '@/types/login'
import { useGetImgCode } from '../composable'
import { useRouter } from 'vue-router'
const router = useRouter()

const formSize = ref('default')
const accoundFormRef = ref<FormInstance>()
const accoundForm = reactive<AccoundFormType>({
  username: '',
  password: '',
  imgcode: '',
  saveUsername: false,
  savePass: false
})
const { getAccoundDate, submitForm } = useSaveUser(accoundForm, router)
const { imgCodeSrc, getImgCode } = useGetImgCode()
getAccoundDate()

const rules = reactive<FormRules<AccoundFormType>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  imgcode: [{ required: true, message: '请输入图片验证码', trigger: 'blur' }]
})
</script>
<template>
  <div class="accound">
    <el-form
      ref="accoundFormRef"
      :model="accoundForm"
      :rules="rules"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item prop="username">
        <el-input
          size="large"
          prefix-icon="UserFilled"
          v-model="accoundForm.username"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          size="large"
          prefix-icon="Lock"
          type="password"
          v-model="accoundForm.password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="form-item">
          <el-input
            size="large"
            prefix-icon="PictureRounded"
            v-model="accoundForm.imgcode"
            placeholder="请输入图片验证码"
          />
          <img :src="imgCodeSrc" alt="" @click="getImgCode" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="accoundForm.saveUsername" label="记住用户名" />
        <el-checkbox v-model="accoundForm.savePass" label="记住密码" />
        <router-link style="margin-left: 30px" to="/resetpwd">忘记密码</router-link>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="danger" round @click="submitForm(accoundFormRef)">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss" scoped>
.form-item {
  width: 100%;
  display: flex;

  .el-input {
    margin-right: 10px;
  }

  .el-button {
    width: 100px;
    font-size: 12px;
  }

  img {
    width: 100px;
    cursor: pointer;
  }
}

.btn {
  width: 100%;
}
</style>
