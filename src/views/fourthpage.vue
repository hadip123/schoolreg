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

        // setTimeout(() => {
        //     router.push('/')
        // }, 3000);
        console.log(all.shad_mobile);

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

</script>
<template>
    <div class="container"
        style="font-family: B Homa; text-align: right; background-color: rgba(255, 255, 255, 0.76); padding: 30px; border-radius: 20px; backdrop-filter: blur(10px);"
        dir="rtl">
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
                    <label>معدل نیمسال دوم کلاس نهم</label>
                    <input type="text" class="form-control" name="ninth_grade_second_gpa"
                        v-model="all.ninth_grade_second_gpa">
                </div>
            </div>

        </div>



        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>معدل سال کلاس نهم</label>
                    <input type="text" class="form-control" name="ninth_gpa" v-model="all.ninth_gpa">
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
                    <input type="text" class="form-control" name="previous_school_code" v-model="all.previous_school_code">
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
                    <input type="text" class="form-control" name="shad_mobile" v-model="all.shad_mobile">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>شماره موبایل استفاده شده در درگاه دولت</label>
                    <input type="text" class="form-control" name="gov_portal_number" v-model="all.gov_portal_number">
                </div>
            </div>

        </div>
        <button type="submit" @click="finish()" class="btn btn-primary">ثبت اطلاعات</button>

    </div>
</template>