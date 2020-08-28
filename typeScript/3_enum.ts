enum Membersheep{
    simple,
    standart,
    premium
}

const membersheep = Membersheep.standart;
const membersheepReverse = Membersheep[2];
console.log(membersheep);
console.log(membersheepReverse);

enum SocialMedia {
    vk = 'vk',
    facebook = 'facebook',
    instagram = 'instagram'
}

const social = SocialMedia.instagram;
console.log(social); 
