<script setup>
import { faker } from '@faker-js/faker'
//change these - Products for sale
const productname = faker.commerce.productName()
const price = faker.commerce.price()
const description = faker.commerce.productDescription()
//const username = faker.internet.userName({firstName: firstname, lastName: lastname}).toLowerCase()
</script>

<template>
    <!--Tell router link where to link to-->
    <!--This lets you click the card as a link for card details-->
        <!--Use tailwind for CSS options-->
        <div class="border border-gray-500 rounded-lg shadow bg-gray-400 h-full">
            <!--Change image to something else-->
            <img class="object-fill h-4800 w-9600 rounded-t-lg" v-bind:src="faker.image.urlLoremFlickr({category:'technology', height: 48000000, width: 96000000})" />
            <div class="p-4">
                <p class="mb-2 text-2xl font-bold">{{ productname }}</p>
                <p class="mb-3 font-normal text-gray-800">Price: ${{ price }}</p>
                <p class="mb-3 font-normal text-gray-800">Description: {{ description }}</p>
            </div>
        </div>
    <!--{{ firstname }} {{ lastname }} <br/> -->
</template>