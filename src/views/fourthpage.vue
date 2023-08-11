<script setup lang="ts">
import router from '@/router';
// @ts-ignore

import { useInputStore } from "../stores/inputstore";

import { reactive, computed, ref } from 'vue';
const inputStore = useInputStore();
const all = reactive({
    previous_year_status: inputStore.previous_year_status,
    ninth_grade_second_gpa: inputStore.ninth_grade_second_gpa,
    ninth_gpa: inputStore.ninth_gpa,
    dolati_test: inputStore.dolati_test,
    previous_school_name: inputStore.previous_school_name,
    previous_school_code: inputStore.previous_school_code,
    imam_relief: inputStore.imam_relief,
    witness_quota: inputStore.witness_quota,
    welfare: inputStore.welfare,
    father_education_ministry: inputStore.father_education_ministry,
    mother_education_ministry: inputStore.mother_education_ministry,
    shad_mobile: inputStore.shad_mobile,
    gov_portal_number: inputStore.gov_portal_number





})
const error_1= ref(false);
function onInput_1 (e:any){
    const value = e.target.value

if (isNaN(value)) {
  error_1.value = true

} else {
  error_1.value = false

}
}
const error_2= ref(false);
function onInput_2 (e:any){
    const value = e.target.value

if (isNaN(value)) {
  error_2.value = true

} else {
  error_2.value = false

}
}
const error_3= ref(false);
function onInput_3 (e:any){
    const value = e.target.value

if (isNaN(value)) {
  error_3.value = true

} else {
  error_3.value = false

}
}
const error_4= ref(false);
function onInput_4 (e:any){
    const value = e.target.value

if (isNaN(value)|| !all.shad_mobile.startsWith('09')|| all.shad_mobile.length > 11|| all.shad_mobile.length < 11) {
  error_4.value = true

} else {
  error_4.value = false

}
}
const error_5= ref(false);
function onInput_5 (e:any){
    const value = e.target.value

if (isNaN(value)|| !all.gov_portal_number.startsWith('09')|| all.gov_portal_number.length > 11|| all.gov_portal_number.length < 11) {
  error_5.value = true

} else {
  error_5.value = false

}
}
const finish = () => {
    if (all.previous_year_status &&
        all.ninth_grade_second_gpa &&
        all.ninth_gpa &&
        all.dolati_test &&
        all.previous_school_name &&
        all.previous_school_code &&
        all.welfare &&
        all.witness_quota &&
        all.imam_relief &&
        all.father_education_ministry &&
        all.mother_education_ministry) {

        inputStore.setInputValue("previous_year_status", all.previous_year_status);
        inputStore.setInputValue("ninth_grade_second_gpa", all.ninth_grade_second_gpa);
        inputStore.setInputValue("ninth_gpa", all.ninth_gpa);
        inputStore.setInputValue("dolati_test", all.dolati_test);
        inputStore.setInputValue("previous_school_name", all.previous_school_name);
        inputStore.setInputValue("previous_school_code", all.previous_school_code);
        inputStore.setInputValue("welfare", all.welfare);
        inputStore.setInputValue("witness_quota", all.witness_quota);
        inputStore.setInputValue("imam_relief", all.imam_relief);
        inputStore.setInputValue("father_education_ministry", all.father_education_ministry);
        inputStore.setInputValue("mother_education_ministry", all.mother_education_ministry);
        inputStore.setInputValue("shad_mobile", all.shad_mobile);
        inputStore.setInputValue("gov_portal_number", all.gov_portal_number);








        const data = inputStore.getValues()

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://188.213.197.57:5000/update');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log('Request successful');
                // Access response data
                const response = xhr.responseText;

                alert(response)

                router.push('/')
                
            } else {
                alert('خطا')
            }
        }

        xhr.send(JSON.stringify(data));
    }

    else {
        alert('اطلاعات درست نیست!');
    }

}
const back =()=>{
    router.push('/thirdpage')
}
</script>
<template>
    <main  style="padding-bottom: 165px;">
    <div class="container"
        style="font-family: B Homa; text-align: right; background-color: rgba(255, 255, 255, 0.76); padding: 30px; border-radius: 20px; backdrop-filter: blur(10px);"
        dir="rtl">
        <h3>وضعیت سال گذشته</h3>
        <hr>    
        <div class="row">

            <div class="col-md-6">
                <div class="form-group">
                    <label> وضعیت سال گذشته</label>
                    <select required class="form-control" name="previous_year_status" v-model="all.previous_year_status">
                        <option disabled selected></option>
                        <option>در پایه نهم متوسطه اول تحصیل کرده ام</option>
                        <option>در پایه دهم متوسطه دوم مردود شده ام</option>
                        <option>در نظام ترمی واحدی تحصیل کرده ام</option>
                        <option>در پایه دهم متوسطه دوم ترک تحصیل کرده ام</option>

                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>معدل نیمسال دوم کلاس نهم(مثال : 19.20)</label>
                    <input @input="onInput_1" type="text" class="form-control" name="ninth_grade_second_gpa"
                        v-model="all.ninth_grade_second_gpa">
                        <p v-if="error_1" style="color: red;">لطفا فقط عدد وارد کنید!</p>

                </div>
            </div>

        </div>



        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>معدل سال کلاس نهم(مثال : 19.50)</label>
                    <input @input="onInput_2" type="text" class="form-control" name="ninth_gpa" v-model="all.ninth_gpa">
                    <p v-if="error_2" style="color: red;">لطفا فقط عدد وارد کنید!</p>

                </div>

            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label>در آزمون نمونه دولتی قبول شده</label>
                    <select required class="form-control" name="dolati_test" v-model="all.dolati_test">
                        <option disabled selected></option>
                        <option>بله</option>
                        <option>خیر</option>

                    </select>
                </div>
            </div>
        </div>


        <div class="row">

            <div class="col-md-6">
                <div class="form-group">
                    <label>نام مدرسه قبلی</label>
                    <input type="text" class="form-control" name="previous_school_name" v-model="all.previous_school_name">
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label>کد مدرسه قبلی</label>
                    <input @input="onInput_3" type="text" class="form-control" name="previous_school_code" v-model="all.previous_school_code">
                    <p v-if="error_3" style="color: red;">لطفا فقط عدد وارد کنید!</p>

                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>تحت پوشش کمیته امداد امام خمینی(ره)</label>
                    <select required class="form-control" name="imam_relief" v-model="all.imam_relief">
                        <option disabled selected></option>
                        <option>بلی</option>
                        <option>خیر</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>سهمیه شاهد / ایثارگری</label>
                    <select required class="form-control" name="witness_quota" v-model="all.witness_quota">
                        <option disabled selected></option>
                        <option>ندارد</option>
                        <option>فرزند شهید</option>
                        <option>فرزند مفقود الاثر</option>
                        <option>فرزند جانباز بالای 70 درصد</option>
                        <option>فرزند جانباز 50 تا 70 درصد</option>
                        <option>فرزند جانباز 25 تا 50 درصد</option>
                        <option>فرزند جانباز 25 درصد و کمتر</option>
                        <option>سایر</option>



                    </select>
                </div>
            </div>



        </div>

        <div class="row">

            <div class="col-md-6">
                <div class="form-group">
                    <label>تحت پوشش بهزیستی</label>
                    <select required class="form-control" name="welfare" v-model="all.welfare">
                        <option disabled selected></option>
                        <option>بلی</option>
                        <option>خیر</option>
                    </select>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label>پدر فرهنگی است</label>
                    <select required class="form-control" name="father_education_ministry"
                        v-model="all.father_education_ministry">
                        <option disabled selected></option>
                        <option>بلی</option>
                        <option>خیر</option>
                    </select>
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col-md-4">
                <div class="form-group">
                    <label>مادر فرهنگی است</label>
                    <select required class="form-control" name="mother_education_ministry"
                        v-model="all.mother_education_ministry">
                        <option disabled selected></option>
                        <option>بلی</option>
                        <option>خیر</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>شماره موبایل سامانه شاد</label>
                    <input @input="onInput_4" type="text" class="form-control" name="shad_mobile" v-model="all.shad_mobile">
                    <p v-if="error_4" style="color: red;">شماره اشتباه است</p>

                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>شماره موبایل استفاده شده در درگاه دولت</label>
                    <input @input="onInput_5" type="text" class="form-control" name="gov_portal_number" v-model="all.gov_portal_number">
                    <p v-if="error_5" style="color: red;">شماره اشتباه است</p>

                </div>
            </div>

        </div>
        <button type="submit" @click="finish()" class="btn btn-primary">ثبت اطلاعات</button>
        <button style="float: left;" type="submit" @click="back()" class="btn btn-primary">بازگشت</button>


    </div>
</main>
</template>