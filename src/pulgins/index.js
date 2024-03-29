import Vue from 'vue'

import { 
  Button,
  Tabbar,
  TabbarItem,
  DatetimePicker,
  Icon,
  Calendar,
  Dialog,
  Cell,
  CellGroup,
  Field,
  CheckboxGroup,
  Checkbox,
  Toast,
  Loading,
  Locale
} from 'vant'

// 引入英文语言包
import zhTW from 'vant/es/locale/lang/zh-TW';

Locale.use('zh-TW', zhTW);

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(DatetimePicker)
Vue.use(Icon)
Vue.use(Calendar)
Vue.use(Dialog)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Field)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Toast)
Vue.use(Loading)