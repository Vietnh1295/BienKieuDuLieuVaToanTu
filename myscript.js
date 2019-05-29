function SinhVien() {
    let markVatLy;
    let markHoaHoc;
    let markSinhHoc;
    markVatLy=prompt('Nhập điểm vật lý =');
    markHoaHoc=prompt('Nhập điểm hóa học');
    markSinhHoc=prompt('Nhập điểm sinh học');
    markVatLy=parseInt(markVatLy);
    markHoaHoc=parseInt(markHoaHoc);
    markSinhHoc=parseInt(markSinhHoc);
    let sumMark=markSinhHoc+markHoaHoc+markVatLy;
    let arg=sumMark/3;
    alert('Tổng điểm sinh viên =' +sumMark);
    alert('Điểm trung bình 3 môn =' +arg);
}
function DoiCSangF() {
    let C;
    C =prompt('Nhập độ C');
    C=parseInt(C);
    let F= (9*C)/5 + 32;
    alert('Độ F ='+F);
}
function DienTichHinhTron() {
    let r;
    r=prompt('Nhập bán kính đường tròn '   ) 
    r=parseInt(r);
    let S=r*r *3.14;
    alert('Diện tích hình tròn' +S)
}
function ChuViHinhTron() {
    let r;
    r=prompt('Nhập bán kính đường tròn '   )
    r=parseInt(r);
    let C=r*2*3.14;
    alert('Chu vi hình tròn' +C)
}
