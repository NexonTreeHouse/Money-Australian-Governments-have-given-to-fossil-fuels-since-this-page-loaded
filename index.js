const digit = document.querySelector(".digit");
const words = document.querySelector(".words");
const time = document.querySelector(".time");
const share = document.querySelector(".share-btn");

const timeOnLoad = new Date().getTime();

setInterval(() => update(), 1);

const update = async () => {
	let timeSince = (new Date().getTime() - timeOnLoad) / 1000;

	let amount = (timeSince * (19686 / 60)).toFixed(2);

	digit.textContent = `$${amount}`;

	let splitAmount = amount.split(".");

	words.textContent = `(${toWords(splitAmount[0])} Dollars and ${toWords(
		splitAmount[1]
	)} Cents)`;

	time.textContent = `${Math.round(timeSince / 60)} minutes`;
};

function copy() {
	const textHolder = document.createElement("textarea");
	textHolder.value = window.location;
	document.body.appendChild(textHolder);
	textHolder.select();
	document.execCommand("copy");
	document.body.removeChild(textHolder);
}

share.addEventListener("click", () => {
	copy();
	share.textContent = "Copied";
});

// prettier-ignore
{
	var a=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],b=["Hundred","Thousand","Hundred and","Million"],c_0=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Ninteen"],d=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];function toWords(e){var s,a;for(s=1,string="",0==e&&(string="Zero");0!=e;){switch(s){case 1:pass(a=e%100),e>100&&e%100!=0&&display("And "),e=~~(e/100);break;case 2:0!=(a=e%10)&&(display(" "),display(b[0]),display(" "),pass(a)),e=~~(e/10);break;case 3:0!=(a=e%100)&&(display(" "),display(b[1]),display(" "),pass(a)),e=~~(e/100);break;case 4:0!=(a=e%100)&&(display(" "),display(b[2]),display(" "),pass(a)),e=~~(e/100);break;case 5:0!=(a=e%100)&&(display(" "),display(b[3]),display(" "),pass(a)),e=~~(e/100)}++s}return string}function display(e){var s;s=string,string=e,string+=s}function pass(e){var s,i;e<10&&display(a[e]),e>9&&e<20&&display(c_0[e-10]),e>19&&(0==(i=e%10)?display(d[(s=~~(e/10))-2]):(s=~~(e/10),display(a[i]),display(" "),display(d[s-2])))}
}
