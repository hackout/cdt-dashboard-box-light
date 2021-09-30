/**
*  大数据表盘盒子-light
*/
import Vue from "vue"
import cdt_dashboard_box from './index.vue'

const plugin = {
	install(){
		Vue.component('cdt-dashboard-box', cdt_dashboard_box)
	},
	cdt_dashboard_box: cdt_dashboard_box
}

export default plugin
export const install = plugin.install