// MÓDULO 4: UTILIDADES
// ==========================================
const numeroALetras = (num) => {
  if (!num) return "";
  const unidades = [
    "",
    "UN",
    "DOS",
    "TRES",
    "CUATRO",
    "CINCO",
    "SEIS",
    "SIETE",
    "OCHO",
    "NUEVE",
  ];
  const diez = [
    "DIEZ",
    "ONCE",
    "DOCE",
    "TRECE",
    "CATORCE",
    "QUINCE",
    "DIECISEIS",
    "DIECISIETE",
    "DIECIOCHO",
    "DIECINUEVE",
  ];
  const decenas = [
    "",
    "DIEZ",
    "VEINTE",
    "TREINTA",
    "CUARENTA",
    "CINCUENTA",
    "SESENTA",
    "SETENTA",
    "OCHENTA",
    "NOVENTA",
  ];
  const centenas = [
    "",
    "CIENTO",
    "DOSCIENTOS",
    "TRESCIENTOS",
    "CUATROCIENTOS",
    "QUINIENTOS",
    "SEISCIENTOS",
    "SETECIENTOS",
    "OCHOCIENTOS",
    "NOVECIENTOS",
  ];
  let n = parseFloat(num);
  if (n === 0) return "CERO";
  let out = "";
  if (n >= 1000000) {
    out +=
      numeroALetras(Math.floor(n / 1000000)) +
      (Math.floor(n / 1000000) === 1 ? " MILLÓN " : " MILLONES ");
    n %= 1000000;
  }
  if (n >= 1000) {
    if (Math.floor(n / 1000) === 1) out += "MIL ";
    else out += numeroALetras(Math.floor(n / 1000)) + " MIL ";
    n %= 1000;
  }
  if (n >= 100) {
    if (n === 100) return out + "CIEN";
    out += centenas[Math.floor(n / 100)] + " ";
    n %= 100;
  }
  if (n >= 20) {
    out += decenas[Math.floor(n / 10)];
    n %= 10;
    if (n > 0) out += " Y ";
  } else if (n >= 10) {
    out += diez[n - 10];
    n = 0;
  }
  if (n > 0) out += unidades[n];
  return out.trim();
};

// Exportar tabla de pacientes como CSV (sin datos sensibles -- confidencialidad Res.1843/2025 Art.19)
const exportPatientTable = (patients, compName) => {
  const headers = [
    "N°",
    "Nombre_Trabajador",
    "Tipo_Doc",
    "Documento",
    "Sexo",
    "Edad",
    "Cargo",
    "Empresa",
    "EPS",
    "ARL",
    "Tipo_Examen",
    "Enfasis",
    "Fecha_Examen",
  ];
  const rows = patients.map((p, idx) => [
    idx + 1,
    p.nombres || "N/R",
    p.docTipo || "CC",
    p.docNumero || "N/R",
    p.genero === "Masculino"
      ? "M"
      : p.genero === "Femenino"
        ? "F"
        : p.genero || "N/R",
    p.edad || "N/R",
    p.cargo || "N/R",
    p.empresaNombre || "N/R",
    p.eps || "N/R",
    p.arl || "N/R",
    p.tipoExamen || "N/R",
    p.enfasisExamen || "N/R",
    p.fechaExamen || "N/R",
  ]);
  const csv = [headers, ...rows]
    .map((r) =>
      r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","),
    )
    .join("\n");
  // Descarga CSV sin createObjectURL (compatible sandbox)
  const b64csv = btoa(unescape(encodeURIComponent("\uFEFF" + csv)));
  const a = document.createElement("a");
  a.href = "data:text/csv;charset=utf-8;base64," + b64csv;
  a.download = `Trabajadores_${compName.replace(/\s/g, "_")}_${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export { numeroALetras, exportPatientTable };
