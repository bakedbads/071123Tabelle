"use strict";

//Variablen
let a = 214;
let summe = 0;
let durchschnitt = 0;
const months = ["Jänner", "Februar", "März", "April", "Mai", "Juni"];

//Tabelle erstellen
document.write("<table>")

/*For-loop , geht von 1 bis 6 (inklusive 6).
for as long as i <= 6, increase i by 1*/
document.write("<tr class='header'><th>Haushaltsbuch</th><th>Ausgabe</th></tr>")
for (let i=1; i<=6; i++) {
    document.write("<tr><td>"+months[i-1]+"</td>"+"<td>"+a+"</td></tr>");
    summe=summe+a;
    a=a+34;
}

//eine leere Zeile
document.write("<tr><td></td></tr>")

//summe & durchschnitt
document.write("<tr><td><b>Summe</b></td>"+"<td>"+summe+"</td></tr>")

durchschnitt = summe / 6;
document.write("<tr><td><b>Durchschnitt</b></td>"+"<td>"+durchschnitt+"</td></tr>")
document.write("</table>")