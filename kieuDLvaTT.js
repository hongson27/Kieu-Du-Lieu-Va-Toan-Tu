inputPhysicsPoint = +prompt('Nhap diem mon Ly');
inputChemistryPoint = +prompt('Nhap diem mon Hoa');
inputBiologyPoint = +prompt('Nhap diem mon Sinh');
let aver = (inputPhysicsPoint + inputChemistryPoint + inputBiologyPoint)/3;
let sum = (inputPhysicsPoint + inputChemistryPoint + inputBiologyPoint);
document.write('aver =' + aver);
document.write('<br>');
document.write('sum =' + sum);