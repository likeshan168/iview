// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/iview/iview
import Vue from "vue";

export default Notice;

export interface Notice {
  /**
   * 打开
   */
  open(config: NoticeConfig): Function;
  /**
   * 信息
   */
  info(config: NoticeConfig): Function;
  /**
   * 成功
   */
  success(config: NoticeConfig): Function;
  /**
   * 警告
   */
  warning(config: NoticeConfig): Function;
  /**
   * 错误
   */
  error(config: NoticeConfig): Function;
  /**
   * 全局配置
   */
  config(options: NoticeGlobalConfig): Function;
  /**
   * 全局关闭某个通知
   */
  close(key: string): Function;
  /**
   * 全局销毁
   */
  destroy(): Function;
}

export interface NoticeConfig {
  /**
   * 通知提醒的标题
   */
  title: string;
  /**
   * 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式
   */
  desc?: string;
  /**
   * 自动关闭的延时，单位秒，不关闭可以写 0 默认4.5
   */
  duration?: number;
  /**
   * 当前通知的唯一标识
   */
  key?: string;
  /**
   * 关闭时的回调
   */
  onClose?: Function;
}

export interface NoticeGlobalConfig {
  /**
   * 通知组件距离顶端的距离，单位像素 默认24
   */
  top: number;
  /**
   * 默认自动关闭的延时，单位秒 默认4.5
   */
  duration: number;
}