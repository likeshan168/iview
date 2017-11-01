// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default DatePicker;

export interface DatePicker extends Vue {
  /**
   * 显示类型，可选值为 date、daterange、datetime、datetimerange、year、month'|'默认值date
   */
  'type': 'date' | 'daterange' | 'datetime' | 'datetimerange' | 'year' | 'month';
  /**
   * 日期，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式，点击右边查看
   * 注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用
   */
  value: Date;
  /**
   * 展示的日期格式
   * date | daterange: yyyy-MM-dd
   * datetime | datetimerange：yyyy-MM-dd HH:mm:ss
   * year：yyyy
   * month：yyyy-MM
   */
  format: Date;
  /**
   * 日期选择器出现的位置，
   * 可选值为top,top-start,top-end,
   * bottom,bottom-start,bottom-end,
   * left,left-start,left-end,
   * right,right-start,right-end
   * 默认值bottom-start
   */
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  /**
   * 占位文本默认值空
   */
  placeholder: string;
  /**
   * 选择器额外配置，比如不可选日期与快捷选项，具体项详见下表
   */
  options: object;
  /**
   * 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭,
   * 默认值false
   */
  confirm: boolean;
  /**
   * 手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。
   * 建议配合 slot 及 confirm 和相关事件一起使用
   * 默认值null
   */
  open: boolean;
  /**
   * 尺寸，可选值为large、small、default或者不设置
   */
  size: string;
  /**
   * 是否禁用选择器,默认值false
   */
  disabled: boolean;
  /**
   * 是否显示清除按钮,默认值true
   */
  clearable: boolean;
  /**
   * 完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效,默认值false
   */
  readonly: boolean;
  /**
   * 文本框是否可以输入，只在没有使用 slot 时有效,默认值true
   */
  editable: boolean;
  /**
   * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，
   * 建议添加此属性，它将不受父级样式影响，从而达到更好的效果,
   * 默认值false
   */
  transfer: boolean;
  /**
   * 给表单元素设置 id，详见 Form 用法。
   */
  'element-id': string;
  /**
   * 日期发生变化时触发	已经格式化后的日期，比如 2016-01-01
   */
  'on-change': (value: string) => void;
  /**
   * 弹出日历和关闭日历时触发
   */
  'on-open-change': (value: boolean) => void;
  /**
   * 在 confirm 模式下有效，点击确定按钮时触发
   */
  'on-ok': () => void;
  /**
   * 在 confirm 模式或 clearable = true 时有效，在清空日期时触发
   */
  'on-clear': () => void;
}

export interface DatePickerOptions extends Vue {
  /**
   * 设置快捷选项，每项内容：
   * text：显示的文案
   * value: 返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调
   * onClick: 点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用
   */
  shortcuts: string[] | (() => void)[];
  /**
   * 设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天
   */
  disabledDate: () => boolean;
}