function showMe(value) {
	let div = document.querySelector(".div1");
	div.innerHTML = "";
	value
		.split("")
		.reverse()
		.forEach((e) => {
			switch (e.toLowerCase()) {
				case "a":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/a.png">');
					break;
				case "b":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/b.png">');
					break;
				case "c":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/c.png">');
					break;
				case "d":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/d.png">');
					break;
				case "f":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/f.png">');
					break;
				case "g":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/g.png">');
					break;
				case "h":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/h.png">');
					break;
				case "i":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/i.png">');
					break;
				case "j":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/j.png">');
					break;
				case "k":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/k.png">');
					break;
				case "l":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/l.png">');
					break;
				case "m":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/m.png">');
					break;
				case "n":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/n.png">');
					break;
				case "o":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/o.png">');
					break;
				case "p":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/p.png">');
					break;
				case "q":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/q.png">');
					break;
				case "r":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/r.png">');
					break;
				case "s":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/s.png">');
					break;
				case "t":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/t.png">');
					break;
				case "u":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/u.png">');
					break;
				case "v":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/v.png">');
					break;
				case "w":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/w.png">');
					break;
				case "x":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/x.png">');
					break;
				case "y":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/y.png">');
					break;
				case "z":
					div.insertAdjacentHTML("afterBegin", '<img src = "/alphabet/z.png">');
					break;
			}
		});
}
