export type Capability = {
  name: string;
  evidence: string;
  confidence: "confirmed" | "partial";
};

export const capabilities: Capability[] = [
  {
    name: "移动使用",
    evidence: "当前设备档案中记录了两部智能手机。",
    confidence: "confirmed"
  },
  {
    name: "便携 macOS 工作",
    evidence: "已记录一台配备 8GB 内存的 MacBook Air M1。",
    confidence: "confirmed"
  },
  {
    name: "Windows 笔记本工作",
    evidence: "已记录 ThinkPad T480s、ASUS 天选和 Dell G3。",
    confidence: "confirmed"
  },
  {
    name: "台式机游戏 / GPU 工作负载",
    evidence: "自组装台式机已记录 RX 7600 和 Intel Core i3-13100F。",
    confidence: "confirmed"
  },
  {
    name: "桌面外接显示",
    evidence: "已记录 Huawei MateView SE 和 Dell U2422HX 两台显示器。",
    confidence: "confirmed"
  },
  {
    name: "便携 XR 显示",
    evidence: "已记录 VITURE Pro 2 XR 眼镜。",
    confidence: "confirmed"
  },
  {
    name: "重度专业渲染 / 机器学习",
    evidence: "目前还没有记录具体工作负载目标或实测性能要求，因此无法判断是否满足。",
    confidence: "partial"
  }
];

export const upgradeQuestions = [
  "目前具体是哪项任务被设备性能阻碍，或体验明显受影响？",
  "过去 30 天里，这个问题实际出现了多少次？",
  "这个问题能否量化，例如内存压力、渲染耗时、帧率、电池健康度或存储空间不足？",
  "是否可以先通过成本更低的方式解决，例如软件调整、清理存储、升级内存/硬盘、更换电池或更换外设？",
  "如果购买新设备，什么具体改善才算这次升级真正成功？",
  "经过 30 天冷静期后，你是否仍然希望购买这台设备？"
];
