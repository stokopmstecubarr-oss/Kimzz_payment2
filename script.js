// Load produk dari data.json
fetch('data.json')
  .then(res => res.json())
  .then(data=>{
    const select = document.getElementById('produkSelect');
    select.innerHTML='<option value="">-- Pilih Produk --</option>';
    for(const p of data.products){
      let statusText = (p.status==="closed" || p.stock===0)?" - Tidak tersedia":"";
      select.innerHTML+=`<option value="${p.name}">${p.name} - ${p.price}${statusText}</option>`;
    }
  });

document.getElementById('showOtherPaymentBtn').addEventListener('click',()=>{
  const div=document.getElementById('otherPayments');
  div.style.display=(div.style.display==='none')?'block':'none';
});

async function kirimBukti(){
  const fileInput=document.getElementById('buktiInput');
  const namaPengirim=document.getElementById('namaPengirim').value || "Tidak diketahui";
  const catatan=document.getElementById('catatanInput').value || "";
  const produk=document.getElementById('produkSelect').value || "Tidak diketahui";

  if(!fileInput.files.length){alert('Pilih file dulu tolol'); return;}
  const file=fileInput.files[0];

  const formData=new FormData();
  formData.append('chat_id','7797110418'); 
  formData.append('document',file);
  formData.append('caption',`Owner ada yang transfer.\nProduk: ${produk}\nNama: ${namaPengirim}\nCatatan: ${catatan}`);

  const token='8224631167:AAE8JN4jcnCSlH1Ku29wYKFP-zbWO27eimY';
  const url=`https://api.telegram.org/bot${token}/sendDocument`;

  try{
    await fetch(url,{method:'POST',body:formData});
    const n=document.getElementById('notif');
    n.style.opacity='1';
    setTimeout(()=>{n.style.opacity='0';},3000);
    document.getElementById('afterUpload').style.display='block';
  }catch(e){console.error(e);}
}