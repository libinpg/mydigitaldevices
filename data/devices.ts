import type { Device } from "@/types/device";

export const devices: Device[] = [
  {
    id: "redmi-k80-ultra",
    name: "REDMI K80 Ultra",
    brand: "Xiaomi / REDMI",
    category: "phone",
    status: "active",
    summary: "2025 REDMI performance flagship with a high-refresh display and large battery",
    specs: [
      { label: "Chip", value: "MediaTek Dimensity 9400+" },
      { label: "Storage", value: "512GB" },
      { label: "Display", value: "6.83-inch 1.5K OLED, up to 144Hz" },
      { label: "Battery", value: "7410mAh" },
      { label: "Charging", value: "100W wired" },
      { label: "Main camera", value: "50MP" }
    ],
    tags: ["Android", "Phone", "144Hz", "5G"]
  },
  {
    id: "huawei-p30-pro",
    name: "Huawei P30 Pro",
    brand: "Huawei",
    category: "phone",
    status: "spare",
    summary: "2019 Huawei photography flagship built around the Leica quad-camera system",
    specs: [
      { label: "Chip", value: "Huawei Kirin 980" },
      { label: "Display", value: "6.47-inch OLED, 2340 × 1080" },
      { label: "Memory options", value: "6GB / 8GB" },
      { label: "Storage options", value: "128GB / 256GB" },
      { label: "Battery", value: "4200mAh" },
      { label: "Rear cameras", value: "40MP + 20MP + 8MP + ToF" }
    ],
    tags: ["Android", "Phone", "Leica", "P Series"]
  },
  {
    id: "macbook-air-m1",
    name: "MacBook Air M1",
    brand: "Apple",
    category: "laptop",
    status: "active",
    summary: "Fanless 2020 MacBook Air powered by the first-generation Apple M1 chip",
    specs: [
      { label: "Chip", value: "Apple M1, 8-core CPU" },
      { label: "Memory", value: "8GB unified memory" },
      { label: "Display", value: "13.3-inch Retina, 2560 × 1600" },
      { label: "Brightness", value: "400 nits" },
      { label: "Ports", value: "2 × Thunderbolt / USB 4 + 3.5mm" },
      { label: "Weight", value: "1.29 kg" }
    ],
    tags: ["macOS", "Laptop", "Apple Silicon", "Fanless"]
  },
  {
    id: "thinkpad-t480s",
    name: "ThinkPad T480s",
    brand: "Lenovo",
    category: "laptop",
    status: "active",
    summary: "Thin-and-light ThinkPad business laptop from the T-series generation",
    specs: [
      { label: "Memory", value: "16GB" },
      { label: "Graphics", value: "Integrated Intel graphics" },
      { label: "Display family", value: "14-inch" },
      { label: "CPU platform", value: "7th / 8th Gen Intel Core options" },
      { label: "Battery", value: "57Wh integrated" },
      { label: "Charging", value: "USB-C, Rapid Charge supported" }
    ],
    tags: ["ThinkPad", "Laptop", "Business", "USB-C"]
  },
  {
    id: "asus-tuf-rtx2060",
    name: "ASUS 天选",
    brand: "ASUS",
    category: "laptop",
    status: "active",
    summary: "ASUS gaming laptop configured with RTX 2060 graphics",
    specs: [
      { label: "Memory", value: "16GB" },
      { label: "GPU", value: "NVIDIA GeForce RTX 2060" }
    ],
    tags: ["Gaming", "Laptop", "GeForce RTX"]
  },
  {
    id: "dell-g3",
    name: "Dell G3",
    brand: "Dell",
    category: "laptop",
    status: "spare",
    summary: "Dell G-series gaming laptop configured with GTX 1050 graphics",
    specs: [
      { label: "Memory", value: "12GB" },
      { label: "GPU", value: "NVIDIA GeForce GTX 1050" },
      { label: "GPU memory", value: "4GB GDDR5 on G3 3579 GTX 1050 configuration" },
      { label: "Platform note", value: "Exact G3 submodel still to be confirmed" }
    ],
    tags: ["Gaming", "Laptop", "GeForce GTX"]
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
      { label: "HDD", value: "512GB" },
      { label: "Total storage", value: "1TB" }
    ],
    tags: ["Desktop", "Custom Build", "Radeon"]
  },
  {
    id: "huawei-mateview-se",
    name: "Huawei MateView SE",
    brand: "Huawei",
    category: "monitor",
    status: "active",
    summary: "23.8-inch Full HD IPS desktop monitor with wide color coverage",
    specs: [
      { label: "Display", value: "23.8-inch IPS LCD" },
      { label: "Resolution", value: "1920 × 1080" },
      { label: "Brightness", value: "250 nits typical" },
      { label: "Color gamut", value: "90% P3 / 100% sRGB" },
      { label: "Contrast", value: "1000:1" },
      { label: "Ports", value: "HDMI + DisplayPort" }
    ],
    tags: ["Display", "IPS", "1080p"]
  },
  {
    id: "dell-u2422hx",
    name: "Dell UltraSharp U2422HX",
    brand: "Dell",
    category: "monitor",
    status: "active",
    summary: "23.8-inch UltraSharp productivity monitor with an integrated USB hub",
    specs: [
      { label: "Display", value: "23.8-inch IPS" },
      { label: "Resolution", value: "1920 × 1080 @ 60Hz" },
      { label: "Brightness", value: "250 cd/m²" },
      { label: "Color", value: "100% sRGB / 100% Rec.709 / 85% DCI-P3" },
      { label: "Hub", value: "USB 3.2 Gen 2 / USB-C hub" },
      { label: "Video ports", value: "HDMI + DisplayPort 1.4 + DP out (MST)" }
    ],
    tags: ["Display", "UltraSharp", "IPS", "USB Hub"]
  },
  {
    id: "viture-pro-2",
    name: "VITURE Pro 2",
    brand: "VITURE",
    category: "xr",
    status: "active",
    summary: "2026 XR glasses built around Sony Micro-OLED panels for portable big-screen viewing",
    specs: [
      { label: "Display", value: "Sony Micro-OLED" },
      { label: "Resolution", value: "1920 × 1080 per eye" },
      { label: "Refresh rate", value: "Up to 120Hz" },
      { label: "Field of view", value: "50°" },
      { label: "Peak perceived brightness", value: "1600 nits" },
      { label: "Weight", value: "63g" },
      { label: "Connection", value: "USB-C" },
      { label: "Diopter adjustment", value: "Down to -5.0D" }
    ],
    tags: ["XR", "Wearable", "Micro-OLED", "120Hz"]
  }
];

export const categoryLabels = {
  phone: "Phones",
  laptop: "Laptops",
  desktop: "Desktop",
  monitor: "Displays",
  xr: "XR"
} as const;
