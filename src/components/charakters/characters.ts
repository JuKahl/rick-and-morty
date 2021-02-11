import { createElement } from "../../utils/createElement";
import { Character } from "../../utils/api";

export function createCard({
  imgSrc,
  name,
  status,
  species,
  origin,
}: Character) {
  return createElement("div", {
    className: "card",
    childs: [
      createElement("img", {
        className: "card__portrait",
        src: imgSrc,
      }),
      createElement("h2", {
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
