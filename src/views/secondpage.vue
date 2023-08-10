<script setup lang="ts">
import router from "@/router";
// @ts-ignore

import { useInputStore } from "../stores/inputstore";

import { reactive } from "vue";
const inputStore = useInputStore();

const all = reactive({
    father_occupation: inputStore.father_occupation,
    father_work_address: inputStore.father_work_address,
    father_education: inputStore.father_education,
    father_work_phone: inputStore.father_work_phone,
    father_id: inputStore.father_id,
    father_issue_place: inputStore.father_issue_place,
    father_birth_day: inputStore.father_birth_day,
    father_birth_month: inputStore.father_birth_month,
    father_birth_year: inputStore.father_birth_year,
    father_insurance_code: inputStore.father_insurance_code,
    father_national_code: inputStore.father_national_code,
    mother_occupation: inputStore.mother_occupation,
    mother_work_address: inputStore.mother_work_address,
    mother_education: inputStore.mother_education,
    mother_work_phone: inputStore.mother_work_phone,
    mother_id: inputStore.mother_id,
    mother_issue_place: inputStore.mother_issue_place,
    mother_birth_day: inputStore.mother_birth_day,
    mother_birth_month: inputStore.mother_birth_month,
    mother_birth_year: inputStore.mother_birth_year,
    mother_insurance_code: inputStore.mother_insurance_code,
    mother_national_code: inputStore.mother_national_code,
})
const next = () => {

    if (
        all.father_occupation &&
        all.father_work_address &&
        all.father_education &&
        all.father_work_phone &&
        all.father_id &&
        all.father_issue_place &&
        all.father_birth_day &&
        all.father_birth_month &&
        all.father_birth_year &&
        all.father_insurance_code &&
        all.father_national_code &&
        all.mother_occupation &&
        all.mother_work_address &&
        all.mother_education &&
        all.mother_work_phone &&
        all.mother_id &&
        all.mother_issue_place &&
        all.mother_birth_day &&
        all.mother_birth_month &&
        all.mother_birth_year &&
        all.mother_insurance_code &&
        all.mother_national_code) {

        inputStore.setInputValue("father_occupation", all.father_occupation);
        inputStore.setInputValue("father_work_address", all.father_work_address);
        inputStore.setInputValue("father_education", all.father_education);
        inputStore.setInputValue("father_work_phone", all.father_work_phone);
        inputStore.setInputValue("father_id", all.father_id);
        inputStore.setInputValue("father_issue_place", all.father_issue_place);
        inputStore.setInputValue("father_birth_day", all.father_birth_day);
        inputStore.setInputValue("father_birth_month", all.father_birth_month);
        inputStore.setInputValue("father_birth_year", all.father_birth_year);
        inputStore.setInputValue("father_insurance_code", all.father_insurance_code);
        inputStore.setInputValue("father_national_code", all.father_national_code);

        inputStore.setInputValue("mother_occupation", all.mother_occupation);
        inputStore.setInputValue("mother_work_address", all.mother_work_address);
        inputStore.setInputValue("mother_education", all.mother_education);
        inputStore.setInputValue("mother_work_phone", all.mother_work_phone);
        inputStore.setInputValue("mother_id", all.mother_id);
        inputStore.setInputValue("mother_issue_place", all.mother_issue_place);
        inputStore.setInputValue("mother_birth_day", all.mother_birth_day);
        inputStore.setInputValue("mother_birth_month", all.mother_birth_month);
        inputStore.setInputValue("mother_birth_year", all.mother_birth_year);
        inputStore.setInputValue("mother_insurance_code", all.mother_insurance_code);
        inputStore.setInputValue("mother_national_code", all.mother_national_code);

        router.push('/thirdpage')

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


        <h3 style="text-align: center;">مشخصات پدر</h3>
        <hr>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label>شغل پدر</label>
                    <select required class="form-control" name="father_occupation" v-model="all.father_occupation">
                        <option disabled selected>شغل پدر</option>
                        <option>فوت شده</option>
                        <option>فرهنگی</option>
                        <option>کارمند</option>
                        <option>بازنشسته</option>
                        <option>کارگر</option>
                        <option>کشاورز</option>
                        <option>دامدار</option>
                        <option>از کار افتاده</option>
                        <option>بیکار</option>
                        <option>راننده</option>
                        <option>آزاد</option>
                        <option>سایر</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>آدرس محل کار پدر</label>
                    <input type="text" class="form-control" name="father_work_address" v-model="all.father_work_address">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label>تحصیلات پدر</label>
                    <select required class="form-control" name="father_education" v-model="all.father_education">
                        <option disabled selected>تحصیلات پدر</option>
                        <option>بی سواد</option>
                        <option>ابتدایی</option>
                        <option>سیکل</option>
                        <option>دیپلم</option>
                        <option>فوق دیپلم</option>
                        <option>لیسانس</option>
                        <option>فوق لیسانس</option>
                        <option>دکتری</option>
                        <option>حوزه علمیه</option>
                        <option>سایر</option>
                    </select>
                </div>
            </div>
        </div>



        <div class="row">

            <div class="col-md-4">
                <div class="form-group">
                    <label>تلفن محل کار پدر</label>
                    <input type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_work_phone"
                        v-model="all.father_work_phone">
                </div>
            </div>


            <div class="col-md-4">
                <div class="form-group">
                    <label>شماره شناسنامه پدر</label>
                    <input type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_id"
                        v-model="all.father_id">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label>محل صدور شناسنامه پدر</label>
                    <input type="text" class="form-control" name="father_issue_place" v-model="all.father_issue_place">
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label>روز تولد پدر</label>
                    <input type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_birth_day "
                        v-model="all.father_birth_day">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label>ماه تولد پدر</label>
                    <input type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_birth_month"
                        v-model="all.father_birth_month">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label>سال تولد پدر</label>
                    <input type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_birth_year"
                        v-model="all.father_birth_year">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>کد بیمه پدر</label>
                    <input type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_insurance_code"
                        v-model="all.father_insurance_code">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>کد ملی پدر</label>
                    <input type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_national_code"
                        v-model="all.father_national_code">
                </div>
            </div>
        </div>

        <br>
        <h3 style="text-align: center;">مشخصات مادر</h3>
        <hr>
        <div class="row">


            <div class="col-md-4">
                <div class="form-group">
                    <label>شغل مادر</label>
                    <select required class="form-control" name="mother_occupation" v-model="all.mother_occupation">
                        <option disabled selected>شغل پدر</option>
                        <option>فوت شده</option>
                        <option>خانه دار</option>
                        <option>فرهنگی</option>
                        <option>کارمند</option>
                        <option>بازنشسته</option>
                        <option>کارگر</option>
                        <option>کشاورز</option>
                        <option>دامدار</option>
                        <option>از کار افتاده</option>
                        <option>بیکار</option>
                        <option>راننده</option>
                        <option>آزاد</option>
                        <option>سایر</option>
                    </select>
                </div>
            </div>


            <div class="col-md-4">
                <div class="form-group">
                    <label>آدرس محل کار مادر</label>
                    <input type="text" class="form-control" name="mother_work_address" v-model="all.mother_work_address">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label>تحصیلات مادر</label>
                    <select required class="form-control" name="mother_education" v-model="all.mother_education">
                        <option disabled selected>تحصیلات مادر</option>
                        <option>بی سواد</option>
                        <option>ابتدایی</option>
                        <option>سیکل</option>
                        <option>دیپلم</option>
                        <option>فوق دیپلم</option>
                        <option>لیسانس</option>
                        <option>فوق لیسانس</option>
                        <option>دکتری</option>
                        <option>حوزه علمیه</option>
                        <option>سایر</option>
                    </select>
                </div>
            </div>
        </div>


        <div class="row">

            <div class="col-md-4">
                <div class="form-group">
                    <label>تلفن محل کار مادر</label>
                    <input type="text" title="فقط عدد وارد کنید!" class="form-control" name="mother_work_phone"
                        v-model="all.mother_work_phone">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>شماره شناسنامه مادر</label>
                    <input type="text" title="فقط عدد وارد کنید!" class="form-control" name="mother_id"
                        v-model="all.mother_id">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label>محل صدور شناسنامه مادر</label>
                    <input type="text" class="form-control" name="mother_issue_place" v-model="all.mother_issue_place">
                </div>
            </div>
        </div>

        <div class="row">

            <div class="col-md-2">
                <div class="form-group">
                    <label>روز تولد مادر</label>
                    <input title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_birth_day"
                        v-model="all.mother_birth_day">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>ماه تولد مادر</label>
                    <input title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_birth_month"
                        v-model="all.mother_birth_month">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>سال تولد مادر</label>
                    <input title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_birth_year"
                        v-model="all.mother_birth_year">
                </div>
            </div>






            <div class="col-md-3">
                <div class="form-group">
                    <label>کد بیمه مادر</label>
                    <input title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_insurance_code"
                        v-model="all.mother_insurance_code">
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label>کد ملی مادر</label>
                    <input title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_national_code"
                        v-model="all.mother_national_code">
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="next()">بعدی</button>


</div></template>

<style>@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}</style>
