const navHash = (id) => {
  let section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
  section = null;
  return;
};

export default navHash;
