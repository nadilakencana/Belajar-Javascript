let karyawan =[];

function showKaryawan (){
    let listKaryawan = document.getElementById('listkaryawan');
    //console.log(listKaryawan);
    listKaryawan.innerHTML = "";

    for(let i= 0; i< karyawan.length; i++){
        
        var btnEdit = "<a href='#' onclick='editKaryawan("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='hapusData("+i+")'>hapus</a>";

        listKaryawan.innerHTML += "<li>"+ karyawan[i] +" ["+btnEdit+"]" + " ["+btnHapus+"]" +"</li>";

    }
}

function addKaryawan(){
    let input = document.getElementById('nama');
    karyawan.push(input.value);
    showKaryawan();
}

function editKaryawan(id){
    let newNama = prompt('inputkan nama baru', karyawan[id]);
    karyawan[id] = newNama;
    showKaryawan();

}

function hapusData(id){
    karyawan.splice(id, 1);
    showKaryawan();
}