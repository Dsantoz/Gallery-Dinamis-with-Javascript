// ----------------- array ----------------
// 1. manipulasi arry
var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
// 2. menghapus & menimpa isi arry
    // menghapus
        // hari[1] = undefined; 
    // minimpa
        // hari[3] = 'libur';

// 3. menampilkan array dengan method
    // a. lenght
        // for( var i = 0; i < hari.length; i++) {
        //     console.log(hari[i]);
        // }
    // b. join (menampilkan)
        // console.log(hari.join(' - '));
    // c. push('tambah') & pop('hapus') bagian belakang
        // hari.push('libur');
        // hari.pop();
        // console.log(hari.join(' - '));
    // d. unshift('tambah') & shift('hapus') bagian awal
        // hari.unshift('merah');
        // hari.shift();
        // console.log(hari.join(' - '));
    // e. splice & slice
        // splice(index, dihapus berapa, menambah array1, menambah array2, ...)
            // hari.splice(5, 2, 'libur','masuk');
            // console.log(hari.join(' - '));
        // slice(awal, akhir)
            // var libur = hari.slice(4, 6);
            // console.log(libur.join(' - '));
    