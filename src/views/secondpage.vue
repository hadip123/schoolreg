<script setup lang="ts">
import router from "@/router";
// @ts-ignore

import { useInputStore } from "../stores/inputstore";

import { reactive,ref } from "vue";
import { stringify } from "querystring";
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
const back = ()=>{
    router.push('/firstpage');
}
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
        all.mother_national_code&&
        error_1.value == false&&
        error_2.value == false&&
        error_3.value == false&&
        error_4.value == false&&
        error_5.value == false&&
        error_6.value == false&&
        error_7.value == false&&
        error_8.value == false&&
        error_9.value == false&&
        error_10.value == false&&
        error_11.value == false&&
        error_12.value == false&&
        error_13.value == false&&
        error_14.value == false












        ) {

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
//1
const error_1 = ref(false)

function onInput_1(e:any) {
  const value = e.target.value

  if (isNaN(value)) {
    error_1.value = true
  } else {
    error_1.value = false

  }
}
//2
const error_2 = ref(false);
function onInput_2 (e:any){
    const value = e.target.value

if (isNaN(value)) {
  error_2.value = true

} else {
  error_2.value = false

}
}
//3
const error_3 = ref();
const error_lenght_1 = ref();

function onInput_3 (e:any){
    const value = e.target.value

if (isNaN(value) ) {
  error_3.value = true
} 
else if(all.father_birth_day.length > 2){
error_lenght_1.value = true
}
else if (all.father_birth_day.length>0){
    error_3.value = false
    error_lenght_1.value = false

}

else if (all.father_birth_day.length < 3){
    error_lenght_1.value = false

}
else {
  error_3.value = false
}
}



//4
const error_lenght_2 = ref();
const error_4 = ref();
function onInput_4 (e:any){
    const value = e.target.value

if (isNaN(value)) {
  error_4.value = true

} 
else if(all.father_birth_month.length > 2){
error_lenght_2.value = true
}
else if (all.father_birth_month.length>0){
    error_4.value = false
    error_lenght_2.value = false

}

else if (all.father_birth_month.length < 3){
    error_lenght_2.value = false

}
else {
  error_4.value = false

}
}
//5
const error_lenght_3 = ref();
const error_5 = ref();
function onInput_5 (e:any){
    const value = e.target.value

if (isNaN(value)) {
  error_5.value = true

} 

else if(all.father_birth_year.length > 4){
error_lenght_3.value = true
}
else if (all.father_birth_year.length>0){
    error_5.value = false   
     error_lenght_3.value = false

}

else if (all.father_birth_year.length < 3){
    error_lenght_3.value = false

}
else {
  error_5.value = false

}
}
//6
const error_6 = ref(false)
function onInput_6(e:any){
  const value = e.target.value
  if (isNaN(value)|| all.father_insurance_code.length > 8|| all.father_insurance_code.length < 8){
    error_6.value = true
  }
   else {
    error_6.value = false
  }
}
//7
const error_7 = ref(false) 

function onInput_7() {
    var xv = all.father_national_code;
    if (isNaN(xv)) {
        error_7.value = true
    } else if (xv == "") {
        error_7.value = true
    } else if (xv.length < 10) {
        error_7.value = true
    } else {
        var yy = 0;
        var yv = parseInt(xv);
        for (let i = 0; i < xv.length; i++) {
            yv = xv[i] * (xv.length - i);
            yy += yv;
        }
        var x = yy % 11;
        if (x === 0) {
            error_7.value = false
        } else {
            error_7.value = false
        }
        yy = 0;
    }
}
//8


const error_8 = ref(false)
function onInput_8(e:any) {
  const value = e.target.value
  if (isNaN(value)) {
    error_8.value = true
  } else {
    error_8.value = false

  }
}
//9
const error_9 = ref(false);
function onInput_9 (e:any){
    const value = e.target.value

if (isNaN(value)) {
  error_9.value = true

} else {
  error_9.value = false

}
}
//10
const error_10= ref();
const error_lenght_4 = ref();
function onInput_10 (e:any){
    const value = e.target.value

if (isNaN(value) ) {
  error_10.value = true
} 
else if(all.mother_birth_day.length > 2){
error_lenght_4.value = true
}
else if (all.mother_birth_day.length>0){
    error_10.value = false
    error_lenght_4.value = false

}

else if (all.mother_birth_day.length < 3){
    error_lenght_4.value = false

}
else {
  error_10.value = false
}
}


//11
const error_11= ref();
const error_lenght_5 = ref();
function onInput_11 (e:any){
    const value = e.target.value

if (isNaN(value) ) {
  error_11.value = true
} 
else if(all.mother_birth_month.length > 2){
error_lenght_5.value = true
}
else if (all.mother_birth_month.length>0){
    error_11.value = false
    error_lenght_5.value = false

}

else if (all.mother_birth_month.length < 3){
    error_lenght_5.value = false

}
else {
  error_11.value = false
}
}

//12
const error_12= ref();
const error_lenght_6 = ref();
function onInput_12 (e:any){
    const value = e.target.value

if (isNaN(value) ) {
  error_12.value = true
} 
else if(all.mother_birth_year.length > 4){
error_lenght_6.value = true
}
else if (all.mother_birth_year.length>0){
    error_12.value = false
    error_lenght_6.value = false

}

else if (all.mother_birth_year.length < 3){
    error_lenght_6.value = false

}
else {
  error_12.value = false
}
}
//13
const error_13 = ref(false)
function onInput_13(e:any){
  const value = e.target.value
  if (isNaN(value)|| all.mother_insurance_code.length > 8|| all.mother_insurance_code.length < 8){
    error_13.value = true
  }
   else {
    error_13.value = false
  }
}
//14
const error_14 = ref(false)
function onInput_14() {
    var xv = all.mother_national_code;
    if (isNaN(xv)) {
        error_14.value = true
    } else if (xv == "") {
        error_14.value = true
    } else if (xv.length < 10) {
        error_14.value = true
    } else {
        var yy = 0;
        var yv = parseInt(xv);
        for (let i = 0; i < xv.length; i++) {
            yv = xv[i] * (xv.length - i);
            yy += yv;
        }
        var x = yy % 11;
        if (x === 0) {
            error_14.value = false
        } else {
            error_14.value = false
        }
        yy = 0;
    }
}
</script>
<template>
    <main style="padding-bottom: 74px;">
    <div class="container"
        style=" font-family: B Homa; text-align: right; background-color: rgba(255, 255, 255, 0.76); padding: 30px; border-radius: 20px; backdrop-filter: blur(10px);"
        dir="rtl">


        <h3 >مشخصات پدر</h3>
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
                    <input @input="onInput_1" type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_work_phone"
                        v-model="all.father_work_phone">
                        <p v-if="error_1" style="color: red;">شماره تلفن اشتباه است!</p>

                </div>

            </div>


            <div class="col-md-4">
                <div class="form-group">
                    <label>شماره شناسنامه پدر</label>
                    <input @input="onInput_2" type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_id"
v-model="all.father_id">
                        <p v-if="error_2" style="color: red;">لطفا فقط عدد وارد کنید!</p>

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
                    <input @input="onInput_3" type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_birth_day "
                        v-model="all.father_birth_day">
                        <p v-if="error_3" style="color: red;">لطفا فقط عدد وارد کنید!</p>
                        <p v-if="error_lenght_1" style="color: red;">اعداد بیش از حد است!</p>

                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label>ماه تولد پدر</label>
                    <input @input="onInput_4" type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_birth_month"
                        v-model="all.father_birth_month">
                        <p v-if="error_4" style="color: red;">لطفا فقط عدد وارد کنید!</p>
                <p v-if="error_lenght_2" style="color: red;">اعداد بیش از حد است!</p>

                </div>
              

            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label>سال تولد پدر</label>
                    <input @input="onInput_5" type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_birth_year"
                        v-model="all.father_birth_year">
                        <p v-if="error_5" style="color: red;">لطفا فقط عدد وارد کنید!</p>
                <p v-if="error_lenght_3" style="color: red;">اعداد بیش از حد است!</p>


                </div>
          
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>کد بیمه پدر</label>
                    <input @input="onInput_6" type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_insurance_code"
                        v-model="all.father_insurance_code">
                        <p v-if="error_6" style="color: red;">کد بیمه اشتباه است!</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>کد ملی پدر</label>
                    <input @input="onInput_7" type="text" title="فقط عدد وارد کنید!" class="form-control" name="father_national_code"
                        v-model="all.father_national_code">
                        <p v-if="error_7" style="color: red;">کد ملی اشتباه است!</p>

                </div>
            </div>
        </div>

        <br>
        <h3 >مشخصات مادر</h3>
        <hr>
        <div class="row">


            <div class="col-md-4">
                <div class="form-group">
                    <label>شغل مادر</label>
                    <select required class="form-control" name="mother_occupation" v-model="all.mother_occupation">
                        <option disabled selected>شغل مادر</option>
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
                    <input @input="onInput_8" type="text" title="فقط عدد وارد کنید!" class="form-control" name="mother_work_phone"
                        v-model="all.mother_work_phone">
                        <p v-if="error_8" style="color: red;">شماره تلفن اشتباه است!</p>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>شماره شناسنامه مادر</label>
                    <input @input="onInput_9" type="text" title="فقط عدد وارد کنید!" class="form-control" name="mother_id"
                        v-model="all.mother_id">
                        <p v-if="error_9" style="color: red;">لطفا فقط عدد وارد کنید!</p>

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
                    <input @input="onInput_10" title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_birth_day"
                        v-model="all.mother_birth_day">
                        <p v-if="error_10" style="color: red;">لطفا فقط عدد وارد کنید!</p>
                        <p v-if="error_lenght_4" style="color: red;">اعداد بیش از حد است!</p>
                </div>
                
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>ماه تولد مادر</label>
                    <input @input="onInput_11" title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_birth_month"
                        v-model="all.mother_birth_month">
                        <p v-if="error_11" style="color: red;">لطفا فقط عدد وارد کنید!</p>
                        <p v-if="error_lenght_5" style="color: red;">اعداد بیش از حد است!</p>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>سال تولد مادر</label>
                    <input @input="onInput_12" title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_birth_year"
                        v-model="all.mother_birth_year">
                        <p v-if="error_12" style="color: red;">لطفا فقط عدد وارد کنید!</p>
                        <p v-if="error_lenght_6" style="color: red;">اعداد بیش از حد است!</p>
                </div>
            </div>






            <div class="col-md-3">
                <div class="form-group">
                    <label>کد بیمه مادر</label>
                    <input @input="onInput_13" title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_insurance_code"
                        v-model="all.mother_insurance_code">
                        <p v-if="error_13" style="color: red;">کد بیمه اشتباه است!</p>

                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label>کد ملی مادر</label>
                    <input @input="onInput_14" title="فقط عدد وارد کنید!" type="text" class="form-control" name="mother_national_code"
                        v-model="all.mother_national_code">
                    <p v-if="error_14" style="color: red;">کد بیمه اشتباه است!</p>

                </div>
                
            </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="next()">بعدی</button>
        <button style="float: left;" type="submit" class="btn btn-primary" @click="back()">بازگشت</button>



</div>
</main>
</template>

<style>@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}</style>
