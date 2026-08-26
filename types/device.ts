export type DeviceCategory = "phone" | "laptop" | "desktop" | "monitor" | "xr";

export type DeviceStatus = "active" | "spare" | "retired";

export type DeviceSpec = {
  label: string;
  value: string;
};

export type Device = {
  id: string;
  name: string;
  brand: string;
  category: DeviceCategory;
  status: DeviceStatus;
  summary: string;
  specs: DeviceSpec[];
  tags?: string[];
};
