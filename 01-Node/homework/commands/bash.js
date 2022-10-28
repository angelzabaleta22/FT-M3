process.stdout.write("prompt > ");

process.stdin.on("data", function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea
  process.stdout.write("Tu escribiste " + cmd);
  process.stdout.write("\nprompt > ");
});
