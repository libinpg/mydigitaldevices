export type Capability = {
  name: string;
  evidence: string;
  confidence: "confirmed" | "partial";
};

export const capabilities: Capability[] = [
  {
    name: "Mobile use",
    evidence: "Two smartphones are documented in the collection.",
    confidence: "confirmed"
  },
  {
    name: "Portable macOS work",
    evidence: "MacBook Air M1 with 8GB memory is documented.",
    confidence: "confirmed"
  },
  {
    name: "Windows laptop work",
    evidence: "ThinkPad T480s, ASUS 天选 and Dell G3 are documented.",
    confidence: "confirmed"
  },
  {
    name: "Desktop gaming / GPU workloads",
    evidence: "The custom desktop is documented with an RX 7600 and i3-13100F.",
    confidence: "confirmed"
  },
  {
    name: "External desktop display",
    evidence: "Huawei MateView SE and Dell U2422HX displays are documented.",
    confidence: "confirmed"
  },
  {
    name: "Portable XR display",
    evidence: "VITURE Pro 2 XR glasses are documented.",
    confidence: "confirmed"
  },
  {
    name: "Heavy professional rendering / ML",
    evidence: "No workload target or measured performance requirement has been recorded yet.",
    confidence: "partial"
  }
];

export const upgradeQuestions = [
  "What task is currently blocked or noticeably impaired?",
  "How often has the problem occurred in the last 30 days?",
  "Can the issue be measured (memory pressure, render time, frame rate, battery health, storage pressure)?",
  "Can a lower-cost change solve it first (software, storage cleanup, RAM/SSD upgrade, battery service, peripherals)?",
  "What specific improvement would make the purchase successful?",
  "Would you still want the device after a 30-day cooling-off period?"
];
