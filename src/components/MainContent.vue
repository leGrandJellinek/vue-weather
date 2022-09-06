<template>
<section class="main__content">
    <div class="main__content-left">
        <img src="@/assets/images/icons/sun.svg" alt="" class="main__content-sun" v-if="description == 'ясно'">
        <img src="@/assets/images/icons/cloud.svg" alt="" class="main__content-sun" v-else-if="description == 'пасмурно'">
        <img src="@/assets/images/icons/cloud.svg" alt="" class="main__content-sun" v-else-if="description == 'небольшая облачность'">
        <img src="@/assets/images/icons/cloud.svg" alt="" class="main__content-sun" v-else-if="description == 'переменная облачность'">
        <img src="@/assets/images/icons/small_rain.svg" alt="" class="main__content-sun" v-else-if="description == 'небольшой дождь'">
        <img src="@/assets/images/icons/small_rain_sun.svg" alt="" class="main__content-sun" v-else-if="description == 'облачно с прояснениями'">
        <img src="@/assets/images/icons/rain.svg" alt="" class="main__content-sun" v-else-if="description == 'дождь'">
        <h2 class="main__content-grad">
            {{Math.round(getFullWeather.main.temp)}}°
        </h2>
        <h2 class="main__content-date">
            Сегодня
        </h2>
        <p class="main__content-time">
            Время: еще не сделано{{}}
        </p>
        <div class="main__content-city">
            Город: {{getFullWeather.name}} , {{getFullWeather.sys.country}}
        </div>
    </div>
    <div class="main__content-right">
        <img src="@/assets/images/Cloud.png" alt="" class="main__content-cloud">
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/images/icons/temp.svg" alt="">
            </div>
            <p class="main__content-winfo">
                Температура:
            </p>
            <span>{{Math.round(getFullWeather.main.temp)}}° - ощущается как {{Math.round(getFullWeather.main.feels_like)}}°</span>
        </div>
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/images/icons/pressure.svg" alt="">
            </div>
            <p class="main__content-winfo">
                Давление:
            </p>
            <span>{{getFullWeather.main.pressure - 268}} мм ртутного столба </span>
        </div>
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/images/icons/precipitation.svg" alt="">
            </div>
            <p class="main__content-winfo">
                Влажность:
            </p>
            <span>{{getFullWeather.main.humidity}}%</span>
        </div>
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/images/icons/wind.svg" alt="">
            </div>
            <p class="main__content-winfo">
                Ветер:
            </p>
            <span>{{Math.round(getFullWeather.wind.speed)}} км/ч</span>
            
        </div>
    </div>
</section>
</template>

<script>

import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["getFullWeather"]),
        description(){
            return this.getFullWeather.weather[0].description
        }
    },
}
</script>