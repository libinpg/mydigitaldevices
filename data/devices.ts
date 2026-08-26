import type { Device } from "@/types/device";

export const devices: Device[] = [
  {
    id: "redmi-k80-ultra",
    name: "REDMI K80 Ultra",
    brand: "Xiaomi / REDMI",
    category: "phone",
    status: "active",
    summary: "2025 年发布的 REDMI 性能旗舰手机，配备高刷新率屏幕和大容量电池。",
    specs: [
      { label: "芯片", value: "MediaTek Dimensity 9400+" },
      { label: "存储", value: "512GB" },
      { label: "屏幕", value: "6.83 英寸 1.5K OLED，最高 144Hz" },
      { label: "电池", value: "7410mAh" },
      { label: "充电", value: "100W 有线" },
      { label: "主摄", value: "50MP" }
    ],
    tags: ["Android", "手机", "144Hz", "5G"]
  },
  {
    id: "huawei-p30-pro",
    name: "Huawei P30 Pro",
    brand: "Huawei",
    category: "phone",
    status: "spare",
    summary: "2019 年华为 P 系列影像旗舰，核心特点之一是 Leica 四摄系统。",
    specs: [
      { label: "芯片", value: "Huawei Kirin 980" },
      { label: "屏幕", value: "6.47 英寸 OLED，2340 × 1080" },
      { label: "内存选项", value: "6GB / 8GB" },
      { label: "存储选项", value: "128GB / 256GB" },
      { label: "电池", value: "4200mAh" },
      { label: "后置摄像头", value: "40MP + 20MP + 8MP + ToF" }
    ],
    tags: ["Android", "手机", "Leica", "P 系列"]
  },
  {
    id: "macbook-air-m1",
    name: "MacBook Air M1",
    brand: "Apple",
    category: "laptop",
    status: "active",
    summary: "2020 款无风扇 MacBook Air，搭载第一代 Apple M1 芯片。",
    specs: [
      { label: "芯片", value: "Apple M1，8 核 CPU" },
      { label: "内存", value: "8GB 统一内存" },
      { label: "屏幕", value: "13.3 英寸 Retina，2560 × 1600" },
      { label: "亮度", value: "400 尼特" },
      { label: "接口", value: "2 × Thunderbolt / USB 4 + 3.5mm" },
      { label: "重量", value: "1.29 kg" }
    ],
    tags: ["macOS", "笔记本", "Apple Silicon", "无风扇"]
  },
  {
    id: "thinkpad-t480s",
    name: "ThinkPad T480s",
    brand: "Lenovo",
    category: "laptop",
    status: "active",
    summary: "ThinkPad T 系列的轻薄商务笔记本。",
    specs: [
      { label: "内存", value: "16GB" },
      { label: "图形", value: "Intel 集成显卡" },
      { label: "屏幕尺寸系列", value: "14 英寸" },
      { label: "处理器平台", value: "第 7 / 8 代 Intel Core 可选" },
      { label: "电池", value: "57Wh 内置电池" },
      { label: "充电", value: "USB-C，支持 Rapid Charge" }
    ],
    tags: ["ThinkPad", "笔记本", "商务", "USB-C"]
  },
  {
    id: "asus-tuf-rtx2060",
    name: "ASUS 天选",
    brand: "ASUS",
    category: "laptop",
    status: "active",
    summary: "配备 NVIDIA GeForce RTX 2060 的华硕游戏笔记本。",
    specs: [
      { label: "内存", value: "16GB" },
      { label: "GPU", value: "NVIDIA GeForce RTX 2060" }
    ],
    tags: ["游戏", "笔记本", "GeForce RTX"]
  },
  {
    id: "dell-g3",
    name: "Dell G3",
    brand: "Dell",
    category: "laptop",
    status: "spare",
    summary: "配备 GTX 1050 的 Dell G 系列游戏笔记本。",
    specs: [
      { label: "内存", value: "12GB" },
      { label: "GPU", value: "NVIDIA GeForce GTX 1050" },
      { label: "显存", value: "G3 3579 的 GTX 1050 配置为 4GB GDDR5" },
      { label: "型号备注", value: "你的具体 G3 子型号仍待确认" }
    ],
    tags: ["游戏", "笔记本", "GeForce GTX"]
  },
  {
    id: "custom-desktop",
    name: "自组装台式机",
    brand: "自组装",
    category: "desktop",
    status: "active",
    summary: "用于日常使用和游戏的自组装台式电脑。",
    specs: [
      { label: "CPU", value: "Intel Core i3-13100F" },
      { label: "内存", value: "16GB" },
      { label: "GPU", value: "AMD Radeon RX 7600" },
      { label: "SSD", value: "512GB" },
      { label: "HDD", value: "512GB" },
      { label: "总存储", value: "1TB" }
    ],
    tags: ["台式机", "自组装", "Radeon"]
  },
  {
    id: "huawei-mateview-se",
    name: "Huawei MateView SE",
    brand: "Huawei",
    category: "monitor",
    status: "active",
    summary: "23.8 英寸 Full HD IPS 桌面显示器，覆盖较广色域。",
    specs: [
      { label: "面板", value: "23.8 英寸 IPS LCD" },
      { label: "分辨率", value: "1920 × 1080" },
      { label: "亮度", value: "典型 250 尼特" },
      { label: "色域", value: "90% P3 / 100% sRGB" },
      { label: "对比度", value: "1000:1" },
      { label: "接口", value: "HDMI + DisplayPort" }
    ],
    tags: ["显示器", "IPS", "1080p"]
  },
  {
    id: "dell-u2422hx",
    name: "Dell UltraSharp U2422HX",
    brand: "Dell",
    category: "monitor",
    status: "active",
    summary: "23.8 英寸 UltraSharp 办公显示器，带集成 USB Hub。",
    specs: [
      { label: "面板", value: "23.8 英寸 IPS" },
      { label: "分辨率", value: "1920 × 1080 @ 60Hz" },
      { label: "亮度", value: "250 cd/m²" },
      { label: "色彩", value: "100% sRGB / 100% Rec.709 / 85% DCI-P3" },
      { label: "Hub", value: "USB 3.2 Gen 2 / USB-C Hub" },
      { label: "视频接口", value: "HDMI + DisplayPort 1.4 + DP 输出（MST）" }
    ],
    tags: ["显示器", "UltraSharp", "IPS", "USB Hub"]
  },
  {
    id: "viture-pro-2",
    name: "VITURE Pro 2",
    brand: "VITURE",
    category: "xr",
    status: "active",
    summary: "使用 Sony Micro-OLED 面板的便携 XR 眼镜，用于大屏显示体验。",
    specs: [
      { label: "显示面板", value: "Sony Micro-OLED" },
      { label: "分辨率", value: "单眼 1920 × 1080" },
      { label: "刷新率", value: "最高 120Hz" },
      { label: "视场角", value: "50°" },
      { label: "峰值感知亮度", value: "1600 尼特" },
      { label: "重量", value: "63g" },
      { label: "连接", value: "USB-C" },
      { label: "屈光度调节", value: "最低 -5.0D" }
    ],
    tags: ["XR", "穿戴设备", "Micro-OLED", "120Hz"]
  }
];

export const categoryLabels = {
  phone: "手机",
  laptop: "笔记本电脑",
  desktop: "台式电脑",
  monitor: "显示器",
  xr: "XR 设备"
} as const;
