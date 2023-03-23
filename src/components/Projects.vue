<template>
<Nav/>
<br>
  <div class="container mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
    <div class="row">
      <div class="bg-white py-4 sm:py-16">
        <div class="mx-auto max-w-5xl px-6 lg:px-8">
          <div v-for="(item, key) in projects" :key="key" class="mx-auto max-w-4xl">
            <p
              class="mt-2 text-1xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {{item.title}}
            </p>
            <p class="mt-2 text-lg leading-8 text-gray-600">
              {{item.tools}}
            </p>
            <p class="mt-2 text-lg leading-8 text-gray-600">
              {{item.detail}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
import Nav from './Nav.vue'
export default {
  name: "Projects",
  components:{
    Nav
  },
  data() {
    return {
      projects:[
        {
          title:`Smart Sales REST APIs integration with Vtiger`,
          detail:`Develop and maintain APIs, integrate with Vtiger, setup production server and webservices.
          Website: https://www.cotto.com`,
          tools:`Tools: PHP, MySQL, SQLite, Postman, Windows Server 2012`,
        },
        {
          title:`Elephant Bus Tours Android Application Development`,
          detail:`Developed an Android POS system with embedded printer for bus tours. Integrated with backend using REST APIs, with features such as login, GPS bus tracking, ticket purchase, redemption, expiry check, and printing using ESC commands. Provided SDK manual for customers. Website: https://elephantbustours.com`,
          tools:`Tools: Git, Bitbucket, Java for Android, XML, Android Studio, Postman`,
        },
        {
          title:`Odoo bridge Magento,Opencart`,
          detail:`Developed Module for sync Data between Odoo and Magento 2.4 / Opencart to list secondhand brandname products from Odoo. Features include automatic synchronization, real-time inventory sync, REST APIs for product tracking status, auto-generation of order invoice, and customer loyalty points program.Website: https://sfbrandname.com, https://www.kanekoji.com`,
          tools:`Tools: Git,Bitbucket,Python, Postgres , Vscode , Postman , Magento 2.4 , Opencart , Swagger, Docker, Ubuntu Server`,
        },
         {
          title:`PEA Overdue Electric Bill Android Application`,
          detail:`Developed demo and completed PEA Overdue electric bill Android app, including Bluetooth printer connectivity and CPCL command set for printing pre-printed forms. Features include sample bill printing, text format design, QR code command set, font selection, and paper format and tear-off adjustment. Also created SDK manual for customers.`,
          tools:`Tools: Git, Bitbucket, Java, Android Studio, SQLite`,
        },

      ],

    }
  },
  
}
</script>

<style>
</style>