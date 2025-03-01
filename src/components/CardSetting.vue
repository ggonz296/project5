<script setup>
import { faker } from '@faker-js/faker'
//change these - Settings for user
const firstname = faker.person.firstName()
const lastname = faker.person.lastName()
const location = faker.location.city()
const date = faker.date.recent()
</script>

<template>
    <!--This lets you click the card as a link for card details-->
        <!--Use tailwind for CSS options-->
        <div class="border border-gray-500 rounded-lg shadow bg-gray-400 h-full text-center">
            <!--Change image to something else-->
            <img class=" object-cover h-48000 w-96000 rounded-t-lg" v-bind:src="faker.image.urlLoremFlickr({category:'cat', height: 48000000, width: 96000000})" />
            <div class="p-4">
                <p class="mb-2 text-2xl font-bold">Name: {{ firstname }} {{ lastname }}</p>
                <p class="mb-3 font-normal text-gray-800">City of Residence: {{ location }}</p>
                <p class="mb-3 font-normal text-gray-800">Recent Login Date: {{ date }}</p>
            </div>
        </div>
</template>