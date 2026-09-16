import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { DevicePreviewToggle } from "./DevicePreviewToggle";
import { render, screen } from "@/test/render";

describe("DevicePreviewToggle", () => {
  it("renders a radiogroup and calls onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <DevicePreviewToggle
        value="desktop"
        onChange={onChange}
        groupLabel="Device preview"
        labels={{
          mobile: "Phone",
          tablet: "Tablet",
          desktop: "Desktop",
        }}
      />,
    );

    expect(
      screen.getByRole("radiogroup", { name: "Device preview" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("radio", { name: "Phone" }));
    expect(onChange).toHaveBeenCalledWith("mobile");

    await user.click(screen.getByRole("radio", { name: "Tablet" }));
    expect(onChange).toHaveBeenCalledWith("tablet");

    await user.click(screen.getByRole("radio", { name: "Desktop" }));
    expect(onChange).toHaveBeenCalledWith("desktop");
  });
});
