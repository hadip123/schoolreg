
<script setup lang="ts">  
import { reactive } from 'vue';
import router from '@/router';
import { useInputStore } from  "../stores/inputstore"; 
const inputStore = useInputStore();

const next =()=>{

if (all.address && all.home_phone && all.housing_status &&
 all.father_phone && all.mother_phone && all.phone && 
 all.emergency_phone && all.children_before && all.family_members
  && all.study_room && all.live_with && all.housing_situation && 
  all.student_supervisor && all.supervisor_birth_day && all.supervisor_birth_month
   && all.supervisor_birth_year && all.email && all.height && all.weight) 
{
    inputStore.setInputValue("address", all.address);
inputStore.setInputValue("home_phone", all.home_phone);
inputStore.setInputValue("housing_status", all.housing_status);
inputStore.setInputValue("father_phone", all.father_phone);
inputStore.setInputValue("mother_phone", all.mother_phone);
inputStore.setInputValue("phone", all.phone);
inputStore.setInputValue("emergency_phone", all.emergency_phone);
inputStore.setInputValue("children_before", all.children_before);
inputStore.setInputValue("family_members", all.family_members);
inputStore.setInputValue("study_room", all.study_room);
inputStore.setInputValue("live_with", all.live_with);
inputStore.setInputValue("housing_situation", all.housing_situation);
inputStore.setInputValue("student_supervisor", all.student_supervisor);
inputStore.setInputValue("supervisor_birth_day", all.supervisor_birth_day);
inputStore.setInputValue("supervisor_birth_month", all.supervisor_birth_month);
inputStore.setInputValue("supervisor_birth_year", all.supervisor_birth_year);
inputStore.setInputValue("email", all.email);
inputStore.setInputValue("height", all.height);
inputStore.setInputValue("weight", all.weight);
inputStore.setInputValue("ability", all.ability);

router.push('/fourthpage')

}
else{
        alert('اطلاعات درست نیست!');
    }

  


}
const all =reactive({
    address:inputStore.address,
    home_phone:inputStore.home_phone,
    housing_status:inputStore.housing_status,
    father_phone:inputStore.father_phone,
    mother_phone:inputStore.mother_phone,
    phone:inputStore.phone,
    emergency_phone:inputStore.emergency_phone,
    children_before:inputStore.children_before,
    family_members:inputStore.family_members,
    study_room:inputStore.study_room,
    live_with:inputStore.live_with,
    housing_situation:inputStore.housing_situation,
    student_supervisor:inputStore.student_supervisor,
    supervisor_birth_day:inputStore.supervisor_birth_day,
    supervisor_birth_month:inputStore.supervisor_birth_month,
    supervisor_birth_year:inputStore.supervisor_birth_year,
    email:inputStore.email,
    height:inputStore.heught,
    weight:inputStore.weight,
    ability:inputStore.ability,









})
</script>
<template>
    <div class="container" style="font-family: B Homa; text-align: right; background-color: rgba(255, 255, 255, 0.76); padding: 30px; border-radius: 20px; backdrop-filter: blur(10px);" dir="rtl">

<div class="row">


<div class="col-md-4">
    <div class="form-group">
        <label>آدرس منزل</label>
        <input type="text" class="form-control" name="address" v-model="all.address">
    </div>
</div><div class="col-md-4">
    <div class="form-group">
        <label>تلفن منزل</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control" name="home_phone" v-model="all.home_phone">
    </div>
</div>
<div class="col-md-4">
    <div class="form-group">
        <label>وضعیت مسکن</label>
        <select required class="form-control" name="housing_status" v-model="all.housing_status">
            <option disabled selected>وضعیت مسکن</option>
            <option>اجارهای</option>
            <option>ملک شخصی</option>
            <option>خانه سازمانی</option>
            <option>سایر</option>

        </select>
    </div>
</div>
</div>


<div class="row">

<div class="col-md-4">
    <div class="form-group">
        <label>تلفن همراه پدر</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control" name="father_phone" v-model="all.father_phone">
    </div>
</div>

<div class="col-md-4">
    <div class="form-group">
        <label>تلفن همراه مادر</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control" name="mother_phone" v-model="all.mother_phone">
    </div>
</div>
<div class="col-md-4">
    <div class="form-group">
        <label>تلفن همراه</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control" name="phone" v-model="all.phone">
    </div>
</div>
</div>

<div class="row">



