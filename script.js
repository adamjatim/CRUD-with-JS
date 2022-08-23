var data = [
    "Sistem Informasi",
    "Tehnik Komputer",
    "Tehnik Elektro",
    "Tehnik Jaringan Komputer"
]

function tampil(){
    var tabel = document.getElementById('tabel');
    tabel.innerHTML = "<tr><th>No</th><th>jurusan</th><th>Action</th></tr>";
    for(let a = 0; a < data.length; a++){
        var btnEdit = "<button class='btn-edit' onclick='edit("+a+")' type='button'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' onclick='hapus("+a+")' type='button'>Hapus</button>";
        b = a+1;
        tabel.innerHTML += "<tr><td>"+b+"</td><td>"+data[a]+"</td><td>"+btnEdit+" "+btnHapus+"</td></tr>";
    }
}

function tambah(){
    var input = document.querySelector("input[name=jurusan]");
    data.push(input.value);
    tampil();
}

function edit(id){
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function hapus(id){
    data.pop(id);
    tampil();
}

tampil();