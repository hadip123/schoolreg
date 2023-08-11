<script setup lang="ts">
import router from '@/router';
// @ts-ignore
import { useInputStore } from "../stores/inputstore";

import { reactive, computed, ref } from 'vue';
const inputStore = useInputStore();
alert('برای وارد کردن اعداد حتما کیبورد خود را انگلیسی کنید!')

const all = reactive({
    name: inputStore.name,
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
    country: inputStore.country,
    city: inputStore.city,
    postal_code: inputStore.postal_code,
    religion: inputStore.religion,
    body_status: inputStore.body_status,
    left_handed: inputStore.left_handed,
})




const next = () => {
    console.log(all);
    if (all.name && all.last_name && all.father_name && all.field_of_study && all.id_number && all.id_number_int && all.national_code
        && all.issue_place && all.mother_name && all.birth_day && all.birth_month && all.birth_year && all.country && all.city && all.id_alphabet &&
        all.postal_code && all.religion && all.body_status && all.left_handed&&error.value == false&& error_2.value == false &&
     error_3.value == false && error_4.value == false && error_5.value == false&& error_6.value == false&& error_7.value == false
    ) {

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
        inputStore.setInputValue("birth_day", all.birth_day);
        inputStore.setInputValue("birth_month", all.birth_month);
        inputStore.setInputValue("birth_year", all.birth_year);
        inputStore.setInputValue("country", all.country);
        inputStore.setInputValue("city", all.city);
        inputStore.setInputValue("postal_code", all.postal_code);
        inputStore.setInputValue("religion", all.religion);
        inputStore.setInputValue("body_status", all.body_status);
        inputStore.setInputValue("left_handed", all.left_handed);

        router.push('/secondpage')
    }
    else {
        alert('اطلاعات درست نیست!');
    }

}
//1
const error = ref(false)

function onInput(e:any) {
  const value = e.target.value

  if (isNaN(value)) {
    error.value = true

  } else {
    error.value = false

  }
}
//2
 
const error_2 = ref(false)

function onInput_2 (e:any){
    const value = e.target.value

if (isNaN(value)) {
  error_2.value = true
} else {
  error_2.value = false
}
}
//3

const error_3 = ref(false)

function onInput_3 (e:any){
    const value = e.target.value
    const numbers = '123456789'
if (!!value.match(/\d/)) {
  error_3.value = true
} else {
  error_3.value = false
}
}
//4
const error_4 = ref(false) 

function onInput_4() {
    var xv = all.national_code ;
    if (isNaN(xv)) {
        error_4.value = true
    } else if (xv == "") {
        error_4.value = true
    } else if (xv.length < 10) {
        error_4.value = true
    } else {
        var yy = 0;
        var yv = parseInt(xv);
        for (let i = 0; i < xv.length; i++) {
            yv = xv[i] * (xv.length - i);
            yy += yv;
        }
        var x = yy % 11;
        if (x === 0) {
            error_4.value = false
        } else {
            error_4.value = false
        }
        yy = 0;
    }
}
//5
const error_5 = ref(false)

function onInput_5(e:any) {
  const value = e.target.value

  if (isNaN(value)) {
    error_5.value = true

  } else {
    error_5.value = false

  }
}
//6
const error_6 = ref(false)

function onInput_6(e:any) {
  const value = e.target.value

  if (isNaN(value)) {
    error_6.value = true

  } else {
    error_6.value = false

  }
}
//7
const error_7 = ref(false)

function onInput_7(e:any) {
  const value = e.target.value

  if (isNaN(value)) {
    error_7.value = true

  } else {
    error_7.value = false

  }
}
//8

const error_8 = ref(false)

function onInput_8(e:any) {
  const value = e.target.value

  if ( all.postal_code.length < 9 || all.postal_code.length > 9 || isNaN(value)) {
    error_8.value = true

  } else {
    error_8.value = false

  }
}
//9


</script>

<template>
    
    <main style="padding-bottom: 73px;">
        

        <div class="container"
            style=" font-family: B Homa; text-align: right; background-color: rgba(255, 255, 255, 0.76); padding: 30px; border-radius: 20px; backdrop-filter: blur(10px);"
            dir="rtl">
            <h2>مشخصات فردی</h2>
            <hr>
            <div class="row">
                <div class="col-md-6">
    <div class="form-group">
        <label>کد ملی(دانش آموز)</label>
        <input @input="onInput_4" type="text" title="فقط عدد وارد کنید!" class="form-control" name="national_code" v-model="all.national_code">
        <p v-if="error_4" style="color: red; font-size: 14px;">لطفا کد ملی را درست وارد کنید!</p>

    </div>
