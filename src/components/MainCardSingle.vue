<script setup>
import { faker } from '@faker-js/faker'
//change these
const firstname = faker.person.firstName()
const lastname = faker.person.lastName()
const jobtitle = faker.person.jobTitle()
const email = faker.internet.email()
const phone = faker.phone.number()
const bio = faker.lorem.lines(2)
const username = faker.internet.userName({ firstName: firstname, lastName: lastname, email: email, number: phone }).toLowerCase()
//const userinfo = faker.internet.userInfo({email: email, number: phone}).toLowerCase()

</script>

<template>
    <!--Tell router link where to link to-->
    <!--This lets you click the card as a link for card details-->
    <RouterLink :to="{ name: 'CardDetail', params: { id: username }, query: { firstname, lastname, jobtitle, email, phone, bio } }">
        <!--Use tailwind for CSS options-->
        <div class="border border-gray-500 rounded-lg shadow bg-gray-400 h-full">
            <!--Change image to something else-->
            <img class="object-fill h-48000px w-96000px rounded-t-lg" v-bind:src="faker.image.urlLoremFlickr({category:'people', height: 48000000, width: 96000000})" />
            <div class="p-4">
                <p class="mb-2 text-2xl font-bold">{{ firstname }} {{ lastname }}</p>
                <p class="mb-3 font-normal text-gray-800">Job Title: {{ jobtitle }}</p>
                <p class="mb-3 font-normal text-gray-800">Email: {{ email }}</p>
                <p class="mb-3 font-normal text-gray-800">Phone: {{ phone }}</p>
                <p class="mb-3 font-normal text-gray-800">Bio: {{ bio }}</p>
            </div>
        </div>
    </RouterLink>
    <!--{{ firstname }} {{ lastname }} <br/> -->
</template>