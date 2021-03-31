window.onload = () => {
  const thumbs = document.querySelector(".thumbs");
  const body = document.querySelector("body");

  thumbs.onmouseover = e => {
    Array.from(thumbs.children).forEach(thumb => {
      if (thumb.id <= e.target.id) {
        thumb.classList.remove("violet");
        thumb.classList.add("red");
      }
    });
  };
  
  thumbs.onmouseout = e => {
    Array.from(thumbs.children).forEach(thumb => {
      if (thumb.id <= e.target.id) {
        thumb.classList.replace("red", "violet");
      }
    });
  };
  
  const SOLID = true;
  const OUTLINE = false;

  thumbs.onclick = e => {
    convertTo(OUTLINE, thumbs.children.length);
    convertTo(SOLID, e.target.id);
  };

  body.onclick = e => {
    if (e.target.tagName === "I") return;
    convertTo(OUTLINE, thumbs.children.length);
  };

  function convertTo(solid, targetID) {
    classFrom = solid ? "far" : "fas";
    classTo = solid ? "fas" : "far";

    Array.from(thumbs.children).forEach(thumb => {
      if (thumb.id <= targetID) {
        thumb.classList.replace(classFrom, classTo);
      }
    });
  }

};
