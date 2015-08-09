function calc() {
	var string       =        document.getElementById('string-for-calculation').value;

	var priceBig     = Number(document.getElementById('priceBig').value);
	var priceSmall   = Number(document.getElementById('priceSmall').value);
	var priceNumbers = Number(document.getElementById('priceNumber').value);
	var priceComma   = Number(document.getElementById('priceComma').value);

	var sumBig   = 0;
	var sumSmall = 0;
	var sumNuber = 0;
	var sumComma = 0;

	var countBig    = 0;
	var countSmall  = 0;
	var countNuber  = 0;
	var countCommas = 0;

	for (var i = 0; i < string.length; i++) {
		var char = string.charAt(i);
		if (char == ' ') {
			continue;
		} else if (isNaN(char)) {
			if (char == 'а' ||
				char == 'б' ||
				char == 'в' ||
				char == 'г' ||
				char == 'д' ||
				char == 'е' ||
				char == 'ж' ||
				char == 'з' ||
				char == 'и' ||
				char == 'к' ||
				char == 'л' ||
				char == 'м' ||
				char == 'н' ||
				char == 'о' ||
				char == 'п' ||
				char == 'р' ||
				char == 'с' ||
				char == 'т' ||
				char == 'ф' ||
				char == 'х' ||
				char == 'ц' ||
				char == 'ч' ||
				char == 'ш' ||
				char == 'ь' ||
				char == 'ъ' ||
				char == 'ы' ||
				char == 'э' ||
				char == 'ю' ||
				char == 'я' ||
				char == 'a' ||
				char == 'b' ||
				char == 'c' ||
				char == 'd' ||
				char == 'e' ||
				char == 'f' ||
				char == 'g' ||
				char == 'h' ||
				char == 'i' ||
				char == 'j' ||
				char == 'k' ||
				char == 'l' ||
				char == 'm' ||
				char == 'n' ||
				char == 'o' ||
				char == 'p' ||
				char == 'q' ||
				char == 'r' ||
				char == 's' ||
				char == 't' ||
				char == 'u' ||
				char == 'v' ||
				char == 'w' ||
				char == 'x' ||
				char == 'y' ||
				char == 'z' ) {
				countSmall++;
				sumSmall += priceSmall;
			} else if (
				char == 'А' ||
				char == 'Б' ||
				char == 'В' ||
				char == 'Г' ||
				char == 'Д' ||
				char == 'Е' ||
				char == 'Ж' ||
				char == 'З' ||
				char == 'И' ||
				char == 'К' ||
				char == 'Л' ||
				char == 'М' ||
				char == 'Н' ||
				char == 'О' ||
				char == 'П' ||
				char == 'Р' ||
				char == 'С' ||
				char == 'Т' ||
				char == 'Ф' ||
				char == 'Х' ||
				char == 'Ц' ||
				char == 'Ч' ||
				char == 'Ш' ||
				char == 'Ь' ||
				char == 'Ъ' ||
				char == 'Ы' ||
				char == 'Э' ||
				char == 'Ю' ||
				char == 'Я' ||
				char == 'A' ||
				char == 'B' ||
				char == 'C' ||
				char == 'D' ||
				char == 'E' ||
				char == 'F' ||
				char == 'G' ||
				char == 'H' ||
				char == 'I' ||
				char == 'J' ||
				char == 'K' ||
				char == 'L' ||
				char == 'M' ||
				char == 'N' ||
				char == 'O' ||
				char == 'P' ||
				char == 'Q' ||
				char == 'R' ||
				char == 'S' ||
				char == 'T' ||
				char == 'U' ||
				char == 'V' ||
				char == 'W' ||
				char == 'X' ||
				char == 'Y' ||
				char == 'Z')
			{

				countBig++;
				sumBig += priceBig;
			} else if (
				char == '-' ||
				char == ':' ||
				char == ',' ||
				char == '.') {
				countCommas++;
				sumComma += priceComma;
			} else if (char == 'й' || char == 'ё') {
				countSmall++;
				sumSmall += priceSmall;
				countCommas++;
				sumComma += priceComma;
			} else if (char == 'Й' || char == 'Ё') {
				countBig++;
				sumBig += priceBig;
				countCommas++;
				sumComma += priceComma;
			}
		} else { // number
			countNuber++;
			sumNuber += priceNumbers;
		}

	} // for

	document.getElementById('countBig').innerHTML = countBig;
	document.getElementById('countSmall').innerHTML = countSmall;
	document.getElementById('countNumber').innerHTML = countNuber;
	document.getElementById('countComma').innerHTML = countCommas;

	var sumFinal = sumBig + sumSmall + sumNuber + sumComma;
	document.getElementById('sum').innerHTML = (Math.round(sumFinal * 100)/100).toFixed(2) + ' $';

}