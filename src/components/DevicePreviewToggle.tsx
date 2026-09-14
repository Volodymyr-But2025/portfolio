"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";
import styles from "./ProjectCard.module.css";

export type PreviewDevice = "mobile" | "tablet" | "desktop";

type DevicePreviewToggleProps = {
  value: PreviewDevice;
  onChange: (device: PreviewDevice) => void;
  groupLabel: string;
  labels: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

const OPTIONS: {
  id: PreviewDevice;
  Icon: typeof Smartphone;
}[] = [
  { id: "mobile", Icon: Smartphone },
  { id: "tablet", Icon: Tablet },
  { id: "desktop", Icon: Monitor },
];

export function DevicePreviewToggle({
  value,
  onChange,
  groupLabel,
  labels,
}: DevicePreviewToggleProps) {
  return (
    <div
      className={styles.deviceToggle}
      role="radiogroup"
      aria-label={groupLabel}
    >
      {OPTIONS.map(({ id, Icon }) => {
        const label = labels[id];
        const checked = value === id;

        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={checked}
            aria-label={label}
            title={label}
            className={`${styles.iconButton} ${checked ? styles.deviceActive : ""}`}
            onClick={() => onChange(id)}
          >
            <Icon size={14} aria-hidden />
          </button>
        );
      })}
    </div>
  );
}

export const DEVICE_WIDTHS: Record<PreviewDevice, number> = {
  mobile: 500,
  tablet: 1000,
  desktop: 1500,
};
