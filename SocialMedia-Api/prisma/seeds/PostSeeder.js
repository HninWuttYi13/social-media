const {PrismaClient } = require("@prisma/client");
const {faker} = require("@faker-js/faker");
const prisma = new PrismaClient();
async function PostSeeder(){
    const data = [];
    for(let i =0 ; i <20; i++){
        const content = faker.lorem.paragraph();
        const images = [faker.image.urlLoremFlickr(), faker.image.urlLoremFlickr()];
        const userId = faker.number.int({min: 1, max: 10});
        data.push({content, images, userId})
    }
    console.log("Post Seeding is started");
    await prisma.post.createMany({data});
    console.log("Post Seeding done");
    
   
}
module.exports = {PostSeeder};