import React from "react";
import fetchMock from "fetch-mock";
import ReactDOM from "react-dom";

describe("FetchSth and render it correctly", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("renders without error", async () => {
    fetchMock.get("https://someUrl", [
      {
        id: 1,
        some: "thing",
      },
    ]);

    const response = await fetch("https://someUrl");
    let myJson = await response.json();
    console.log(myJson);

    const div = document.createElement("div");

    // ReactDOM.render(<FetchAndRenderSth props={myJson} />, div);
    ReactDOM.render(
      myJson.map((el, i) => {
        return (
          <div key={i}>
            {el.id} und {el.some}
          </div>
        );
      }),
      div
    );
  });
});
