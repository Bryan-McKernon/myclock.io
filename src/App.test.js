import { render } from "@testing-library/react";
import TheClock from "./TheClock/TheClock";

test("Time Check", () => {
  render(
    <TheClock ClockOnClickEvent={() => {}} ClockStyle={{ fontSize: "12px" }} />
  );
});
