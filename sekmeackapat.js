<!DOCTYPE html>
<html>
<body>
<h4>Sekme Açma Kapama</h4>
<button onclick="sekmeac()">Siteyi Yeni Sekmede Açma</button>
<button onclick="sekmekapat()">Sekmeyi Kapat</button>
<script>
let sekmelerim;
function sekmeac() {
  sekmelerim = window.open("https://musaoylek.blogspot.com", "_blank", "width=700, height=1500");
}
function sekmekapat() {
  sekmelerim.close();
}
</script>
</body>
</html>
