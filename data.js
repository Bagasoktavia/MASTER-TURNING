// DATA MASTER TURNING: video, materi, soal, glosarium
const VID=["","","","","",""]; // isi ID video YouTube tiap bagan, contoh "dQw4w9WgXcQ"
const C=[
{t:"Facing",s:"Pembubutan Muka",m:["Facing adalah pembubutan permukaan ujung (muka) benda kerja dengan gerak pemakanan tegak lurus sumbu putar.","Tujuan: meratakan muka, membuat ujung siku terhadap sumbu, dan menentukan panjang akhir benda.","Pahat: pahat muka/sisi, ujung pahat harus tepat setinggi senter. Terlalu rendah meninggalkan puting di tengah, terlalu tinggi membuat pahat bergesek.","Gerak pemakanan memakai eretan lintang dari luar ke tengah (atau sebaliknya). Kecepatan potong menurun mendekati pusat.","Rumus: n = (Vc × 1000) / (π × d). Gunakan feed halus untuk finishing."],
q:`Facing adalah pembubutan pada…|ujung/muka benda kerja|diameter luar|bagian dalam|alur
Gerak pemakanan facing…|tegak lurus sumbu|sejajar sumbu|miring 30°|berputar
Tujuan utama facing…|meratakan muka & menentukan panjang|membuat ulir|membuat alur|membuat tirus
Ketinggian pahat facing…|setinggi senter|jauh di bawah|jauh di atas|bebas
Pahat terlalu rendah dari senter meninggalkan…|puting di tengah muka|ulir|alur|tirus
Saat facing mendekati pusat, kecepatan potong…|menurun mendekati nol|naik|tetap|acak
Facing digerakkan oleh eretan…|lintang|memanjang|kepala lepas|spindel
Pahat yang lazim untuk facing…|pahat muka/sisi|pahat ulir|pahat alur|roda knurling
Sebelum facing benda kerja harus dicekam…|kuat dan sentris|longgar|miring|sekenanya
Finishing facing memakai…|pemakanan kecil & feed halus|pemakanan besar|feed kasar|tanpa pahat
Muka bergelombang biasanya karena…|pahat tumpul/getaran|RPM tepat|chuck kuat|pahat tajam
Rumus putaran spindel…|n = 1000·Vc/(π·d)|n = π·d/Vc|n = Vc·d|n = d/1000
Satuan kecepatan potong Vc…|m/menit|mm|rpm|derajat
Lubang senter setelah facing dibuat dengan…|bor senter (center drill)|knurling|pahat ulir|pahat alur
K3 saat facing…|kacamata pelindung, tidak menyentuh benda berputar|sarung tangan saat berputar|mengukur saat berputar|bercanda`},
{t:"Bubut Rata Memanjang",s:"Turning / Pembubutan Silindris",m:["Bubut rata memanjang membuat permukaan silindris sejajar sumbu putar dengan gerak pemakanan eretan memanjang.","Tahap: roughing (kedalaman potong besar, cepat menghabiskan material) lalu finishing (kedalaman kecil, ukuran & kehalusan akhir).","Kedalaman potong (a) 1 mm mengurangi diameter 2 mm. Feed (f) dalam mm/putaran.","Benda panjang harus didukung senter putar pada kepala lepas untuk mencegah lenturan.","Kurangi getaran (chatter): overhang pahat pendek, pahat kencang, RPM & feed sesuai bahan."],
q:`Bubut rata memanjang membuat permukaan…|silindris sejajar sumbu|rata di muka|berulir|beralur
Gerak pemakanan dilakukan eretan…|memanjang|lintang|kepala lepas|spindel
Roughing memakai…|kedalaman potong besar|kedalaman sangat kecil|feed nol|tanpa pahat
Finishing bertujuan…|ukuran & kehalusan akhir|menghabiskan material|membuat ulir|membuat alur
Benda kerja panjang didukung…|senter putar|kikir|mistar|palu
Rumus putaran…|n = 1000·Vc/(π·d)|n = π·d/Vc|n = Vc·d|n = d·1000
Diameter 40 mm dipotong a = 2 mm, diameter menjadi…|36 mm|38 mm|34 mm|39 mm
Kedalaman potong 1 mm mengurangi diameter…|2 mm|1 mm|0,5 mm|4 mm
Alat ukur diameter luar presisi…|mikrometer/jangka sorong|mistar|siku|busur
Pahat lazim rata memanjang…|pahat kanan|pahat ulir|pahat alur|knurling
Satuan feed (f)…|mm/putaran|m/menit|rpm|derajat
Getaran dikurangi dengan…|overhang pendek & pahat kencang|overhang panjang|chuck longgar|RPM asal
Bahan aluminium Vc-nya umumnya…|lebih tinggi dari baja|lebih rendah dari baja|nol|tak berpengaruh
Ketinggian pahat…|setinggi senter|jauh di bawah|5 mm di atas|bebas
Sebelum mengukur, mesin harus…|dihentikan|berputar cepat|diberi coolant|full speed`},
{t:"Alur",s:"Grooving & Parting Off",m:["Pembubutan alur membuat celah/parit pada diameter luar, dalam, atau muka benda kerja.","Gerak pemakanan melintang tegak lurus sumbu; lebar alur ditentukan lebar mata pahat alur.","Parting off adalah memotong benda kerja hingga terpisah, sebaiknya dekat chuck.","Gunakan RPM lebih rendah, feed kecil & stabil, serta pendingin agar tatal keluar dan pahat tidak patah.","Fungsi alur: tempat ring/seal, relief ulir, dan pemisah bagian benda."],
q:`Pembubutan alur membuat…|celah/parit pada benda|ulir|tirus|muka rata
Gerak pemakanan alur…|melintang tegak lurus sumbu|memanjang|miring|diam
Lebar alur ditentukan oleh…|lebar mata pahat alur|RPM|jenis chuck|panjang benda
Parting off adalah…|memotong hingga terpisah|membuat ulir|membuat tirus|meratakan muka
RPM alur dibanding rata biasanya…|lebih rendah|lebih tinggi|sama|tak berlaku
Feed alur sebaiknya…|kecil & stabil|sangat besar|tak beraturan|berhenti di tengah
Pahat alur harus…|tegak lurus sumbu & setinggi senter|miring|di atas senter|bebas
Alur luar, alur dalam, dan…|alur muka|alur ulir|alur knurl|alur senter
Fungsi alur antara lain…|tempat ring/seal & relief ulir|menambah diameter|meratakan muka|mengukur
Pendingin pada alur berguna…|mendinginkan & mengeluarkan tatal|menambah gesekan|mengikat benda|tak ada
Pahat alur mudah patah jika…|feed terlalu besar/getar|feed kecil|RPM rendah|pendingin cukup
Kedalaman alur diukur dengan…|jangka sorong (batang kedalaman)|palu|kikir|busur
Parting off sebaiknya dekat…|chuck|ujung bebas panjang|tengah bentang|tak ada aturan
Tatal alur harus…|dipatahkan & dibersihkan|dibiarkan menumpuk|dipegang tangan|ditiup
Alur 3 mm dengan pahat 3 mm dibuat…|sekali tusuk|tiga kali geser|mustahil|dengan ulir`},
{t:"Ulir",s:"Threading",m:["Ulir adalah alur berbentuk helik pada silinder; ulir kanan mengencang searah jarum jam.","Ulir metrik ISO bersudut profil 60°, Whitworth 55°. Kisar (pitch) = jarak antar puncak ulir; M10×1,5 = diameter 10 mm, kisar 1,5 mm.","Gerak ulir disinkronkan dengan lead screw dan half nut. Pahat diatur tegak lurus sumbu memakai center gauge.","Tinggi ulir metrik luar ≈ 0,6134 × P. Pemakanan bertahap kecil berulang, RPM rendah.","Cek dengan thread pitch gauge, cincin/ulir ukur; beri pendingin."],
q:`Ulir adalah…|alur berbentuk helik pada silinder|alur lurus|permukaan halus|lubang
Sudut profil ulir metrik ISO…|60°|55°|29°|45°
Sudut profil ulir Whitworth…|55°|60°|30°|90°
Kisar (pitch) adalah…|jarak antar puncak ulir|diameter|panjang benda|sudut
Gerak ulir disinkronkan oleh…|lead screw & half nut|tailstock|chuck|kran coolant
Half nut dikatupkan untuk…|memulai gerak ulir mesin|memutar chuck|mengukur|mendinginkan
Sudut mata pahat ulir metrik…|60°|55°|80°|20°
Tinggi ulir metrik luar ≈…|0,6134 × P|0,3 × P|2 × P|P + 5
RPM ulir dibanding bubut biasa…|lebih rendah|lebih tinggi|sama|tak berpengaruh
Alat cek kisar ulir…|thread pitch gauge|penggaris kayu|mikrometer lurus|busur
Pahat ulir ditegakkan dengan…|center gauge|kikir|jangka|palu
M10×1,5 berarti…|diameter 10 mm, kisar 1,5 mm|panjang 10 mm|1,5 ulir|sudut 1,5°
Pemakanan ulir dilakukan…|bertahap kecil berulang|sekali sangat dalam|acak|tanpa pahat
Ulir kanan mengencang…|searah jarum jam|berlawanan jarum jam|tak berputar|acak
Setelah lintasan ulir, pahat…|ditarik keluar dan kembali ke awal|dibiarkan menabrak|dimatikan chuck|dipegang tangan`},
{t:"Tirus",s:"Taper Turning",m:["Tirus adalah bentuk yang diameternya berubah bertahap sepanjang benda.","Metode: (1) menggeser kepala lepas (tirus panjang ringan), (2) memutar eretan atas (tirus pendek sudut besar), (3) attachment tirus.","Rumus: tan(α) = (D − d) / (2·L); perbandingan tirus C = (D − d) / L.","Pergeseran kepala lepas: S = L·(D − d) / (2·l), L panjang total, l panjang tirus.","Contoh: D 30, d 20, l 50 → C = 10/50 = 1:5. Pahat tetap setinggi senter; periksa dengan gauge tirus."],
q:`Tirus adalah…|diameter berubah bertahap sepanjang benda|silinder lurus|alur|ulir
Metode tirus selain kepala lepas dan attachment…|memutar eretan atas|memutar chuck|mengganti pahat ulir|knurling
Eretan atas cocok untuk tirus…|pendek sudut besar|panjang sangat ringan|tanpa sudut|ulir
Rumus tan α…|(D − d)/(2·L)|(D + d)/L|D·d|L/D
Perbandingan tirus C…|(D − d)/L|D × d|D + d|L/D
Pergeseran kepala lepas S…|L·(D − d)/(2·l)|D − d|L·D|d/2
Tirus Morse dipakai pada…|shank bor/senter|ulir|knurling|alur
Pahat untuk tirus…|setinggi senter|jauh di bawah|jauh di atas|bebas
D 30, d 20, l 50, perbandingan tirus…|1:5|1:2|1:10|1:1
Sudut eretan atas diatur pada…|skala eretan atas|chuck|tailstock ram|spindel
Tirus kepala lepas cocok untuk…|benda panjang tirus ringan|tirus pendek sudut besar|ulir|knurling
Pada tirus kepala lepas perlu…|senter benar & tidak aus|tanpa senter|hanya chuck|mistar
Sebelum tirus, sudut dihitung dengan…|trigonometri|menebak|tak perlu|hafalan
Pengecekan tirus memakai…|gauge tirus (ring/plug)|mistar kayu|palu|kikir
Semakin besar selisih D−d dengan L tetap, sudut tirus…|makin besar|makin kecil|tetap|nol`},
{t:"Knurling",s:"Kartel / Pola Kasar",m:["Knurling membuat pola kasar/bergerigi pada permukaan silinder untuk meningkatkan cengkeraman (gagang, knop).","Prosesnya menekan (deformasi plastis), bukan memotong sehingga tidak ada tatal; diameter sedikit bertambah.","Pola: lurus (straight), diagonal, dan diamond (ketupat). Alat dipasang di tool post, roda knurl tegak lurus sumbu.","RPM rendah, feed sesuai, beri pelumas/pendingin; benda kerja dicekam kuat karena gaya tekan besar.","Buat diameter awal sedikit lebih kecil dari ukuran akhir. Bersihkan serpihan dengan kuas."],
q:`Knurling membuat…|pola kasar bergerigi|ulir|alur|tirus
Fungsi knurling…|memperbaiki cengkeraman|menambah presisi|mengurangi berat|menghaluskan
Knurling bekerja dengan…|menekan tanpa memotong|memotong tatal|mengikis|membakar
Pola knurling: lurus, diamond, dan…|diagonal|tirus|alur|ulir
RPM knurling…|rendah|sangat tinggi|tidak berputar|acak
Saat knurling sebaiknya diberi…|pelumas/pendingin|apa pun tidak|air garam|debu
Diameter setelah knurling…|sedikit bertambah|berkurang banyak|tetap persis|hilang
Roda knurl ditekan…|tegak lurus sumbu|miring jauh|tak menyentuh|dari belakang
Benda kerja saat knurling…|dicekam kuat|dilonggarkan|berayun|dilepas
Alat knurling dipasang pada…|tool post|chuck|tailstock ram|spindel
Serpihan dibersihkan dengan…|kuas|tangan langsung|ditiup mata|dibiarkan
Pola ganda tidak sinkron karena…|tekanan/pemasangan awal kurang tepat|warna benda|coolant|jam
Contoh benda ber-knurling…|gagang/knop|bearing presisi|poros ukur|bushing presisi
Diameter awal sebelum knurling…|sedikit lebih kecil dari ukuran akhir|lebih besar|sama|tak penting
Knurling cocok untuk permukaan…|genggam, bukan ukuran presisi|ukur presisi|cermin|ulir kisar halus`}];
const G=[["Facing","Pembubutan muka benda kerja"],["Turning","Pembubutan rata memanjang"],["Chuck","Pencekam benda kerja"],["Tailstock","Kepala lepas penyangga senter"],["Carriage","Eretan memanjang"],["Cross slide","Eretan lintang"],["Compound rest","Eretan atas, dapat diputar sudut"],["Tool post","Rumah pahat"],["Spindle","Poros utama pemutar chuck"],["Lead screw","Ulir pemandu gerak ulir"],["Half nut","Mur belah pengikat lead screw"],["Vc","Kecepatan potong (m/menit)"],["n","Putaran spindel (rpm)"],["f","Feed/pemakanan (mm/putaran)"],["a","Kedalaman potong (mm)"],["Pitch","Kisar: jarak antar puncak ulir"],["Roughing","Pemakanan kasar"],["Finishing","Pemakanan halus akhir"],["Chatter","Getaran saat pemotongan"],["Center gauge","Alat menyetel pahat ulir"],["Knurl","Roda pembuat pola kasar"],["Parting off","Pemotongan benda hingga putus"],["Center height","Ketinggian ujung pahat setinggi sumbu"],["Taper","Tirus"]];