</div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>نام (دانش آموز)</label>
                        <input type="text" class="form-control" name="name" v-model="all.name">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label>نام خانوادگی (دانش آموز)</label>
                        <input type="text" class="form-control" name="last_name" v-model="all.last_name">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label>رشته تحصیلی (دانش آموز)</label>
                        <select class="form-control" name="field_of_study" v-model="all.field_of_study">
                            <option disabled selected>رشته تحصیلی</option>
                            <option>الکترونیک</option>
                            <option>تاسیسات مکانیکی</option>
                            <option>شبکه و نرم افزار کامپیوتر</option>
                            <option>صنایع چوب و مبلمان</option>
                            <option>تربیت بدنی</option>
                            <option>ساختمان</option>
                            <option>صنایع شیمیایی</option>
                        </select>
                    </div>
                </div>
            </div>

      

         
            <div class="row " style="display: flex;">

<div class="col-md-4">
    <div class="form-group">
        <label>سریال شناسنامه (دانش آموز)</label>
        <input @input="onInput" type="text" title="فقط عدد وارد کنید!" class="form-control" name="id_number" v-model="all.id_number">
    <p v-if="error" style="color: red;">لطفا فقط عدد وارد کنید!</p>
    </div>
</div>

<div class="col-md-1">
    <div class="form-group">
        <label>.</label>
        <input @input="onInput_3" placeholder="حروف" title="فقط حروف وارد کنید!" type="text" class="form-control" name="id_alphabet" v-model="all.id_alphabet">
        <p v-if="error_3" style="color: red; font-size: 14px;">خطای عدد!</p>

    </div>
</div>
<div class="col-md-1">
    <div class="form-group">
        <label >.</label>
        <input @input="onInput_2"  placeholder="عدد" title="فقط عدد وارد کنید!" type="text" class="form-control" name="id_number_int" v-model="all.id_number_int">
        <p v-if="error_2" style="color: red; font-size: 14px;">خطای حروف!</p>

    </div>
</div>
<div class="col-md-6">
                    <div class="form-group">
                        <label>نام پدر</label>
                        <input type="text" class="form-control" name="father_name" v-model="all.father_name">
                    </div>
                </div>

</div>

            <div class="row">



            </div>

            <div class="row">

                <div class="col-md-6">
                    <div class="form-group">
                        <label>محل صدور شناسنامه (دانش آموز)</label>
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

            <div class="row" style="text-align: center;align-items: center;">

                <div class="col-md-1">
                    <div class="form-group">
                        <label>روز تولد</label>
                        <input @input="onInput_5" type="text" title="فقط عدد وارد کنید!" class="form-control" name="birth_day"
                            v-model="all.birth_day">
                            <p v-if="error_5" style="color: red; font-size: 14px;">خطای حروف!</p>

                    </div>
                </div>

                <div class="col-md-1">
                    <div class="form-group">
                        <label>ماه تولد</label>
                        <input @input="onInput_6" type="text" title="فقط عدد وارد کنید!" class="form-control" name="birth_month "
                            v-model="all.birth_month">
                            <p v-if="error_6" style="color: red; font-size: 14px;">خطای حروف!</p>

                    </div>
                </div>

                <div class="col-md-1">
                    <div class="form-group">
                        <label>سال تولد</label>
                        <input @input="onInput_7" type="text" title="فقط عدد وارد کنید!" class="form-control" name="birth_year"
                            v-model="all.birth_year">
                            <p v-if="error_7" style="color: red; font-size: 14px;">خطای حروف!</p>

                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-group">
                        <label>شهرستان</label>
                        <input type="text" class="form-control" v-model="all.country" name="country">
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
                        <input @input="onInput_8" type="text" title="فقط عدد وارد کنید!" class="form-control" name="postal_code"
                            v-model="all.postal_code">
                            <p v-if="error_8" style="color: red; font-size: 14px;">کد پستی اشتباه است!</p>

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

                <div class="col-md-6">
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
                <div class="col-md-6">
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

        <button type="submit" class="btn btn-primary" @click="next()">بعدی</button>

    </div>
</main></template>
