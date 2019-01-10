# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: 'jasonantaya808@gmail.com', password: '123456789', role: 'admin')

Exhibition.create!(name: 'Test Exhibition', date: '12/25/2018', location: 'North Pole')
Exhibition.create!(name: 'Exhibition 2', date: '12/26/2018', location: 'South Pole')
Exhibition.create!(name: 'Test Exhibition', date: '12/28/2018', location: 'West Pole')

Image.create!(name: 'Beautiful Photo', price: '$20', description: 'Test description', exhibition_id: 1, image: 'https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/49721921_1980039598762081_2995579237571756032_o.jpg?_nc_cat=108&_nc_eui2=AeHyNeG7bDvGo3Vu59oZ8yACfhWr_h_YO-aDMvEkn6S_kzsWaybO8LbSOEYi7DZb8OU8XPHrwT2nvs2BHH414yaA6XgnjaElxBwtd8w6JClUrw&_nc_ht=scontent.fbed1-1.fna&oh=5744eaf00252a765b9027ebdc167b0a2&oe=5C8DC80D')
Image.create!(name: 'Super Photo', price: '$20', description: 'Test description', exhibition_id: 1, image: 'https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/49132387_1954750751290966_2534407330322186240_n.jpg?_nc_cat=111&_nc_eui2=AeEKSqMFu0FSJCnBA8rMo2rQnrTvmFMvDZbHhz5fF27LYr909Vf12dpwH4qxtLGoMl-7o5WDJ73BuLA4dOt4KF_3NAND_bRZfDbLZ7gAh5aNjQ&_nc_ht=scontent.fbed1-2.fna&oh=6d09e5824cbd321b488b50069db23d38&oe=5CC18F47')
Image.create!(name: 'Another Photo', price: '$20', description: 'Test description', exhibition_id: 1, image: 'https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/47680974_1936699416429433_7159041098894016512_o.jpg?_nc_cat=108&_nc_eui2=AeHXPm50_6YrRQK5d3Cp7DNgTFeM6XtdA7rodMyZvNLnFPbBQwUyCp4KTv_DfP22WkgPgCJ2zqSznn1eRlBk07ONO0v4uL0Zyq_C0pQH2NMJ7A&_nc_ht=scontent.fbed1-1.fna&oh=4624f34793708229d2211f71b1f2496c&oe=5CCBDFF2')
Image.create!(name: 'This pic', price: '$20', description: 'Test description', exhibition_id: 2, image: 'https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/45339927_1881569291942446_878825148566732800_o.jpg?_nc_cat=106&_nc_eui2=AeHwwp4pO_VLgpCPhs9jA0PXpz6dHnZhNuHPnWEXzOFG25LXfVyEzlX0jN6djFfd6C2NJXCENSCOvmcIKdPuycjBlKuHrdtQjnOlDOdSoRw6Rw&_nc_ht=scontent.fbed1-2.fna&oh=67a271e4c43b56be2646d7ddd5520b8f&oe=5CBCB11E')
Image.create!(name: 'Swell Pic', price: '$20', description: 'Test description', exhibition_id: 3, image: 'https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/45159303_1876959212403454_830625277519331328_o.jpg?_nc_cat=102&_nc_eui2=AeEQ6iRuuE55dqPZfi-3vGGiOw2Ybj0Hj69zhDRbAfsazV4_FRMh-xe2ikZAnojtKNFRGSGFa5XyQF3qasipfncXMXteKT6voZvTxfxay5Nf1w&_nc_ht=scontent.fbed1-2.fna&oh=ab690a5af436a1fc34a1a6dcb730e006&oe=5CBD63C8')
Image.create!(name: 'Dooooooood', price: '$20', description: 'Test description', exhibition_id: 3, image: 'https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/43664749_1864819153617460_5247799824908025856_o.jpg?_nc_cat=108&_nc_eui2=AeFWWyBwiUddkTUr37yWbpSvzLRCrLKsmXKL6JQ15aHaFH42f6UM4UVs1ENMLwzKL4v7bL-d453914wVz8mJPJDpQlvFAOP8Rxlw7Hhl1pVRyg&_nc_ht=scontent.fbed1-1.fna&oh=d2ff9b0483e97895b123c3db3f02f96d&oe=5CCA690B')
Image.create!(name: 'Another This Pic', price: '$20', description: 'Test description', exhibition_id: 3, image: 'https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/43655135_1863466323752743_8793318550644195328_o.jpg?_nc_cat=111&_nc_eui2=AeEwpV4JRGD4x3_97hRsjHjcIXoPaCs55cwMCYahW7sgbI6IrqaKr6cGbFi5SSunwL9OYpNR_Y-N5EH0cM2KuIkQ5cl_B1S5p6hRNIo_Say0Xg&_nc_ht=scontent.fbed1-2.fna&oh=63628e8f6c9f25b7e984678c6203b4a7&oe=5CC8FE27')
Image.create!(name: 'Brown Photo', price: '$20', description: 'Test description', exhibition_id: 3, image: 'https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/36394537_1702090223223688_5149512680909832192_o.jpg?_nc_cat=104&_nc_eui2=AeE3l2Jh-oejRvKDzBs8A9QuR91UUed64FWeANZj2vpwng4Z9BDjU26Lsb3EJFSKSAPOIwYuRyK14dToVoamUB0reA1GTs0DKn2FkRBImg9kQw&_nc_ht=scontent.fbed1-2.fna&oh=67cee3c76810ae715fe21049dbdc575e&oe=5CC5AFB0')
Image.create!(name: 'Purple Suit', price: '$20', description: 'Test description', exhibition_id: 3, image: 'https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/36325332_1700436443389066_2578866095876210688_o.jpg?_nc_cat=101&_nc_eui2=AeE6cIA4AVXUDgUgahjPcvlGpgL4D72-UdsruYatDJJKi0Q5eRjVFfnbdtwEKUGhLZgNoMfGfCTqRlPqB75ExnCopDVBX1ZYWldF9s5YCQcMqg&_nc_ht=scontent.fbed1-1.fna&oh=59a5450a37a8120bc51007a8f291cc9a&oe=5CD70870')
