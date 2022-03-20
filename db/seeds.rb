# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


phones = Phone.create([
    {
        title: 'Burgundy',
        color: '#644D58',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/burgundy_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/burgundy_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/burgundy_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/burgundy-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/burgundy-buy.jpg'
        },
        size: 'small',
        stock: 20,
        storage: 128,
        price: 1149
    }, {
        title: 'Burgundy',
        color: '#644D58',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/burgundy_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/burgundy_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/burgundy_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/burgundy-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/burgundy-buy.jpg'
        },
        size: 'medium',
        stock: 5,
        storage: 256,
        price: 1249
    }, {
        title: 'Burgundy',
        color: '#644D58',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/burgundy_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/burgundy_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/burgundy_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/burgundy-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/burgundy-buy.jpg'
        },
        size: 'large',
        stock: 10,
        storage: 512,
        price: 1329
    }, {
        title: 'Green',
        color: '#587876',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/green_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/green_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/green_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/green-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/green-buy.jpg'
        },
        size: 'small',
        stock: 0,
        storage: 128,
        price: 1149
    }, {
        title: 'Green',
        color: '#587876',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/green_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/green_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/green_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/green-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/green-buy.jpg'
        },
        size: 'medium',
        stock: 20,
        storage: 256,
        price: 1249
    }, {
        title: 'Green',
        color: '#587876',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/green_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/green_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/green_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/green-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/green-buy.jpg'
        },
        size: 'large',
        stock: 15,
        storage: 512,
        price: 1329
    }, {
        title: 'Phantom White',
        color: '#E9E9E7',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/white_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/white_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/white_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/white-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/white-buy.jpg'
        },
        size: 'small',
        stock: 0,
        storage: 128,
        price: 1149
    }, {
        title: 'Phantom White',
        color: '#E9E9E7',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/white_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/white_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/white_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/white-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/white-buy.jpg'
        },
        size: 'medium',
        stock: 20,
        storage: 256,
        price: 1249
    }, {
        title: 'Phantom White',
        color: '#E9E9E7',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/white_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/white_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/white_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/white-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/white-buy.jpg'
        },
        size: 'large',
        stock: 10,
        storage: 512,
        price: 1329
    }, {
        title: 'Phantom Black',
        color: '#000000',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/black_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/black_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/black_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/black-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/black-buy.jpg'
        },
        size: 'small',
        stock: 20,
        storage: 128,
        price: 1149
    }, {
        title: 'Phantom Black',
        color: '#000000',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/black_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/black_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/black_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/black-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/black-buy.jpg'
        },
        size: 'medium',
        stock: 0,
        storage: 256,
        price: 1249
    }, {
        title: 'Phantom Black',
        color: '#000000',
        image: {
            front: 'https://rails-react-samsung.s3.amazonaws.com/carousel/black_front.jpg',
            rear: 'https://rails-react-samsung.s3.amazonaws.com/carousel/black_rear.jpg',
            side: 'https://rails-react-samsung.s3.amazonaws.com/carousel/black_side.jpeg',
            slider: 'https://rails-react-samsung.s3.amazonaws.com/slider/black-slider.jpg',
            buy: 'https://rails-react-samsung.s3.amazonaws.com/buy/black-buy.jpg'
        },
        size: 'large',
        stock: 5,
        storage: 512,
        price: 1329
    }
])

specs = Spec.create([
    {
        size: 'small',
        storage: 128,
        price: 1149
    }, {
        size: 'medium',
        storage: 256,
        price: 1249
    }, {
        size: 'large',
        storage: 512,
        price: 1329
    }
])

