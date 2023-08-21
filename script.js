alert(
  "Dzień dobry, zrobiłem tylko wersję webową, pracowałem drugi raz z bootstrapem, więc jestem w trakcie opanowania jak działa ten framework. Zazwyczaj robię takie strony od zera na czystym HTML/CSS po metodyce BEM bez żadnych CSS-frameworków. Ale jestem otwarty do nowych wezwań i z chęcią nauczy się czegoś nowego"
);

const gallery = Macy({
  container: ".gallery",
  mobileFirst: true,
  columns: 3,
  margin: 43,
});

$(".btn-showmore").on("click", () => {
  $(".overlay").toggleClass("show");
  $(".section-gallery").toggleClass("show");
});
