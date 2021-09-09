import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";

import { WithPinnedTasks } from "./TaskList.stories";

it("renders pinned task at the start of the list", () => {
  const div = document.createElement("div");
  // storys args
  ReactDOM.render(<WithPinnedTasks />, div);

  // 고정된 항목이 처음으로 렌더링 되도록
  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)]'
  );
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
