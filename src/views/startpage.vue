<script setup lang="ts">
import router from '@/router';
// @ts-ignore
import { reactive, computed, ref } from 'vue';



const check = ref (false)
const next=()=>{
if(check.value === true){
router.push('/firstpage')
}
else{
    alert('قوانین را فبول نکردید!')
}
}

</script>

<template>
    <br>
    <main style="padding-bottom: 73px;">
        

        <div class="container"
            style=" font-family: B Homa; text-align: right; background-color: rgba(255, 255, 255, 0.76); padding: 30px; border-radius: 20px; backdrop-filter: blur(10px);"
            dir="rtl">
          
<h2 style="text-align: center;">مقررات انظباطی هنرستان فنی و حرفه ای شبانه روزی نمونه دولتی امام خمینی (ره)</h2>       
<hr>
<br>
<li>رعایت شعائر دینی، ادب و احترام نسبت به سایر هنرجویان، مدیر، دبیران، هنرآموزان و دیگر کارکنان هنرستان الزامی است.</li>
<li>هرگونه خروج هنرجو از هنرستان به هردلیلی در ساعت آموزشی یا تفریح بدون هماهنگی( مدیر یا معاون آموزشی )تخلف محسوب می شود.( اجازه توسط سایر کارکنان برای خروج کافی نیست)</li>
<li>هنرجو موظف است طبق برنامه هفتگی راس ساعت در هنرستان حضور داشته و در مراسم آغازین شرکت کند، شایسته است درصورت داشتن شرایط در نماز جماعت حضور فعال داشته باشد.</li>
<li>رعایت نظافت و بهداشت فردی و محیطی( هنرجو موظف است با نظارت سرپرست بخش در پایان ساعت کارگاه، محیط کارگاه و دستگاه ها را نظافت کند.</li>
    <li>هنرجو موظف است در هنرستان با لباس و پوشش مناسب حاضر شود، موی سر را متناسب با شأن دانش آموزی اصلاح نموده و از هرگونه تتو(خالکوبی) پرهیز کند. </li>
    <li>هرگونه خرید و فروش، تبلیغات خصوصاً تبلیغ کاندیداهای انتخاباتی در زمان انتخابات در محیط هنرستان ممنوع است.</li>
    <li>هنرجو باید از آوردن و استفاده از هرگونه وسایل گران قیمت، تجملی و آرایشی پرهیز کند( همراه داشتن وسایل غیر مجاز در هنرستان ممنوع می باشد)</li>   
<li>همراه داشتن هرنوع تبلت، گوشی تلفن همراه (حتی خاموش)، لپ تاپ ممنوع است.(در صورت ضرورت می بایست با هماهنگی دفتر آموزشی و مسئولیت شخص هنرجو صورت پذیرد.)</li>
<li>حفظ و نگهداری تجهیزات و سایل هنرستان و همچنین وسایل شخصی وظیفه هنرجو است(در صورت مشاهده آسیب به بیت المال توسط سایرین و عدم اطلاع به دفتر آموزشی مشارکت در تخلف محسوب می شود)</li>
<li>در صورت غیبت(موجه و غیرموجه)  اولیا موظف است در ساعات اولیه(قبل از زنگ تفریح اول) با دفتر آموزشی تماس گرفته و اطلاع دهند.(تلفن تماس 05832324720)</li>
<li>اولیا محترم می بایست در جلسات انجمن اولیا حضور فعال داشته باشند، همچنین برنامه ها و اخبار هنرستان را از طریق کانال هنرستان در شاد، تلگرام و یا واتساپ پیگیری نمایند.</li>
<li>هنرستان هیچگونه تعهدی در قبال تامین سرویس ایاب و ذهاب هنرجویان روزانه و خوابگاهی ندارد.</li>
<li>هنرجویان خوابگاهی موظف هستند قوانین خوابگاه را محترم بشمارند، همچنین مسئولیت حفظ و نگهداری وسایل شخصی و بیت المال بر عهده شخص هنرجو است.</li>
<li>هنرجو موظف است اصول ایمنی در کارگاه را رعایت گند، بدون هماهنگی سرپرست یا هنرآموز مربوطه از دستگاه و تجهیزات استفاده نکند، همچنین حتما در کارگاه از لباس کار،کفش مناسب، کلاه ایمنی و... استفاده کند)</li>
<li>هرگونه توهین، شوخی و بازی خصوصاً در محیط کارگاه ممنوع است، </li>
<li>مسئول حفظ و نگهداری تجهیزاتی که تحویل هنرجو می شود(رایانه، صندلی و...) شخص هنرجو است، در صورتی که آسیب ببیند(حتی توسط سایرین)، می بایست خسارت آن را پرداخت گردد.</li>
<br>
<br>
<div style="display: flex;">
    <input v-model="check" type="checkbox" style="width:40px ; ">

    <label style="font-size: 20px;" for="">قوانین و مقررات را میپزیرم</label>

</div>
<br>
<br>
<button type="submit" class="btn btn-primary" @click="next()">بعدی</button>

    </div>

</main>
</template>
<style>

  input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 25px;
      height: 25px;
      border: 2px solid #ccc;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }

    /* Style the custom checkbox appearance */
    input[type="checkbox"]::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border-radius: 3px;
      border: 2px solid #3b4899;
      transform: translateY(-2px) translateX(-2px);
      transition: background-color 0.3s, border-color 0.3s;
    }

    /* Style the custom checkbox appearance when checked */
    input[type="checkbox"]:checked::before {
      background-color: #2bc700;
      border-color: #333;
    }

    /* Optional label style */
    </style>
