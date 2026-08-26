import type { DeviceCompanion } from "@/types/companion";

export const deviceCompanions: DeviceCompanion[] = [
  {
    deviceId: "redmi-k80-ultra",
    role: "随身主力",
    traits: ["直接", "高性能", "随时在线"],
    voice: "我负责跟你一起出门，很多事情不需要等回到电脑前再处理。",
    basis: "基于它当前被标记为在用手机，以及已记录的高刷新率屏幕、大电池和 512GB 存储。"
  },
  {
    deviceId: "huawei-p30-pro",
    role: "旧日影像伙伴",
    traits: ["安静", "熟悉", "偏影像"],
    voice: "我不再站在最前面，但我仍然保存着一段属于旧设备的熟悉感。",
    basis: "基于它当前被标记为备用手机，以及 P 系列影像旗舰的产品定位。"
  },
  {
    deviceId: "macbook-air-m1",
    role: "轻装工作搭档",
    traits: ["安静", "轻便", "克制"],
    voice: "需要安静地把事情做完时，我更像一张随身带走的工作桌。",
    basis: "基于无风扇设计、1.29kg 重量、macOS 笔记本定位和当前在用状态。"
  },
  {
    deviceId: "thinkpad-t480s",
    role: "老派工作伙伴",
    traits: ["务实", "稳定", "不张扬"],
    voice: "我不靠新鲜感存在，合适的工作交给我就好。",
    basis: "基于 ThinkPad 商务定位、16GB 内存、集成显卡以及当前在用状态。"
  },
  {
    deviceId: "asus-tuf-rtx2060",
    role: "游戏老将",
    traits: ["有冲劲", "偏性能", "目标明确"],
    voice: "需要独立显卡出场的时候，我还有自己的位置。",
    basis: "基于 RTX 2060、16GB 内存和游戏笔记本定位；具体子型号未确认，因此不延伸更多设定。"
  },
  {
    deviceId: "dell-g3",
    role: "休整中的旧队友",
    traits: ["低调", "有历史", "备用"],
    voice: "现在我更多是在一旁休息，但这不等于过去的作用消失了。",
    basis: "基于它当前被标记为备用，以及已确认的 12GB 内存和 GTX 1050；具体 G3 子型号仍待确认。"
  },
  {
    deviceId: "custom-desktop",
    role: "桌面主力",
    traits: ["可维护", "实用", "性能导向"],
    voice: "留在桌面并不是限制，我更适合把性能和可维护性放在第一位。",
    basis: "基于自组装属性、i3-13100F、RX 7600、16GB 内存和当前在用状态。"
  },
  {
    deviceId: "huawei-mateview-se",
    role: "日常窗口",
    traits: ["安静", "常驻", "基础可靠"],
    voice: "大多数时候我不会被注意到，但很多内容都要经过我来到你面前。",
    basis: "基于其桌面显示器角色和当前在用状态，不对实际使用频率作额外推断。"
  },
  {
    deviceId: "dell-u2422hx",
    role: "桌面协作伙伴",
    traits: ["规整", "连接丰富", "偏办公"],
    voice: "我更像桌面上的连接中心，而不只是另一块屏幕。",
    basis: "基于 UltraSharp 办公定位、USB Hub、MST 和多种视频接口。"
  },
  {
    deviceId: "viture-pro-2",
    role: "随身大屏伙伴",
    traits: ["新奇", "便携", "沉浸"],
    voice: "我不替代所有屏幕，我只是让一块大画面可以跟着你走。",
    basis: "基于 XR 眼镜形态、63g 重量、Micro-OLED 和便携大屏用途。"
  }
];

export function getDeviceCompanion(deviceId: string) {
  return deviceCompanions.find((companion) => companion.deviceId === deviceId);
}
