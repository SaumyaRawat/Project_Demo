function diffImage(div) 
{
   if(div.id.match("1_1"))document.getElementById('1img_1').src='images/image_1/res_1.png';
   else if(div.id.match("1_2"))document.getElementById('1img_2').src='images/image_1/res_2.png';
   else if(div.id.match("1_3"))document.getElementById('1img_3').src='images/image_1/res_3.png';
   else if(div.id.match("1_4"))document.getElementById('1img_4').src='images/image_1/res_4.png';

   else if(div.id.match("2_1"))document.getElementById('2img_1').src='images/image_2/res_1.png';
   else if(div.id.match("2_2"))document.getElementById('2img_2').src='images/image_2/res_2.png';
   else if(div.id.match("2_3"))document.getElementById('2img_3').src='images/image_2/res_3.png';
   else if(div.id.match("2_4"))document.getElementById('2img_4').src='images/image_2/res_4.png';

   else if(div.id.match("3_1"))document.getElementById('3img_1').src='images/image_3/res_1.png';
   else if(div.id.match("3_2"))document.getElementById('3img_2').src='images/image_3/res_2.png';
   else if(div.id.match("3_3"))document.getElementById('3img_3').src='images/image_3/res_3.png';
   else if(div.id.match("3_4"))document.getElementById('3img_4').src='images/image_3/res_4.png';

   else if(div.id.match("4_1"))document.getElementById('4img_1').src='images/image_4/res_1.png';
   else if(div.id.match("4_2"))document.getElementById('4img_2').src='images/image_4/res_2.png';
   else if(div.id.match("4_3"))document.getElementById('4img_3').src='images/image_4/res_3.png';
   else if(div.id.match("4_4"))document.getElementById('4img_4').src='images/image_4/res_4.png';
}