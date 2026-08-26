import type { Device } from "@/types/device";

export const devices: Device[] = [
  {
    id: "redmi-k80-ultra",
    name: "Redmi K80 Ultra",
    brand: "Xiaomi / Redmi",
    category: "phone",
    status: "active",
    summary: "512GB storage smartphone",
    specs: [{ label: "Storage", value: "512GB" }],
    tags: ["Android", "Phone"]
  },
  {
    id: "huawei-p30-pro",
    name: "Huawei P30 Pro",
    brand: "Huawei",
    category: "phone",
    status: "spare",
    summary: "Huawei P-series flagship phone",
    specs: [],
    tags: ["Android", "Phone"]
  },
  {
    id: "macbook-air-m1",
    name: "MacBook Air M1",
    brand: "Apple",
    category: "laptop",
    status: "active",
    summary: "Lightweight Apple Silicon laptop",
    specs: [
      { label: "Chip", value: "Apple M1" },
      { label: "Memory", value: "8GB" }
    ],
    tags: ["macOS", "Laptop"]
  },
  {
    id: "thinkpad-t480s",
    name: "ThinkPad T480s",
    brand: "Lenovo",
    category: "laptop",
    status: "active",
    summary: "Classic business ThinkPad",
    specs: [
      { label: "Memory", value: "16GB" },
      { label: "Graphics", value: "Integrated graphics" }
    ],
    tags: ["ThinkPad", "Laptop"]
  },
  {
    id: "asus-tuf-rtx2060",
    name: "ASUS 天选",
    brand: "ASUS",
    category: "laptop",
    status: "active",
    summary: "Gaming laptop with RTX graphics",
    specs: [
      { label: "Memory", value: "16GB" },
      { label: "GPU", value: "NVIDIA GeForce RTX 2060" }
    ],
    tags: ["Gaming", "Laptop"]
  },
  {
    id: "dell-g3",
    name: "Dell G3",
    brand: "Dell",
    category: "laptop",
    status: "spare",
    summary: "Gaming laptop with GTX graphics",
    specs: [
      { label: "Memory", value: "12GB" },
      { label: "GPU", value: "NVIDIA GeForce GTX 1050" }
    ],
    tags: ["Gaming", "Laptop"]
  },
  {
    id: "custom-desktop",
    name: "Custom Desktop PC",
    brand: "Custom Build",
    category: "desktop",
    status: "active",
    summary: "Self-built desktop for daily use and gaming",
    specs: [
      { label: "CPU", value: "Intel Core i3-13100F" },
      { label: "Memory", value: "16GB" },
      { label: "GPU", value: "AMD Radeon RX 7600" },
      { label: "SSD", value: "512GB" },
      { label: "HDD", value: "512GB" }
    ],
    tags: ["Desktop", "Custom Build"]
  },
  {
    id: "huawei-mateview-se",
    name: "Huawei MateView SE",
    brand: "Huawei",
    category: "monitor",
    status: "active",
    summary: "Desktop monitor",
    specs: [],
    tags: ["Display"]
  },
  {
    id: "dell-u2422hx",
    name: "Dell U2422HX",
    brand: "Dell",
    category: "monitor",
    status: "active",
    summary: "UltraSharp series desktop monitor",
    specs: [],
    tags: ["Display", "UltraSharp"]
  },
  {
    id: "viture-pro-2",
    name: "VITURE Pro 2",
    brand: "VITURE",
    category: "xr",
    status: "active",
    summary: "XR glasses for portable large-screen viewing",
    specs: [],
    tags: ["XR", "Wearable"]
  }
];

export const categoryLabels = {
  phone: "Phones",
  laptop: "Laptops",
  desktop: "Desktop",
  monitor: "Displays",
  xr: "XR"
} as const;
