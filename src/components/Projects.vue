<template>
<Nav/>
<br>
  <div class="container mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
    <div class="row">
      <div class="bg-white py-4 sm:py-16">
        <div class="mx-auto max-w-5xl px-6 lg:px-8">
          <div v-for="(item, key) in projects" :key="key" class="mx-auto max-w-1xl">
            <p
              class="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-1xl">
              {{item.title}}
            </p>
            <p class="mt-2 text-base leading-8 text-gray-600">
              {{item.tools}}
            </p>
            <p class="mt-2 text-base leading-8 text-gray-600">
              {{item.detail}}
            </p>
            <p v-for="(link, index) in item.link" :key="index" class="mt-2 text-base leading-8 text-gray-600">
                <a class="font-bold tracking-tight text-gray-900" :href="link" target="_blank">{{link}}</a>
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
          title:`More project references to be added soon`,
          detail:``
        },
       {
        title: "Laravel JobBoard",
        detail: "Laravel JobBoard: Revolutionizing the way you search for jobs! With our advanced filtering options, you can easily find the perfect job based on salary and location. But that's not all - we take it a step further by calculating the distance between you and the job location, ensuring you find the most convenient opportunities. Say goodbye to tedious job searches and embrace the power of Laravel JobBoard!",
        tools: "Tools: PHP, MySQL, Laravel, Vue3, Inertia, VPS Linode, Nginx",
        link: ["https://project1.worawut.dev/"]
        },
        {
          title:`Smart Sales REST APIs integration with Vtiger`,
          detail:`Develop and maintain APIs, integrate with Vtiger, setup production server and webservices.`,
          tools:`Tools: PHP, MySQL, SQLite, Postman, Windows Server 2012`,
          link:[`https://www.cotto.com`]
        },
        {
          title:`Elephant Bus Tours Android Application Development`,
          detail:`Developed an Android POS system with embedded printer for bus tours. Integrated with backend using REST APIs, with features such as login, GPS bus tracking, ticket purchase, redemption, expiry check, and printing using ESC commands. Provided SDK manual for customers.`,
          tools:`Tools: Git, Bitbucket, Java for Android, XML, Android Studio, Postman`,
          link:[`https://elephantbustours.com`]
        },
        {
          title:`Odoo bridge Magento,Opencart`,
          detail:`Developed Module for sync Data between Odoo and Magento 2.4 / Opencart to list secondhand brandname products from Odoo. Features include automatic synchronization, real-time inventory sync, REST APIs for product tracking status, auto-generation of order invoice, and customer loyalty points program.
          `,
          tools:`Tools: Git,Bitbucket,Python, Postgres , Vscode , Postman , Magento 2.4 , Opencart , Swagger, Docker, Ubuntu Server`,
          link:[`https://sfbrandname.com`,`https://www.kanekoji.com`]
        },
         {
          title:`PEA Overdue Bill / Electric Bill Android Application`,
          detail:`Developed demo and completed PEA Overdue electric bill Android app, including Bluetooth printer connectivity and CPCL command set for printing pre-printed forms. Features include sample bill printing, text format design, QR code command set, font selection, and paper format and tear-off adjustment. Also created SDK manual for customers.`,
          tools:`Tools: Git, Bitbucket, Java, Android Studio, SQLite`,
          link:[`https://www.pea.co.th`]
        },
        {
          title:`Smart Track`,
          tools:`Tools: Git, Bitbucket, Kotlin, Android Studio, SQLite, PHP, Mysql`,
          detail:`Develop an Android application for Fixed Asset Tracking, which includes features such as QR/barcode scanning for asset status/movement, REST APIs, data uploading to backend, QR code generation, asset reporting by location and loss, barcode sticker printing, USB data sync with computer/server, and data export to ERP, while ensuring compatibility with Android devices.`,
          link:[`https://www.aeon.co.th`,`https://www.evergreen-shipping.co.th`,`https://www.isuzu.co.th`]
        },
        {
          title:`License Activator`,
          tools:`Tools: Git, Bitbucket, Codigniter, PHP, Mysql,AngularJS`,
          detail:`Develop "License Activator" web application for Android device licenses activation,
           allowing customers to register and activate their licenses for "Smart Track" and "Smart Sales.`,
          link:[`http://www.rbs.co.th`]
        },
         {
          title:`ThaiQR Payment Management System`,
          tools:`Tools: Git, Bitbucket, Codigniter, PHP, Mysql`,
          detail:`Develop a web application using CodeIgniter that allows customers to make payments by scanning QR codes generated by SCB and Kbank. The application will integrate with bank APIs to create and cancel payments. Additionally, the system will include a feature for detecting fake QR codes to prevent fraud.`,
          link:[`https://www.nanyang.co.th`]
        },
        {
          title:`BeerLao Bill Printing App with Bluetooth Printer Integration`,
          tools:`Tools: Git, Bitbucket, Java, Android Studio, SQLite`,
          detail:`Develop a billing and printing solution for BeerLao using a Bluetooth printer and ESC code mode to print on continuous paper. As the printer is unable to print Lao fonts, the billing solution includes generating a bill image using HTML and CSS. The solution includes features such as formatting options, font selection, and paper size adjustment. Additionally, the solution includes an SDK manual for customers.`,
          link:[`https://www.beerlao.la`]
        },
      ],

    }
  },
  
}
</script>

<style>
</style>