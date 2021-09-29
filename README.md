## 大数据盒子

自用款，无其他作用

### 基础用法
长按激活拖拽动作
```
<template>
	<view>
		<cdt-dashboard-box :height="999" type="light">
			你的内容
		</cdt-dashboard-box>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>
```

### Props


| 参数                         | 说明            | 类型                        | 默认值                                               |
| ----------------------------|---------------  | -------
| height                       | 高度      |Number:String                       | 100% |
| type                  | 类型,可选light,machine      |String                       |light |
### Events

| 事件名                         | 说明            | 回调参数                                               |
| ----------------------------|---------------  | -------
| started                       | 初始化数据完成      | Object 返回当前ref信息 |
