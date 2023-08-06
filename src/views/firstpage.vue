<script setup lang="ts">
import router from '@/router';
import { useInputStore } from  "../stores/inputstore"; 

import { reactive,computed, ref } from 'vue';
const inputStore = useInputStore();


 const all = reactive({
    name :inputStore.name,
   last_name: inputStore.last_name,
   father_name: inputStore.father_name,
   field_of_study: inputStore.field_of_study,
   id_number: inputStore.id_number,
   id_alphabet: inputStore.id_alphabet,
   id_number_int: inputStore.id_number_int,
   national_code: inputStore.national_code,
   issue_place: inputStore.issue_place,
   mother_name: inputStore.mother_name,
   birth_day: inputStore.birth_day,
   birth_month: inputStore.birth_month,
   birth_year: inputStore.birth_year,
   country:inputStore.country,
   city: inputStore.city,
   postal_code: inputStore.postal_code,
   religion: inputStore.religion,
   body_status: inputStore.body_status,
   left_handed: inputStore.left_handed,
})


const next =()=>{
    if(all.name && all.last_name&&all.father_name&&all.field_of_study&&all.id_number&&all.id_number_int&&all.national_code
    &&all.issue_place&&all.mother_name&&all.birth_day&&all.birth_month&&all.birth_year&&all.country&&all.city&&all.id_alphabet&&
    all.postal_code&&all.religion&&all.body_status&&all.left_handed
    ){

inputStore.setInputValue("name", all.name);
inputStore.setInputValue("last_name", all.last_name);
inputStore.setInputValue("father_name", all.father_name);
inputStore.setInputValue("field_of_study", all.field_of_study);
inputStore.setInputValue("id_number", all.id_number);
inputStore.setInputValue("id_alphabet", all.id_alphabet);
inputStore.setInputValue("id_number_int", all.id_number_int);
inputStore.setInputValue("national_code", all.national_code);
inputStore.setInputValue("issue_place", all.issue_place);
inputStore.setInputValue("mother_name", all.mother_name);
inputStore.setInputValue("birthday_day", all.birth_day);
inputStore.setInputValue("birth_month", all.birth_month);
inputStore.setInputValue("birth_year", all.birth_year);
inputStore.setInputValue("country", all.country);
inputStore.setInputValue("City", all.city);
inputStore.setInputValue("postal_code", all.postal_code);
inputStore.setInputValue("religion", all.religion);
inputStore.setInputValue("body_status", all.body_status);
inputStore.setInputValue("left_handed", all.left_handed);
    
    router.push('/secondpage')
    }
    else{
        alert('اطلاعات درست نیست!');
    }

}
console.log(inputStore)


</script>

<template>

  <main>
    <br>

    <div class="container" style="font-family: B Homa; text-align: right; background-color: rgba(255, 255, 255, 0.76); padding: 30px; border-radius: 20px; backdrop-filter: blur(10px);" dir="rtl">
            <h2>مشخصات فردی</h2>
            <div class="row">

                <div class="col-md-6">
                    <div class="form-group">
                        <label>نام</label>
                        <input type="text" class="form-control" name="name" v-model="all.name"> 
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label>نام خانوادگی</label>
                        <input type="text" class="form-control" name="last_name" v-model="all.last_name">
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col-md-6">
                    <div class="form-group">
                        <label>نام پدر</label>
                        <input type="text" class="form-control" name="father_name" v-model="all.father_name">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label>رشته تحصیلی</label>
                        <select class="form-control" name="field_of_study" v-model="all.field_of_study">
                            <option disabled selected>رشته تحصیلی</option>
                            <option value="elc">الکترونیک</option>
                            <option value="tac">تاسیسات مکانیکی</option>
                            <option value="shab">شبکه و نرم افزار کامپیوتر</option>
                            <option value="san">صنایع چوب و مبلمان</option>
                            <option value="tar">تربیت بدنی</option>
                            <option value="sakh">ساختمان</option>
                            <option value="shim">صنایع شیمیایی</option>
                        </select>
                    </div>
                </div>

            </div>

            <div class="row " style="display: flex;">

                <div class="col-md-4">
                    <div class="form-group">
                        <label>سریال شناسنامه</label>
                        <input type="number" title="فقط عدد وارد کنید!" class="form-control" name="id_number" v-model="all.id_number">
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="form-group">
                        <label>.</label>
                        <input placeholder="حروف"  type="text" class="form-control" name="id_alphabet" v-model="all.id_alphabet">
                    </div>
                </div>
                <div class="col-md-1">
                    <div class="form-group">
                        <label >.</label>
                        <input n placeholder="عدد" title="فقط عدد وارد کنید!" type="number" class="form-control" name="id_number_int" v-model="all.id_number_int">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>کد ملی</label>
                        <input type="number" title="فقط عدد وارد کنید!" class="form-control" name="national_code" v-model="all.national_code">
                    </div>
                </div>

            </div>

            <div class="row">

            
        
            </div>

            <div class="row">

                <div class="col-md-6">
                    <div class="form-group">
                        <label>محل صدور شناسنامه</label>
                        <input type="text" class="form-control" name="issue_place" v-model="all.issue_place">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label>نام و نام خانوادگی مادر</label>
                        <input type="text" class="form-control" name="mother_name" v-model="all.mother_name">
                    </div>
                </div>

            </div>

            <div class="row" style="text-align: center;align-items: center;" >

                <div class="col-md-1">
                    <div class="form-group">
                        <label>روز تولد</label>
                        <input type="number" title="فقط عدد وارد کنید!" class="form-control" name="birth_day" v-model="all.birth_day">
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="form-group">
                        <label>ماه تولد</label>
                        <input type="number" title="فقط عدد وارد کنید!" class="form-control" name="birth_month " v-model="all.birth_month">
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="form-group">
                        <label>سال تولد</label>
                        <input type="number" title="فقط عدد وارد کنید!" class="form-control" name="birth_year" v-model="all.birth_year">
                    </div>
                </div>
                <div class="col-md-5" >
                    <div class="form-group">
                        <label>ملیت</label>
                        <input   type="text" class="form-control" v-model="all.country" name="country"  >
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>شهر/روستا</label>
                        <input type="text" class="form-control" name="city" v-model="all.city">
                    </div>
                </div>
            </div>

            <div class="row">

         

           

            </div>

            <div class="row">

                <div class="col-md-6">
                    <div class="form-group">
                        <label>کد پستی</label>
                        <input type="number" title="فقط عدد وارد کنید!" class="form-control" name="postal_code" v-model="all.postal_code">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label>مذهب</label>
                        <select required class="form-control" name="religion" v-model="all.religion">
                            <option disabled selected></option>
                            <option>شیعه</option>
                            <option>سنی</option>

                        </select>
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col-md-4">
                    <div class="form-group">
                        <label>وضعیت جسمانی</label>
                        <select required class="form-control" name="body_status" v-model="all.body_status">
                            <option disabled selected></option>
                            <option>سالم</option>
                            <option>ناشنوا</option>
                            <option>نیمه شنوا</option>
                            <option>نابینا</option>
                            <option>نیمه بینا</option>
                            <option>معلول جسمی حرکتی</option>

                        </select>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label>موبایل شاد</label>
                        <input type="number" title="فقط عدد وارد کنید!" class="form-control" name="shad_mobile">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>چپ دست؟</label>
                        <select required class="form-control" name="left_handed" v-model="all.left_handed">
                            <option disabled selected></option>
                            <option>بله</option>
                            <option>خیر</option>
                        </select>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary" @click="next()" >بعدی</button>

        </div>
  </main>
</template>
