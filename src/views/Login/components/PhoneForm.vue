<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useGetPhoneCode, useSaveUser } from '../composable/phone'
import type { PhoneFormType } from '@/types/login'

const formSize = ref('default')
const phoneFormRef = ref<FormInstance>()
const phoneForm = reactive<PhoneFormType>({
  phone: '',
  smscode: '',
  imgcode: '',
  savePhone: false
})
const { disabled, time, getcode } = useGetPhoneCode(phoneForm)
const { phonelogin, getPhoneDate } = useSaveUser(phoneForm)

const rules = reactive<FormRules<PhoneFormType>>({
  phone: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
  smscode: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
  imgcode: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      phonelogin()
    } else {
      console.log('error submit!', fields)
    }
  })
}
getPhoneDate()
</script>
<template>
  <div class="phone">
    <el-form
      ref="phoneFormRef"
      :model="phoneForm"
      :rules="rules"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item prop="phone">
        <el-input size="large" v-model="phoneForm.phone" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="smscode">
        <div class="form-item">
          <el-input size="large" v-model="phoneForm.smscode" placeholder="请输入短信验证码" />
          <el-button type="primary" size="large" :disabled="disabled" @click="getcode">{{
            time <= 0 ? '获取验证码' : `${time}秒后重新获取`
          }}</el-button>
        </div>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="form-item">
          <el-input size="large" v-model="phoneForm.imgcode" placeholder="请输入图片验证码" />
          <img src="@/assets/code.png" alt="" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="phoneForm.savePhone" label="记住用户名" />
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="danger" round @click="submitForm(phoneFormRef)">
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
