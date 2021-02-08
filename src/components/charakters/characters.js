import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, status, origin, species }) {
  return createElement("div", {
    className: "card",
    children: [
      createElement("img", {
        className: "card__portrait",
        src: imgSrc,
      }),
      createElement("H2", {
        className: "card__name",
        innerText: name,
      }),
      createElement("p", {
        className: "card__status",
        innerText: `${status === "Alive" ? "♥️" : "✝︎"} ${status}`,
      }),
      createElement("p", {
        className: "card__origin",
        innerText: origin.name,
      }),
      createElement("p", {
        className: "card__species",
        innerText: species,
      }),
    ],
  });
}
