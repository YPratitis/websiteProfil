function validation(){
	var nama = document.getElementById("nama").value;
	var subjek = document.getElementById("subjek").value;
	var telefon = document.getElementById("telefon").value;
	var email = document.getElementById("email").value;
	var pesan = document.getElementById("pesan").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "12px;"
	if(nama.length < 4){
		text = "Masukkan Nama yang Benar";
		error_message.innerHTML = text;
		return false;
	}

	if(subjek.length < 7){
		text = "Masukkan Subjek yang Benar";
		error_message.innerHTML = text;
		return false;
	}

	if(isNaN(telefon) || telefon.length != 10){
		text = "Masukkan Nomer Telefon yang Benar";
		error_message.innerHTML = text;
		return false;
	}

	if(email.indexOf("@") == -1|| email.length < 6){
		text = "Masukkan Email yang Benar";
		error_message.innerHTML = text;
		return false;
	}

	if(pesan.length <= 50){
		text = "Masukkan Pesan Lebih dari  50 Karakter";
		error_message.innerHTML = text;
		return false;
	}
	alert("Formulir Anda Telah Terkirim")
	return true;
}