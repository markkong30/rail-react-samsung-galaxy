# README

This project aims to create a minimal clone of Samsung Galaxy S22 Ultra landing page, and a checkout session for purchase. The original website is on https://www.samsung.com/hk_en/smartphones/galaxy-s22-ultra/. 
The website is responsive though, OPTIMIZED for medium to large screens where most of the fancy animations and layouts were not designed for mobiles or small screens.

Objective: Extensive showcase of fancy animations to maximize user's experience, in turn increasing their willingness to purchase the newest Galaxy S22 Ultra.  

Languages: React JS, Ruby on rails

Libaries: gsap, framer motion, three js, styled components, redux etc...

Pages: 

- Landing (Modals with a 3D Model)
- User login / signup 
- User orders
- Stock and specs
- Stripe checkout

Backend API:

- User and Session Model handling login and signup
- Phone Model handling inventory system 
- Spec Model handling specs and prices
- Order Model handling users' order
- Charge Model handling users' payment


-- To run the project, remember to run rails db:migrate && rails db:seed.
