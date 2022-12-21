var jumlah = prompt("Masukan banyak pembelian : ");
var konfirm = confirm("Pembelian anda sebanyak " + jumlah + ". Apakah anda yakin akan memesan?");
		
 		if(konfirm == true){
				alert("Pesanan anda sedang diproses. Terimakasih sudah berbelanja!");
			} else {
				alert("Terimakasih sudah berkunjung.");
			}