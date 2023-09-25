<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const store = useUserStore()
const handleCommand = (command: string) => {
  console.log('command', command)
}
</script>
<template>
  <div class="tool">
    <el-icon> <Search /> </el-icon>
    <el-icon> <BellFilled /> </el-icon>
    <el-icon> <FullScreen /> </el-icon>
    <el-icon> <ScaleToOriginal /> </el-icon>
    <el-icon> <Sunny /> </el-icon>
    <el-icon> <Moon /> </el-icon>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        {{ store.userinfo?.name }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="info">个人信息</el-dropdown-item>
          <el-dropdown-item command="password">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<style lang="scss" scoped>
.tool {
  display: flex;
  align-items: center;
  .el-icon {
    margin: 10px;
  }
  .el-icon:hover {
    color: var(--el-color-primary);
  }
}
.el-dropdown {
  outline: none;
  cursor: pointer;
}
.el-dropdown-link {
  color: #ccc;
  display: flex;
  align-items: center;
  .el-avatar {
    margin-right: 10px;
  }
}
.el-dropdown-link:hover {
  color: var(--el-color-primary);
}
</style>