<div class="col-md-4">
    <div class="form-group">
        <label>تلفن اضطراری</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control" name="emergency_phone" v-model="all.emergency_phone">
    </div>
</div>

<div class="col-md-4">
    <div class="form-group">
        <label>چندمین فرزند است؟</label>
        <select required class="form-control" name="children_before" v-model="all.children_before">
            <option disabled selected></option>
            <option>اولین(بزرگ ترین)</option>
            <option>آخرین (کوچک ترین)</option>
            <option>دومین</option>
            <option>سومین</option>
            <option>چهارمین</option>
            <option>پنجمین</option>
            <option>ششمین</option>
            <option>هفتمین</option>
            <option>هشتمین</option>
            <option>نهمین</option>
            <option>دهمین</option>
        </select>
    </div>
</div>

<div class="col-md-4">
    <div class="form-group">
        <label>تعداد افراد خانواده</label>
        <select required class="form-control" name="family_members" v-model="all.family_members">
            <option disabled selected></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>



        </select>
    </div>
</div>

</div>

<div class="row">
    <div class="col-md-6">
    <div class="form-group">
        <label>آیا هنرجو اتاق مستقل مطالعه دارد؟</label>
        <select required class="form-control" name="study_room" v-model="all.study_room">
            <option disabled selected></option>
            <option>بله</option>
            <option>خیر</option>
        </select>
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
        <label>هنرجو در خانواده با چه کسانی زندگی میکند</label>
        <select required class="form-control" name="live_with" v-model="all.live_with">
            <option disabled selected></option>
            <option>پدر و مادر</option>
            <option>پدر</option>
            <option>مادر</option>
            <option>پدر و مادر خوانده</option>
            <option>مادر بزگ یا پدر بزرگ</option>
            <option>سایر بستگان</option>
            <option>پرورشگاه</option>
            <option>مستقل</option>

        </select>
    </div>

</div>
</div>



<div class="row">
    <div class="col-md-8">
    <div class="form-group">
        <label>وضعیت مسکن هنرجو در صورتی که برای تحصیل دور از خانواده زندگی می گند</label>
        <select required class="form-control" name="housing_situation" v-model="all.housing_situation">
            <option disabled selected></option>
            <option>ملک شخصی</option>
            <option>خوابگاه دانش آموزی</option>
            <option>مسکن اجاره ای</option>
            <option>منزل بستگان</option>
            <option>سایر</option>


        </select>
    </div>



</div>

<div class="col-md-4">
    <div class="form-group">
        <label>ولی / سرپرست هنرجو کیست؟</label>
        <select onchange="toggle()" id="sarparast" required class="form-control"
            name="student_supervisor" v-model="all.student_supervisor">
            <option disabled selected></option>
            <option value="family">پدر</option>
            <option value="family">مادر</option>
            <option value="sayer">سایر</option>

        </select>
    </div>
</div>
</div>
<div  class="row">
    <div class="col-md-4">
    <div class="form-group">
        <label>روز تولد سرپرست</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control" name="supervisor_birth_day" v-model="all.supervisor_birth_day">
    </div>
</div>
<div class="col-md-4">
    <div class="form-group">
        <label>ماه تولد سرپرست</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control" name="supervisor_birth_month" v-model="all.supervisor_birth_month">
    </div>
</div>
<div class="col-md-4">
    <div class="form-group">
        <label>سال تولد سرپرست</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control"  name="supervisor_birth_year" v-model="all.supervisor_birth_year">
    </div>
</div>




</div>



<div class="row">

<div class="col-md-4">
    <div class="form-group">
        <label>ایمیل</label>
        <input type="email" class="form-control" name="email" v-model="all.email">
    </div>
</div>

<div class="col-md-4">
    <div class="form-group">
        <label>قد</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control" name="height" v-model="all.height">
    </div>
</div>

<div class="col-md-4">
    <div class="form-group">
        <label>وزن</label>
        <input title="فقط عدد وارد کنید!" type="number" class="form-control" name="weight" v-model="all.weight">
    </div>
</div>
</div>

<div class="row">


<div class="col-md-12">
    <div class="form-group">
        <label>توانایی (کسب مقام و رتبه) </label>
        <input type="text" class="form-control" name="ability" v-model="all.ability">
    </div>
</div>

</div>
<button type="submit" class="btn btn-primary" @click="next()" >بعدی</button>

</div>
</template>