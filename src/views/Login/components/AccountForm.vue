<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useSaveUser } from '../composable/accound'
import type { AccoundFormType } from '@/types/login'

const formSize = ref('default')
const accoundFormRef = ref<FormInstance>()
const accoundForm = reactive<AccoundFormType>({
  username: '',
  password: '',
  imgcode: '',
  saveUsername: false,
  savePass: false
})
const { accoundlogin, getAccoundDate } = useSaveUser(accoundForm)

const rules = reactive<FormRules<AccoundFormType>>({
  username: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
  imgcode: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      accoundlogin()
    } else {
      console.log('error submit!', fields)
    }
  })
}
getAccoundDate()
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
        <el-input size="large" v-model="accoundForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="large" v-model="accoundForm.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="form-item">
          <el-input size="large" v-model="accoundForm.imgcode" placeholder="请输入图片验证码" />
          <img src="@/assets/code.png" alt="" />
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
